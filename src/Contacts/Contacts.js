import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Search from './Search';
import Contactdetail from './Contactdetails';
import Contactlist from './Contactlist';
export default class Contacts extends Component {
    render() {
        return (

            <Grid container columns={2}>
                <Grid.Column width={6}>
                    <Search />
                    <Contactlist />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Contactdetail />
                </Grid.Column>
            </Grid>

        )
    }
}