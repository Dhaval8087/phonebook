var AppDispatcher = require('../Dispatcher/AppDispatcher');
var Constants = require('../Constants/Constant');
var ContactActions = {
    // Receive contact response
    receiveContacts: function (data) {
        AppDispatcher.handleAction({
            actionType: Constants.RECEIVE_CONTACTS_RES,
            data: data
        })
    },
    //Receive contact details response
    receiveContactDetails:function(data){
        AppDispatcher.handleAction({
            actionType: Constants.RECEIVE_CONTACT_DETAILS_RES,
            data: data
        })
    }
};
module.exports = ContactActions;