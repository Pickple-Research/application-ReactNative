import React from "react";
import styled from "styled-components/native";
import {
  AuthTextInputName,
  AuthTextInput,
  AuthCautionText,
} from "src/Component/Auth";
import { RadiusButton } from "src/Component/Button";
import shallow from "zustand/shallow";
import { useSignupScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 회원가입 0단계 - 이메일 입력 및 인증번호 전송 버튼 섹션입니다.
 * @author 현웅
 */
export function SignupEmail() {
  const {
    emailInput,
    setEmailInput,
    emailDuplicated,
    authCodeTransmitting,
    authCodeTransmitted,
    transmitAuthCode,
  } = useSignupScreenStore(
    state => ({
      emailInput: state.emailInput,
      setEmailInput: state.setEmailInput,
      emailDuplicated: state.emailDuplicated,
      authCodeTransmitting: state.authCodeTransmitting,
      authCodeTransmitted: state.authCodeTransmitted,
      transmitAuthCode: state.transmitAuthCode,
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
      <AuthCautionText
        text={`* 동일한 이메일이 존재합니다.`}
        style={{ marginBottom: 15 }}
        visible={emailDuplicated}
      />
      <RadiusButton
        text={``}
        type="PURPLE"
        onPress={authCodeTransmitting ? undefined : transmitAuthCode}
      />
      {authCodeTransmitted && (
        <AuthCautionText
          text={`이메일을 확인해주세요.\n만약 보이지 않는다면, 스팸 메일함을 확인해주세요`}
          style={{ marginTop: 8 }}
          color="BLUE"
          visible
        />
      )}
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 36px;
`;
