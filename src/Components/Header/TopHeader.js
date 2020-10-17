import React, { Component } from 'react';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
import './css/TopHeader.css';

class Navigation extends Component {
    render() {
        return (
            <div>
                <div className="logo">LOGO</div>
                <div className="menu">
                    <Link ><MenuItem>HOME</MenuItem></Link>
                    <Link><MenuItem>BOARD</MenuItem></Link>
                    <Link><MenuItem>ABOUT</MenuItem></Link>
                    <Link><MenuItem>LOGIN</MenuItem></Link>
                </div>
                <br/><br/><br/><br/>
            </div>
        );
    }
}

export default Navigation;