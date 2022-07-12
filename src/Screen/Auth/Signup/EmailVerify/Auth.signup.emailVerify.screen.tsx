import React from "react";
import styled from "styled-components/native";
import { SignupGuideToLogin } from "./Auth.signup.guideToLogin";
import { SignupEmail } from "./Auth.signup.email";
import { SignupAuthCode } from "./Auth.signup.authCode";
import { useSignupScreenStore } from "src/Zustand";

/**
 * 회원가입 첫번째 페이지입니다.
 * 이메일 인증을 진행합니다.
 * @author 현웅
 */
export function SignupEmailVerifyScreen() {
  const authCodeTransmitted = useSignupScreenStore(
    state => state.authCodeTransmitted,
  );

  return (
    <Container>
      <SignupGuideToLogin />
      <SignupEmail />
      {authCodeTransmitted && <SignupAuthCode />}
    </Container>
  );
}

const Container = styled.View``;
