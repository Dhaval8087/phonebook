import toastr from 'toastr';
import axios from 'axios';
import AppDispatcher from '../Dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import ContactActions from '../Actions/ContactActions';
import Constants from '../Constants/Constant';
import _ from 'underscore';


let _contacts = [];
function loadContacts(data) {
    _contacts = data;
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
    unassginVendorBuyer: function (orgid, callback) {
        axios.post(getAPIUrl() + 'unassginebuyervendor', {
            orgid: orgid
        }).then((response) => {
            callback();
        }).catch(error => {
            toastr.error(error);
            callback();
        });
    }
});

// Register callback with AppDispatcher
AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
        // Respond to RECEIVE_LOGIN_RES action
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
//module.exports = loginStore;