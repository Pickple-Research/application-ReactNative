import React from "react";
import styled from "styled-components/native";
import { SignupEmail } from "./Auth.signup.email";
import { SignupAuthCode } from "./Auth.signup.authCode";

/**
 * 회원가입 첫번째 페이지입니다.
 * 이메일 인증을 진행합니다.
 * @author 현웅
 */
export function SignupEmailVerifyScreen() {
  return (
    <Container>
      <SignupEmail />
      <SignupAuthCode />
    </Container>
  );
}

const Container = styled.View``;
