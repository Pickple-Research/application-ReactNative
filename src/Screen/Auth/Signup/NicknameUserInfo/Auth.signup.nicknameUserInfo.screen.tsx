import React from "react";
import styled from "styled-components/native";
import { SignupNickname } from "./Auth.signup.nickname";
import { SignupUserInfo } from "./Auth.signup.userInfo";

export function SignupNicknameUserInfoScreen() {
  return (
    <Container>
      <SignupNickname />
      <SignupUserInfo />
    </Container>
  );
}

const Container = styled.View``;
