import React from "react";
import styled from "styled-components/native";
import shallow from "zustand/shallow";
import { useAuthSignupStore } from "src/Zustand";
import { H1 } from "src/StyledComponents/Text";

export function SignupBottomButton() {
  const {
    lastNameInput,
    nameInput,
    emailInput,
    passwordInput,
    passwordConfirmInput,
    agreeTerms,
  } = useAuthSignupStore(
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

const Container = styled.View`
  position: absolute;
  bottom: 0px;
  flex-direction: row;
  width: 100%;
  height: 60px;
`;

const Button__Container = styled.TouchableOpacity<{ signupable: boolean }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  //TODO: #DESIGN-SYSTEM
  background-color: ${({ signupable, theme }) =>
    signupable ? theme.color.purple.text : "#eeeeee"};
`;

const Button__Text = styled(H1)<{ signupable: boolean }>`
  //TODO: #DESIGN-SYSTEM
  color: ${({ signupable, theme }) =>
    signupable ? theme.color.grey.white : "#cccccc"};
`;
