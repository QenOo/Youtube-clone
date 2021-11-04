import React, { Component } from 'react';
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import {ReactComponent as SearchIcon} from '../assets/img/search.svg'

class Navbar extends Component {
    render () {
        return (
            <div className="navbar">
                <div className="container">
                    <div className="navbar-item flex">
                        <div className="logo">
                            <Logo />
                        </div>
                        <div className="search">
                            <input />
                            <button><SearchIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Navbar;