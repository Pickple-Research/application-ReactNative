import React from "react";
import styled from "styled-components/native";
import {
  AuthTextInputName,
  AuthTextInput,
  AuthCautionText,
} from "src/Component/Auth";
import shallow from "zustand/shallow";
import { useSignupScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

export function SignupPassword() {
  const {
    passwordInput,
    setPasswordInput,
    passwordConfirmInput,
    setPasswordConfirmInput,
  } = useSignupScreenStore(
    state => ({
      passwordInput: state.passwordInput,
      setPasswordInput: state.setPasswordInput,
      passwordConfirmInput: state.passwordConfirmInput,
      setPasswordConfirmInput: state.setPasswordConfirmInput,
    }),
    shallow,
  );

  const isPasswordValid =
    passwordInput.length === 0 || passwordInput.length > 5;
  const isPasswordConfirmValid =
    passwordConfirmInput.length === 0 || passwordInput === passwordConfirmInput;

  return (
    <Container style={globalStyles.authScreen__horizontalPadding}>
      <AuthTextInputName name="비밀번호" />
      <AuthTextInput
        props={{
          placeholder: "6자 이상의 영문/숫자 조합 (대/소문자 구분)",
          textContentType: "password",
          secureTextEntry: true,
          value: passwordInput,
          onChangeText: setPasswordInput,
        }}
      />
      <AuthCautionText
        text={`*6자 이상의 영문/숫자/특수문자 조합으로 입력해주세요.`}
        visible={!isPasswordValid}
        style={{ marginBottom: 12 }}
      />

      <AuthTextInputName name="비밀번호 확인" />
      <AuthTextInput
        props={{
          placeholder: "",
          textContentType: "password",
          secureTextEntry: true,
          value: passwordConfirmInput,
          onChangeText: setPasswordConfirmInput,
        }}
      />
      <AuthCautionText
        text={`*비밀번호가 일치하지 않습니다.`}
        visible={!isPasswordConfirmValid}
      />
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 28px;
`;
