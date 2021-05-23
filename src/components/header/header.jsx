import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
    render () {        
        return (
            <header className="header">
                <h1 className="logo">Starwars</h1>
                <ul className="nav">
                    <li className="nav__item"><a href="google.com" className="nav__link">People</a></li>
                    <li className="nav__item"><a href="google.com" className="nav__link">People</a></li>
                    <li className="nav__item"><a href="google.com" className="nav__link">People</a></li>
                    <li className="nav__item"><a href="google.com" className="nav__link">People</a></li>
                </ul>
            </header>
        )    
    }
}
