import React, { Component } from 'react';
import GetService from '../../services';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

export default class App extends Component {

    GetService = new GetService();

    render () {        
        return (
            <div className="app">
                <Header/>
                <RandomPlanet/>
                <div className="row item-wrapper">
                    <div className="col-md-6">
                        <ItemList/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        )    
    }
}