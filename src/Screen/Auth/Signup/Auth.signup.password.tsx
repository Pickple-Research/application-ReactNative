import React from "react";
import styled from "styled-components/native";
import { AuthTextInput, AuthTextInputName } from "src/Component/Auth";
import shallow from "zustand/shallow";
import { useSignupScreenStore } from "src/Zustand";
import { BodyText } from "src/StyledComponents/Text";
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
      <Caution__Text
        style={{ opacity: isPasswordValid ? 0 : 1, marginBottom: 12 }}>
        {`*6자 이상의 영문/숫자/특수문자 조합으로 입력해주세요.`}
      </Caution__Text>

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
      <Caution__Text
        style={{
          opacity: isPasswordConfirmValid ? 0 : 1,
        }}>{`*비밀번호가 일치하지 않습니다.`}</Caution__Text>
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 28px;
`;

const Caution__Text = styled(BodyText)`
  color: ${({ theme }) => theme.color.red.warning};
  margin-top: 4px;
`;
