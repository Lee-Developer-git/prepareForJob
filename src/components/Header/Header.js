import React, { Component } from 'react';
import MenuItem from './MenuItem';

import './css/Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="logo">LOGO</div>
                <div className="menu">
                    <MenuItem>HOME</MenuItem>
                    <MenuItem>BOARD</MenuItem>
                    <MenuItem>ABOUT</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                </div>
                <br/><br/><br/><br/>
            </div>
        );
    }
}

export default Header;