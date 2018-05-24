import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Search from './Search';
import Contactdetail from './Contactdetails';
import Contactlist from './Contactlist';
import ContactDetailStore from '../Stores/ContactDetailStore';
import ContactStore from '../Stores/ContactStore';
import './Contacts.css';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';
export default class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            isDetail: false,
            isAdd: false
        }
    }
    componentDidCatch(error, info) {
        console.log(error);
    }
    onItemClick = (e, data) => {
        e.stopPropagation();
        var contactid = data.children[1];
        if (typeof contactid != "undefined") {
            ContactDetailStore.getContactDetails(contactid.props.id);
            this.setState({ isDetail: false });
            this.setState({ isDetail: true, isAdd: false });
        }
    }
    onSearch = (e) => {
        ContactStore.onSearch(e.target.value);
    }
    onAdd = () => {
        this.setState({ isDetail: true, isAdd: true });
    }
    infoDialog = () => {
        return (
            <div>
                <div className="KPKL">
                    <div className="KPDY">
                        <div className="KPBY">
                            <Icon name="arrow left" size="massive" color="white" className="arrow" />
                        </div>
                    </div>
                </div>
                <div className="KPCY">
                    <p className="KPFY">Hi!</p>
                    <p className="KPEY">Let's start!</p>
                </div>
            </div>

        )
    }
    render() {
        return (

            <Grid container columns={2}>
                <Grid.Column width={6}>
                    <Search onAdd={this.onAdd} onSearch={this.onSearch} />
                    <Contactlist onItemClick={this.onItemClick} />
                </Grid.Column>
                <Grid.Column width={8}>
                    {this.state.isDetail ? <Contactdetail isAdd={this.state.isAdd} /> : this.infoDialog()}
                </Grid.Column>
            </Grid>

        )
    }
}