import React, { Component } from 'react';
import { Segment, Image, Input, Grid, Form, Divider, Container } from 'semantic-ui-react';
import ContactDetailStore from '../Stores/ContactDetailStore';
import './Contactdetails.css'
import Spinner from '../Spinner';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import AppConstant from '../AppConstant';
import toastr from 'toastr';
import CommonFunctions from '../Common/CommonFunctions';
var defaultAvatar = require('../assets/images/default-userAvatar.png');
export default class Contactdetails extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            number: '',
            email: '',
            id: 0,
            isLoad: true
        };
    }
    //it will be called when emit change fire from the ContactDetailStore
    onChange = () => {
        const { name, number, email, id } = ContactDetailStore.getContactDetail();
        this.setState({ name: name, number: number, email: email, id: id, isLoad: false });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isAdd) {
            this.state.name = '';
            this.state.number = '';
            this.state.email = '';
        }
    }
    componentDidCatch(error, info) {
       console.log(error);
    }
    componentDidMount() {
        this.setState({
            isLoad: this.props.isAdd ? false : true,
            name: this.state.name,
            number: this.state.number,
            email: this.state.email
        });
        //register the event
        ContactDetailStore.addChangeListener(this.onChange);
    }
    componentWillUnmount() {
        //unregister the event
        ContactDetailStore.removeChangeListener(this.onChange);
    }
    handleChange = (e) => {
        const newState = this.state;
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    };
    onSave = () => {
        if (this.state.number == '' || this.state.name == '') {
            toastr.error(AppConstant.NUMBER_NAME_VALIDATION);
            return;
        }
        if (!CommonFunctions.validateEmail(this.state.email)) {
            return;
        }
        var data = {
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            id: this.state.id
        };
        if (this.props.isAdd) {
            ContactDetailStore.addNewContact(data);
            this.clear();
        }
        else {
            ContactDetailStore.updateContactDetails(data);
        }
    }
    // it will handle the submit on enter.
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onSave();
        }
    }
    clear() {
        this.setState({ name: '', number: '', email: '' });
    }
    render() {
        return (
            <Spinner isLoad={this.state.isLoad}>
                <Segment className="margintop">
                    <Image className="imgtopmargin"
                        avatar src={defaultAvatar}
                        centered size="small" />
                    <Divider hidden />

                    <Grid container>
                        <Grid.Column width={5} />
                        <Grid.Column width={10}>
                            <Form>
                                <Form.Field >
                                    <Input placeholder='Name' name="name" value={this.state.name} onChange={this.handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <Input placeholder='Phone Number' type="phone" name="number" value={this.state.number} onChange={this.handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <Input placeholder='email' name="email" value={this.state.email} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                    </Grid>
                    <Divider hidden />
                    <Container textAlign="right" >
                        <Button primary onClick={this.onSave} className="savebtn">Save</Button>
                    </Container>
                </Segment>
            </Spinner>

        )
    }
}