import React, { Component } from 'react';

import './item-list.css';

export default class ItemList extends Component {
    render () {
        return (
            <ul className="item-list">
                <li className="item-list__item">Luke Skywalker</li>
                <li className="item-list__item">Luke Skywalker</li>
                <li className="item-list__item">Luke Skywalker</li>
            </ul>
        )
    }
}