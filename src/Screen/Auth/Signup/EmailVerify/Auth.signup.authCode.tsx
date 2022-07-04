import React from "react";
import styled from "styled-components/native";
import {
  AuthTextInputName,
  AuthTextInput,
  AuthCautionText,
} from "src/Component/Auth";
import { RadiusButton } from "src/Component/Button";
import { H4, DetailText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useSignupScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 회원가입 0단계 - 인증번호 입력 섹션입니다.
 * @author 현웅
 */
export function SignupAuthCode() {
  const {
    authCodeInput,
    setAuthCodeInput,
    emailVerifing,
    emailVerifyTried,
    emailVerified,
    verifyEmail,
  } = useSignupScreenStore(
    state => ({
      authCodeInput: state.authCodeInput,
      setAuthCodeInput: state.setAuthCodeInput,
      emailVerifing: state.emailVerifing,
      emailVerifyTried: state.emailVerifyTried,
      emailVerified: state.emailVerified,
      verifyEmail: state.verifyEmail,
    }),
    shallow,
  );

  return (
    <Container style={globalStyles.authScreen__horizontalPadding}>
      <AuthTextInputName name="인증번호 입력" />
      <AuthCode__Container>
        <Input__Container>
          <AuthTextInput
            props={{
              textContentType: "oneTimeCode",
              value: authCodeInput,
              onChangeText: setAuthCodeInput,
            }}
          />
        </Input__Container>
        <RadiusButton
          text={`인증`}
          type="PURPLE"
          style={{ width: 72, paddingVertical: 12 }}
          onPress={emailVerifing || emailVerified ? undefined : verifyEmail}
        />
      </AuthCode__Container>
      {emailVerified ? (
        <AuthCautionText text={`인증에 성공했습니다!`} color="BLUE" visible />
      ) : (
        <AuthCautionText
          text={`인증번호가 올바르지 않습니다. 다시 입력해주세요.`}
          visible={emailVerifyTried && !emailVerified}
        />
      )}
      <GuideText />
    </Container>
  );
}

function GuideText() {
  return (
    <GuideText__Container>
      <GuideText__Title>인증번호가 오지 않나요?</GuideText__Title>
      <GuideText__Content>
        {`'스팸차단 서비스' 로 인증번호 수신이 어려울 수 있습니다.\n이메일 -> 스팸메일 목록에서 확인했을 때 메일이 도착하지 않은 경우\n픽플리 1:1 문의로 연락주세요!`}
      </GuideText__Content>
      <GuideText__Inquire>1:1 문의하기</GuideText__Inquire>
    </GuideText__Container>
  );
}

const Container = styled.View``;

const AuthCode__Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Input__Container = styled.View`
  flex: 1;
  margin-right: 8px;
`;

// GuideText()
const GuideText__Container = styled.View`
  //TODO: #DESIGN-SYSTEM
  background-color: #eeeeee;
  padding: 16px;
  border-radius: 10px;
`;

const GuideText__Title = styled(H4)`
  font-weight: bold;
  margin-bottom: 10px;
`;

const GuideText__Content = styled(DetailText)`
  line-height: 15px;
`;

const GuideText__Inquire = styled(DetailText)`
  color: ${({ theme }) => theme.color.purple.text};
  font-weight: bold;
  text-decoration: underline;
  margin-top: 10px;
`;
