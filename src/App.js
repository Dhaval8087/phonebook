import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Segment, Image, List } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Segment textAlign="left">
          
            <List animated verticalAlign='middle' size="massive">
              <List.Item style={{"coursor":"pointer"}}>
                <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg' />
                <List.Content>
                  <List.Header>Helen</List.Header>
                  9427857321
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg' />
                <List.Content>
                  <List.Header>Christian</List.Header>
                  9427857321
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg' />
                <List.Content>
                  <List.Header>Daniel</List.Header>
                  9427857321
                </List.Content>
              </List.Item>
            </List>
         
        </Segment>
        <Button primary>Click</Button>
      </div>
    );
  }
}

export default App;
