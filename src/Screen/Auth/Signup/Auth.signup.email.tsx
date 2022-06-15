import React from "react";
import styled from "styled-components/native";
import { AuthTextInput, AuthTextInputName } from "src/Component/Auth";
import shallow from "zustand/shallow";
import { useSignupScreenStore } from "src/Zustand";
import { BodyText } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style/globalStyles";

export function SignupEmail() {
  const { emailInput, setEmailInput } = useSignupScreenStore(
    state => ({
      emailInput: state.emailInput,
      setEmailInput: state.setEmailInput,
    }),
    shallow,
  );

  return (
    <Container style={globalStyles.authScreen__horizontalPadding}>
      <AuthTextInputName name="이메일" />
      <AuthTextInput
        props={{
          placeholder: "example@pickply.com",
          textContentType: "emailAddress",
          keyboardType: "email-address",
          value: emailInput,
          onChangeText: setEmailInput,
        }}
      />
      <Caution__Text
        style={{ opacity: 0 }}>{`*동일한 이메일이 존재합니다.`}</Caution__Text>
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 12px;
`;

const Caution__Text = styled(BodyText)`
  color: ${({ theme }) => theme.color.red.warning};
  margin-top: 4px;
`;
