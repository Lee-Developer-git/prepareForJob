import React from "react";
import {
  Message,
  ButtonGroup,
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Container,
} from "semantic-ui-react";
import "./SignUp.css";

const SignUp = () => {
  //onAddUser => 회원가입
  //onSignUpProp =>회원가입 당시 입력한 값을 받아옴
  //toLogin =>회원가입 완료시 자동으로 로그인 창으로 이동

  return (
    <Grid
      centered
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          className="signup-header"
          textAlign="center"
          color="#e67e22"
          style={{ margin: "0px 0px 50px 0px" }}
        >
          Sign Up
        </Header>

        <Form>
          <Segment stacked textAlign="left">
            <Form.Input label="NAME" placeholder="이름" />
            <Form.Input label="EMAIL" placeholder="aaa@aaa.com" />
            <Form.Input label="Password" placeholder="영문소문자/숫자,4-16자" />
            <Form.Group>
              <Form.Input
                label="Password Check"
                placeholder="비밀번호 확인"
                width={12}
              />
              <Form.Button
                content="확인"
                width={4}
                position="relative"
                top="20px"
              />
            </Form.Group>

            <Form.Input label="NickName" placeholder="영문소문자,4-16자" />
            <Form.Group inline>
              <label>학교 재학상태</label>
              <Form.Field
                label="재학 O"
                control="input"
                type="radio"
                name="htmlRadios"
              />
              <Form.Field
                label="재학 X"
                control="input"
                type="radio"
                name="htmlRadios"
              />
            </Form.Group>
            <Container textAlign="center">
              모든 내용을 빠짐없이 채워주세요.
            </Container>

            <ButtonGroup style={{}}>
              <Button
                // 회원가입 이벤트 발생

                fluid
                floated="right"
                size="large"
                style={{
                  width: "28rem",
                  margin: "10px 0px 0px 0px",
                  backgroundColor: "#7f7f7f",
                  color: "white",
                }}
              >
                회원가입
              </Button>
            </ButtonGroup>
          </Segment>

          <Message
            textAlign="center"
            style={{
              fontSize: "13px",
              margin: "20px 0px 0px 0px",
              backgroundColor: "rgba(245, 240, 234, 0.6)",
            }}
          >
            이미 회원이시라면 로그인하세요!
            {/* 로그인 창으로 이동 */}
            <Button
              fluid
              size="large"
              color="teal"
              style={{
                margin: "10px 0px 0px 0px",
                backgroundColor: "#7f7f7f",
                color: "white",
              }}
            >
              로그인
            </Button>
          </Message>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SignUp;
