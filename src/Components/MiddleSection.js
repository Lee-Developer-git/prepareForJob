import React, { Component } from 'react';
import './MiddleSection.css';
import MiddleSectionItem from './MiddleSectionItem';
import { Dropdown, Input, Button, Icon } from 'semantic-ui-react';


class MiddleSection extends Component {
  state ={
    options : [
      { key: 'page', text: 'This Page', value: 'page' },
      { key: 'org', text: 'This Organization', value: 'org' },
      { key: 'site', text: 'Entire Site', value: 'site' },
    ]
  }
  
  DropdownExample = () => (
    <Input
      action={
        <Dropdown button basic floating options={this.state.options} defaultValue='page' />
      }
      icon='search'
      iconPosition='left'
      placeholder='Search...'
    />
  )

  ButtonExample = () => (
    <Button primary>게시판 가기</Button>  
  )
  
  Building = () => (
    <Icon name='building outline' size='big'/>
  )
  
  Tasks = () => (
    <Icon name='tasks' size='big'/>
  )

  Cloud = () => (
    <Icon name='cloud' size='big'/>
  )

  Idea = () =>(
    <Icon name='idea' size='big'/>
  )

  render() {
    const{
      DropdownExample,
      Tasks,
      Building,
      ButtonExample,
      Cloud,
      Idea
    } = this;

    return(
      <MiddleSectionItem
        DropdownExample={DropdownExample}
        Tasks={Tasks}
        Building={Building}
        ButtonExample={ButtonExample}
        Cloud={Cloud}
        Idea={Idea}
      />
    );
  };
};

export default MiddleSection;