import React, { Component } from 'react';

import './random-planet.css';

export default class RandomPlanet extends Component {
    render () {        
        return (
            <div className="random-planet">
                <div className="random-planet__img">
                    <img src="" alt="Planet" />
                </div>
                <h3 className="random-planet__caption">Planet Name</h3>
                <ul className="list-group">
                    <li className="list-group__item"><span>Some text</span><span>Some text</span></li>
                    <li className="list-group__item"><span>Some text</span><span>Some text</span></li>
                    <li className="list-group__item"><span>Some text</span><span>Some text</span></li>
                </ul>
            </div>
        )    
    }
}