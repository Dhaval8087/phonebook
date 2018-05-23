import React from 'react';
import './Nav.css';
import { Image } from 'semantic-ui-react';
var phonebooklogo = require('../../src/assets/images/phonebook.png');
const Nav = () => (
    <div className="ui fixed menu inverted">
        <div class="ui container" >
            <Image src={phonebooklogo} className="imgtopMargin" />
            <span className="appname"> My phonebook</span>
        </div>
    </div>
);
export default Nav;