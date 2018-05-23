import React, { Component } from 'react';
import { Image, List, Segment } from 'semantic-ui-react';
import './Contactlist.css';
export default class Contactlist extends Component {
    LoadRecord = () => {
        var tar = [];
        for (let index = 0; index < 3; index++) {
            var test = (
                <List.Item style={{ "coursor": "pointer" }}>
                    <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg' />
                    <List.Content>
                        <List.Header>Helen</List.Header>
                        9427857321
              </List.Content>
                </List.Item>
            )
            tar.push(test);
        }
        return tar;
    }
    render() {
        return (
            <Segment className="contactlist">
                <List animated divided verticalAlign='middle' size="massive">
                    {this.LoadRecord()}
                </List>

            </Segment>

        )
    }
}