import React, { Component } from 'react';
import './MiddleSectionItem.css';


class MiddleSectionItem extends Component {
    render(){
        const { shape, title, text } = this.props;

        return(
            <div className="SectionItem">
                <div className="Information">
                    <div className="Information-box">
                        <div className="Information-icon">{shape}</div><br/>
                        <div className="Information-title">{title}</div>
                        <div className="Information-text">{text}</div>
                    </div>
                </div>
            </div>
        );
    };
}



export default MiddleSectionItem;