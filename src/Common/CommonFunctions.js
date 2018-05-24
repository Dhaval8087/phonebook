import React, { Component } from 'react';
import toastr from 'toastr';
import AppConstant from '../AppConstant'
export default class CommonFunctions extends React.Component {

  static validateEmail(email) {
    var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    var valid = tester.test(email);
    if (valid == false)
      toastr.error(AppConstant.EMAIL_VALIDATION);
    return valid;
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}