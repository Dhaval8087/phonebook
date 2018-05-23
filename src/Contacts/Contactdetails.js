import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react';

import './Contactdetails.css'

export default class Contactdetails extends Component {
    render() {
        return (
            <Segment className="margintop">
                <Image className="imgtopmargin"
                    avatar src='https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg'
                    centered size="small" />
            </Segment>

        )
    }
}