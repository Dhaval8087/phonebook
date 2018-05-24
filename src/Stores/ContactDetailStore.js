import toastr from 'toastr';
import axios from 'axios';
import AppDispatcher from '../Dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import ContactActions from '../Actions/ContactActions';
import Constants from '../Constants/Constant';
import Config from '../Config';
import _ from 'underscore';
import AppConstant from '../AppConstant';
import ContactStore from './ContactStore';
let _contact = [];
function loadContactDetail(data) {
    _contact = data;
}

let ContactDetailStore = _.extend({}, EventEmitter.prototype, {
    // Return contacts data
    getContactDetail: function () {
        return _contact;
    },
    // Emit Change event
    emitChange: function () {
        this.emit('change');
    },
    // Add change listener
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    // Remove change listener
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },
    // get the contact details
    getContactDetails: function (id) {
        axios.get(Config.API_URL + AppConstant.API_CONTACT + '/' + id).then((response) => {
            ContactActions.receiveContactDetails(response.data);
        }).catch(error => {
            toastr.error(error);
        });
    },
    //add the new contact
    addNewContact: function (data) {
        axios.post(Config.API_URL + AppConstant.API_CONTACT,
            {
                name: data.name,
                number: data.number,
                email: data.email
            }).then((response) => {
                toastr.success(AppConstant.INSERT_CONTACT_SUCCESS);
                ContactStore.getAllContacts();
            }).catch(error => {
                toastr.error(error);
            })
    },
    //update the contact 
    updateContactDetails: function (data) {
        axios.put(Config.API_URL + AppConstant.API_CONTACT + '/' + data.id,
            {
                name: data.name,
                number: data.number,
                email: data.email
            }).then((response) => {
                toastr.success(AppConstant.UPDATE_CONTACT_SUCCESS);
                ContactStore.getAllContacts();
            }).catch(error => {
                toastr.error(error);
            })
    }

});

// Register callback with AppDispatcher
AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
        // Respond to RECEIVE_LOGIN_RES action
        case Constants.RECEIVE_CONTACT_DETAILS_RES:
            loadContactDetail(action.data);
            break;
        default:
            return true;
    }

    // If action was responded to, emit change event
    ContactDetailStore.emitChange();
    return true;

});

export default ContactDetailStore;