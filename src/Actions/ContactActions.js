var AppDispatcher = require('../Dispatcher/AppDispatcher');
var Constants = require('../Constants/Constant');

var ContactActions = {
    // Receive contact response
    receiveContacts: function (data) {
        AppDispatcher.handleAction({
            actionType: Constants.RECEIVE_CONTACTS_RES,
            data: data
        })
    }
};
module.exports = ContactActions;