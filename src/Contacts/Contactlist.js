import React, { Component } from 'react';
import { Image, List, Segment, Button, Icon } from 'semantic-ui-react';
import ContactStore from '../Stores/ContactStore';
import ContactDetailStore from '../Stores/ContactDetailStore';
import './Contactlist.css';
import Spinner from '../Spinner';
var defaultAvatar = require('../assets/images/default-userAvatar.png');

export default class Contactlist extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [],
            isLoad: false
        };
    }
    componentDidCatch(error, info) {
        console.log(error);
     }
    onChange = () => {
        this.setState({ contacts: ContactStore.getContacts(), isLoad: false });
    }
    componentDidMount() {
        ContactStore.addChangeListener(this.onChange);
        this.setState({ isLoad: true });
        ContactStore.getAllContacts();
    }
    componentWillUnmount() {
        ContactStore.removeChangeListener(this.onChange);
    }
    LoadItems = () => {
        if (typeof this.state != "undefined" && this.state != null) {
            var items = this.state.contacts.map(function (item, index) {
                if (item.id != 0) {
                    return (
                        <List.Item className="left" onClick={this.props.onItemClick}>
                            <List.Content floated='right' verticalAlign='middle'>
                                <Icon name='delete' color='red' id={item.id} onClick={this.onDeleteContact} />
                            </List.Content>
                            <Image id={item.id} avatar src={defaultAvatar} className="avatarimage" />
                            <List.Content>
                                <List.Header>{item.name}</List.Header>
                                <span className="number">{item.number}</span>
                            </List.Content>
                        </List.Item>
                    )
                }

            }.bind(this));
            return items;
        }
        else {
            return null;
        }
    }
    onDeleteContact = (e) => {
        e.stopPropagation();
        ContactStore.deleteContact(e.target.id);
    }
    render() {
        return (
            <Spinner isLoad={this.state.isLoad}>
                {typeof this.state != "undefined" && this.state != null && this.state.contacts.length > 0 ?
                    <Segment className="contactlist">
                        <List animated divided verticalAlign='middle' size="massive">
                            {this.LoadItems()}
                        </List>
                    </Segment> : null}
            </Spinner>
        )
    }
}