import React from "react";
import styled from "styled-components/native";
import {
  AuthTextInputName,
  AuthTextInput,
  AuthCautionText,
} from "src/Component/Auth";
import { MypageFunctionText } from "src/Component/Mypage";
import { RadiusButton } from "src/Component/Button";
import shallow from "zustand/shallow";
import {} from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

export type MypageSettingPasswordResetScreenProps = {};

export function MypageSettingPasswordResetScreen() {
  return (
    <Container>
      <TitleContainer style={globalStyles.screen__horizontalPadding}>
        <MypageFunctionText
          text={`비밀번호 재설정`}
          style={{ marginBottom: 20 }}
        />
      </TitleContainer>
      <InputContainer style={globalStyles.authScreen__horizontalPadding}>
        <AuthTextInputName name="현재 비밀번호" />
        <AuthTextInput style={{ marginBottom: 28 }} />
        <AuthTextInputName name="재설정 비밀번호" />
        <AuthTextInput style={{ marginBottom: 18 }} />
        <AuthTextInputName name="재설정 비밀번호 확인" />
        <AuthTextInput style={{ marginBottom: 12 }} />
        <RadiusButton text="재설정" type="PURPLE" />
      </InputContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.color.grey.white};
`;

const TitleContainer = styled.View``;

const InputContainer = styled.View`
  background-color: ${({ theme }) => theme.color.grey.white};
`;
