import toastr from 'toastr';
import axios from 'axios';
import AppDispatcher from '../Dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import ContactActions from '../Actions/ContactActions';
import Constants from '../Constants/Constant';
import Config from '../Config';
import _ from 'underscore';
import AppConstant from '../AppConstant';
let _contacts = [];
let _tempContacts = [];
let isSearch = false;
function loadContacts(data) {
    data.splice(0, 1);// this is the index 0 recorde which is require in json-server.
    _contacts = data;
    _tempContacts = data;

}

let ContactStore = _.extend({}, EventEmitter.prototype, {
    // Return contacts data
    getContacts: function () {
        return _contacts;
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
    // get all the contacts
    getAllContacts: function () {
        axios.get(Config.API_URL + AppConstant.API_CONTACT).then((response) => {
            ContactActions.receiveContacts(response.data);
        }).catch(error => {
            toastr.error(error);
        });
    },
    // delete the contact
    deleteContact: function (id) {
        axios.delete(Config.API_URL + AppConstant.API_CONTACT + '/' + id).then((response) => {
            toastr.success(AppConstant.DELETE_CONTACT_SUCCESS);
            ContactStore.getAllContacts();
        }).catch(error => {
            toastr.error(error);
        })
    },
    //search based on the phone numner and name
    onSearch: function (value) {
        if (value == '') {
            _contacts = _tempContacts;
        }
        else {
            value = value.toLowerCase();
            _contacts = _tempContacts.filter(function (item) {
                if (item.name.toLowerCase().indexOf(value) != -1 || item.number.indexOf(value) != -1)
                    return true;
                else
                    return false;

            });
        }
        ContactStore.emitChange();
    }
});

// Register callback with AppDispatcher
AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
        // Respond to RECEIVE_CONTACTS_RES action
        case Constants.RECEIVE_CONTACTS_RES:
            loadContacts(action.data);
            break;
        default:
            return true;
    }

    // If action was responded to, emit change event
    ContactStore.emitChange();
    return true;

});

export default ContactStore;