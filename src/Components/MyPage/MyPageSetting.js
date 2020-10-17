import React, { Component } from "react";
import './css/MyPageSetting.css';
import { connect } from 'react-redux';
import { Grid, Icon, Header, Container, Card } from "semantic-ui-react";


class MyPageSetting extends Component{
  

  render(){
    const { id, description, content } =this.props;

    return(
    <div>
      <Header as="h2" inverted textAlign="center">
        Divided
      </Header>
          <Grid.Column className="Column">
            <Card>
              <Card.Content>
                <Card.Header>{id}</Card.Header>
                <Card.Meta>{description}</Card.Meta>
                <Card.Description>{content}</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
    </div>
    );
  }
}


export default connect()(MyPageSetting);