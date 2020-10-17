import React from "react";
import './css/Agreement.css';
import {
  Checkbox,
  Form,
  Container,
  Header,
  Grid,
  Button,
} from "semantic-ui-react";

const Agreement = () => (
  <Form>
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          as="h2"
          background="#7f7f7f"
          textAlign="center"
          content="개인정보 제공 동의서"
          //subheader="개인정보 관련 동의서입니다. 끝까지 읽고 체크박스에 체크해주세요."
        ></Header>
        <br />
        <Container textAlign="center">
          [필수] 개인정보 수집/이용 동의 아이디, 비밀번호(Password), 성명,
          생년월일, 성별, 연락처 정보(e-mail 주소, 휴대폰번호), 본인인증 기록 *
          실명 가입시 연계정보(CI) & 중복확인정보(DI) 또는 외국인등록번호(외국인
          한정) 등 실명확인 값 T아이디 관련 고지사항 전달 및 본인의사 확인 등
          의사소통 경로 확보 아이디, 비밀번호(Password), 성명, 생년월일,
          연락처정보(e-mail 주소, 휴대폰번호), SK텔레콤에 가입된 이동전화번호 *
          실명 가입시 연계정보(CI) & 중복확인정보(DI) 또는 외국인등록번호(외국인
          한정) 등 실명확인 값 계정도용 등 비정상 로그인 차단/해제 등 보안기능
          제공 접속 IP·이용정지/해지기록 등 T아이디 이용기록, T아이디 로그인한
          기기 고유식별정보(IMEI) 휴대폰 번호 아이디 중복 사용 방지를 위한
          휴대폰 번호 사용여부 확인 통신사 정보, SK텔레콤 고객의 번호 변경 및
          해지 기록
        </Container>
        <br />
        <Form.Field
          verticalAlign="middle"
          textAlign="center"
          control={Checkbox}
          label={<label>I agree to the Terms and Conditions</label>}
        />
        <br />
        <Button color="#e67e22" fluid size="large">
          Sign Up
        </Button>
      </Grid.Column>
    </Grid>
  </Form>
);

export default Agreement;