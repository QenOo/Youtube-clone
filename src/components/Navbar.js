import React, { Component } from 'react';
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import {ReactComponent as SearchIcon} from '../assets/img/search.svg'

class Navbar extends Component {
    render () {
        const {handelChange, keyWord, handelClick} = this.props
        return (
            <div className="navbar">
                <div className="container">
                    <div className="navbar-item flex">
                        <div className="logo">
                            <Logo />
                        </div>
                        <div className="search">
                            <input value={keyWord} onChange={handelChange} />
                            <button onClick={handelClick}> <SearchIcon /> </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Navbar;