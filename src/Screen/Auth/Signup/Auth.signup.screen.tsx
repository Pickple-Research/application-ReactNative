import React, { useEffect } from "react";
import styled from "styled-components/native";
import { SignupHeader } from "./Auth.signup.header";
import { SignupEmailVerifyScreen } from "./EmailVerify/Auth.signup.emailVerify.screen";
import { SignupNamePasswordScreen } from "./NamePassword/Auth.signup.namePassword.screen";
import { SignupNicknameUserInfoScreen } from "./NicknameUserInfo/Auth.signup.nicknameUserInfo.screen";
import { SignupBottomButton } from "./Auth.signup.bottomButton";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import shallow from "zustand/shallow";
import { useSignupScreenStore } from "src/Zustand";

export type SignupScreenProps = {};

export function SignupScreen() {
  const { step, clearState } = useSignupScreenStore(
    state => ({
      step: state.step,
      clearState: state.clearState,
    }),
    shallow,
  );

  useEffect(() => {
    return () => {
      clearState();
    };
  }, []);

  const pages = [
    <SignupEmailVerifyScreen />,
    <SignupNamePasswordScreen />,
    <SignupNicknameUserInfoScreen />,
  ];

  return (
    <Container>
      <SignupHeader />
      <WhiteBackgroundScrollView>{pages[step]}</WhiteBackgroundScrollView>
      <SignupBottomButton />
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  flex: 1;
  padding-bottom: 60px;
  background-color: ${({ theme }) => theme.color.grey.white};
`;
