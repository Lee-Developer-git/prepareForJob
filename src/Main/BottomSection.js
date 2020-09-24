import React, { Component } from 'react';
import './BottomSection.css';

class BottomSection extends Component {
    render(){
        return(
            <div className="BottomSection">
                <div className="BottomSection-top">
                    <div className="Bottom-text"><strong>ABOUT US</strong></div><br/>
                    <button className="Button-default">button</button>
                    <button className="button-blue">button</button>
                    <button className="Button-default">button</button>
                </div>
            </div>
        );
    };
}

export default BottomSection;