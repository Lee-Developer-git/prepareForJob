import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
//import "./Login.css";
//import SignUp from "./SignUp";

// 피드백
const Login = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="#e67e22" textAlign="center">
        <Image src="/logo.png" /> Log-in to your account
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button background="#7f7f7f" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message background="#7f7f7f">
        New to us? <a href="#">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);
export default Login;