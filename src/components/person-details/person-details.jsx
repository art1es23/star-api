import React, { Component } from 'react';
import './person-details.css';
export default class PersonDetails extends Component {
    render () {
        return (
            <div className="person-details">
            <div className="person-details__img">
                <img src="" alt="person-details" />
            </div>
            <h3 className="person-details__caption">Planet Name</h3>
            <ul className="list-group">
                <li className="list-group__item"><span>Some text</span><span>Some text</span></li>
                <li className="list-group__item"><span>Some text</span><span>Some text</span></li>
                <li className="list-group__item"><span>Some text</span><span>Some text</span></li>
            </ul>
        </div>

        )
    }
}