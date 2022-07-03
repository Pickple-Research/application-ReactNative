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

export function SignupNickname() {
  const { nicknameInput, setNicknameInput } = useSignupScreenStore(
    state => ({
      nicknameInput: state.nicknameInput,
      setNicknameInput: state.setNicknameInput,
    }),
    shallow,
  );

  return (
    <Container style={globalStyles.authScreen__horizontalPadding}>
      <AuthTextInputName name="닉네임" />
      <AuthTextInput
        props={{
          placeholder: "한글/영문/숫자(2~10)자로만 이루어져야합니다",
          textContentType: "nickname",
          value: nicknameInput,
          onChangeText: setNicknameInput,
        }}
      />
      <AuthCautionText text={`* 이미 있는 닉네임입니다.`} visible />
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 20px;
`;
