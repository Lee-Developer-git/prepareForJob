import React, { Component } from 'react';
import './MiddleSection.css';
import MiddleSectionItem from './MiddleSectionItem';


class MiddleSection extends Component {
  render() {
    const { item } =this.props;
    
    const information = item.map(
      ({shape, title, text}) => (
        <MiddleSectionItem
          shape={shape}
          title={title}
          text={text}
        />
      )
    )

    return(
      <div>
        {information}
      </div>
    );
  };
};



export default MiddleSection;