import React, { Component } from 'react';
import { Button, Segment, Image, List, Grid, Input } from 'semantic-ui-react';
import './Search.css'
var add = require('../assets/images/add.png');
var search = require('../assets/images/search.png');
export default class Search extends Component {
    render() {
        return (
            <div className="KPLL">
                <div className="KPDM">
                  
                        <div className="KPKM">
                            <Input icon='search' placeholder='Search...' />
                        </div>
                        <div className="KPCM">
                            <div className="KPPM">
                                <div className="KPGL">
                                    <Image className="KPGL" alt="newContact" src={add} />
                                </div>
                            </div>
                        </div>
                        <div className="KPBM">
                        </div>
                </div>
            </div>

        )
    }
}