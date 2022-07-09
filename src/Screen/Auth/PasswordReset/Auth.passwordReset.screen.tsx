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
import { useUserStore } from "src/Zustand";
import { H3 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style/globalStyles";

export type AuthPasswordResetScreenProps = {};

export function AuthPasswordResetScreen() {
  return (
    <Container>
      <TitlesContainer style={globalStyles.screen__horizontalPadding}>
        <MypageFunctionText
          text={`비밀번호 재설정`}
          style={{ marginBottom: 30 }}
        />
        <EmailVerify__Title>이메일로 인증번호 받기</EmailVerify__Title>
      </TitlesContainer>
      <EmailVerify />
      <PasswordConfirm />
    </Container>
  );
}

function EmailVerify() {
  const user = useUserStore(state => state.user);

  return (
    <EmailVerify__Container style={globalStyles.authScreen__horizontalPadding}>
      <AuthTextInputName name="이메일" />
      <AuthCode__Container>
        <Input__Container>
          <AuthTextInput
            props={{
              value: user.email,
              editable: false,
            }}
          />
        </Input__Container>
        <RadiusButton
          text="전송"
          type="PURPLE"
          style={{ width: 72, paddingVertical: 12 }}
        />
      </AuthCode__Container>
      <AuthTextInputName name="인증번호 입력" />
      <AuthTextInput props={{ maxLength: 6 }} style={{ marginBottom: 12 }} />
      <RadiusButton text="인증하기" type="PURPLE" />
    </EmailVerify__Container>
  );
}

function PasswordConfirm() {
  return (
    <PasswordConfirm__Container
      style={globalStyles.authScreen__horizontalPadding}>
      <AuthTextInputName name="재설정 비밀번호" />
      <AuthTextInput style={{ marginBottom: 16 }} />
      <AuthTextInputName name="재설정 비밀번호 확인" />
      <AuthTextInput style={{ marginBottom: 12 }} />
      <RadiusButton text="완료" type="PURPLE" />
    </PasswordConfirm__Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.color.grey.white};
`;

const TitlesContainer = styled.View``;

const EmailVerify__Title = styled(H3)`
  color: ${({ theme }) => theme.color.purple.deep};
  margin-bottom: 16px;
`;

// EmailVerify()
const EmailVerify__Container = styled.View``;

const AuthCode__Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 28px;
`;

const Input__Container = styled.View`
  flex: 1;
  margin-right: 8px;
`;

// PasswordConfirm()
const PasswordConfirm__Container = styled.View``;
