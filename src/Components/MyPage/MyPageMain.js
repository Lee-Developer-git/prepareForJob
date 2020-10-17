import React from "react";
import { Grid, Image, Segment, Header, Button } from "semantic-ui-react";

const MyPageMain = () => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Header
      as="h1"
      verticalAlign="middle"
      textAlign="center"
      //style={{ fontSize: "2em" }}
    >
      My Page
    </Header>
    <br />
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <br />
        <Grid.Column width={8}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            We Help Companies and Companions
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            We can give your company superpowers to do things that they never
            thought possible. Let us delight your customers and empower your
            needs... through pure data analytics.
          </p>
          <Header as="h3" style={{ fontSize: "2em" }}>
            We Make Bananas That Can Dance
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Yes that's right, you thought it was the stuff of dreams, but even
            bananas can be bioengineered.
          </p>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Image
            bordered
            rounded
            size="large"
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button size="small">수정</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default MyPageMain;