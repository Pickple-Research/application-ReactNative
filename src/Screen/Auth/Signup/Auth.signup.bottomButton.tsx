import React from "react";
import styled from "styled-components/native";
import {
  BottomButton__Container,
  BottomButton__ButtonContainer,
} from "src/StyledComponents/View";
import { H1 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useSignupScreenStore } from "src/Zustand";

export function SignupBottomButton() {
  const step = useSignupScreenStore(state => state.step);

  switch (step) {
    case 0: //* 이메일 인증 단계
      return <EmailVerifyStepButton />;
    case 1: //* 이름 비밀번호 입력 단계
      return <NamePasswordStepButton />;
    case 2: //* 닉네임 생일 입력 단계
      return <NicknameBirthdayStepButton />;
    default:
      return null;
  }
}

/** 이메일 인증 단계 */
function EmailVerifyStepButton() {
  const { goNextStep, emailVerified } = useSignupScreenStore(
    state => ({
      goNextStep: state.goNextStep,
      emailVerified: state.emailVerified,
    }),
    shallow,
  );

  const available = emailVerified;

  return (
    <Container>
      <Button__Container
        activeOpacity={available ? 0.8 : 1}
        onPress={available ? goNextStep : undefined}
        available={available}>
        <Button__Text available={available}>다음</Button__Text>
      </Button__Container>
    </Container>
  );
}

/** 이름 비밀번호 입력 단계 */
function NamePasswordStepButton() {
  const {
    goNextStep,
    lastNameInput,
    nameInput,
    emailInput,
    passwordInput,
    passwordConfirmInput,
    agreeTerms,
  } = useSignupScreenStore(
    state => ({
      goNextStep: state.goNextStep,
      lastNameInput: state.lastNameInput,
      nameInput: state.nameInput,
      emailInput: state.emailInput,
      passwordInput: state.passwordInput,
      passwordConfirmInput: state.passwordConfirmInput,
      agreeTerms: state.agreeTerms,
    }),
    shallow,
  );

  const available: boolean =
    Boolean(lastNameInput.length) &&
    Boolean(nameInput.length) &&
    passwordInput.length > 5 &&
    passwordInput === passwordConfirmInput &&
    agreeTerms;

  return (
    <Container>
      <Button__Container
        activeOpacity={available ? 0.8 : 1}
        onPress={available ? goNextStep : undefined}
        available={available}>
        <Button__Text available={available}>다음</Button__Text>
      </Button__Container>
    </Container>
  );
}

/** 닉네임 생일 입력 단계 */
function NicknameBirthdayStepButton() {
  const { signup } = useSignupScreenStore(
    state => ({
      signup: state.signup,
    }),
    shallow,
  );

  const available = true;

  return (
    <Container>
      <Button__Container
        activeOpacity={available ? 0.8 : 1}
        // onPress={available ? signup : undefined}
        available={available}>
        <Button__Text available={available}>완료</Button__Text>
      </Button__Container>
    </Container>
  );
}

const Container = styled(BottomButton__Container)``;

const Button__Container = styled(BottomButton__ButtonContainer)<{
  available: boolean;
}>`
  //TODO: #DESIGN-SYSTEM
  background-color: ${({ available, theme }) =>
    available ? theme.color.purple.main : "#eeeeee"};
`;

const Button__Text = styled(H1)<{ available: boolean }>`
  //TODO: #DESIGN-SYSTEM
  color: ${({ available, theme }) =>
    available ? theme.color.grey.white : "#cccccc"};
`;
