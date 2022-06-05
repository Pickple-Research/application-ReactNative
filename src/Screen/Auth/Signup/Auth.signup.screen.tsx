import React from "react";
import styled from "styled-components/native";
import { SignupHeader } from "./Auth.signup.header";
import { SignupGuideToLogin } from "./Auth.signup.guideToLogin";
import { SignupName } from "./Auth.signup.name";
import { SignupEmail } from "./Auth.signup.email";
import { SignupPassword } from "./Auth.signup.password";
import { SignupAgreement } from "./Auth.signup.agreement";
import { SignupBottomButton } from "./Auth.signup.bottomButton";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";

export type SignupScreenProps = {};

export function SignupScreen() {
  return (
    <Container>
      <WhiteBackgroundScrollView>
        <SignupHeader />
        <SignupGuideToLogin />
        <SignupName />
        <SignupEmail />
        <SignupPassword />
        <SignupAgreement />
      </WhiteBackgroundScrollView>
      <SignupBottomButton />
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  flex: 1;
  background-color: ${({ theme }) => theme.color.grey.white};
`;
