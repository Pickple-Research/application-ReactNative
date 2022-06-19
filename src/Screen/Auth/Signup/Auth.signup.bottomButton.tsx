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
  const {
    lastNameInput,
    nameInput,
    emailInput,
    passwordInput,
    passwordConfirmInput,
    agreeTerms,
  } = useSignupScreenStore(
    state => ({
      lastNameInput: state.lastNameInput,
      nameInput: state.nameInput,
      emailInput: state.emailInput,
      passwordInput: state.passwordInput,
      passwordConfirmInput: state.passwordConfirmInput,
      agreeTerms: state.agreeTerms,
    }),
    shallow,
  );

  const signupable: boolean =
    Boolean(lastNameInput.length) &&
    Boolean(nameInput.length) &&
    Boolean(emailInput.length) &&
    passwordInput.length > 5 &&
    passwordInput === passwordConfirmInput &&
    agreeTerms;

  return (
    <Container>
      <Button__Container signupable={signupable}>
        <Button__Text signupable={signupable}>다음</Button__Text>
      </Button__Container>
    </Container>
  );
}

const Container = styled(BottomButton__Container)``;

const Button__Container = styled(BottomButton__ButtonContainer)<{
  signupable: boolean;
}>`
  //TODO: #DESIGN-SYSTEM
  background-color: ${({ signupable, theme }) =>
    signupable ? theme.color.purple.main : "#eeeeee"};
`;

const Button__Text = styled(H1)<{ signupable: boolean }>`
  //TODO: #DESIGN-SYSTEM
  color: ${({ signupable, theme }) =>
    signupable ? theme.color.grey.white : "#cccccc"};
`;
