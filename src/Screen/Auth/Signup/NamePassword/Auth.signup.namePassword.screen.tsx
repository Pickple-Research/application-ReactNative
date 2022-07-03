import React from "react";
import styled from "styled-components/native";
import { SignupName } from "./Auth.signup.name";
import { SignupPassword } from "./Auth.signup.password";
import { SignupAgreement } from "./Auth.signup.agreement";

export function SignupNamePasswordScreen() {
  return (
    <Container>
      <SignupName />
      <SignupPassword />
      <SignupAgreement />
    </Container>
  );
}

const Container = styled.View``;
