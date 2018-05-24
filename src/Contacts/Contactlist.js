import React, { Component } from 'react';
import { Image, List, Segment,Button,Icon } from 'semantic-ui-react';
import './Contactlist.css';
export default class Contactlist extends Component {
    LoadRecord = () => {
        var tar = [];
        for (let index = 0; index < 3; index++) {
            var test = (
                <List.Item className="left" onClick={this.onItemClick}>
                    <List.Content floated='right' verticalAlign='middle'>
                        <Icon  name='delete' color='red' id={index} onClick={this.onDeleteContact} />
                    </List.Content>
                    <Image id={index} avatar src='https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg' />
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
    onItemClick = (e, data) => {
        e.stopPropagation();
        console.log("Item Click");
        var dd = data.children[1];
        console.log(dd.props.id);
    }
    onDeleteContact=(e)=>{
        console.log("delete called");
        e.stopPropagation();
        console.log(e.target.id);
    }
    render() {
        return (
            <Segment className="contactlist">
                <List animated divided verticalAlign='middle' size="massive" onItemClick={this.onItemClick}>
                    {this.LoadRecord()}
                </List>
            </Segment>

        )
    }
}