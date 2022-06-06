import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "@Navigator/App.stack.navigator";
import { AuthTextInput, AuthTextInputName } from "src/Component/Auth";
import { H1, BodyText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useAuthLoginStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

export type LoginScreenProps = {};

/**
 * 로그인 화면입니다.
 * @author 현웅
 */
export function LoginScreen() {
  const { emailInput, passwordInput, isLoading } = useAuthLoginStore(
    state => ({
      emailInput: state.emailInput,
      passwordInput: state.passwordInput,
      isLoading: state.isLoading,
    }),
    shallow,
  );

  const loginable =
    Boolean(emailInput.length) && passwordInput.length >= 6 && !isLoading;

  return (
    <Container>
      <Header />
      <Email loginable={loginable} />
      <Password loginable={loginable} />
      <Button loginable={loginable} />
      <Util />
    </Container>
  );
}

function Header() {
  return (
    <Header__Container style={globalStyles.screen__horizontalPadding}>
      <Header__Text>로그인</Header__Text>
    </Header__Container>
  );
}

function Email({ loginable }: { loginable: boolean }) {
  const { emailInput, setEmailInput, login } = useAuthLoginStore(
    state => ({
      emailInput: state.emailInput,
      setEmailInput: state.setEmailInput,
      login: state.loginWithEmailPassword,
    }),
    shallow,
  );

  return (
    <Email__Container style={globalStyles.authScreen__horizontalPadding}>
      <AuthTextInputName name="이메일" />
      <AuthTextInput
        props={{
          placeholder: "example@pickply.com",
          textContentType: "emailAddress",
          keyboardType: "email-address",
          value: emailInput,
          onChangeText: setEmailInput,
          onSubmitEditing: loginable ? login : undefined,
        }}
      />
    </Email__Container>
  );
}

function Password({ loginable }: { loginable: boolean }) {
  const { passwordInput, setPasswordInput, login } = useAuthLoginStore(
    state => ({
      passwordInput: state.passwordInput,
      setPasswordInput: state.setPasswordInput,
      login: state.loginWithEmailPassword,
    }),
    shallow,
  );

  return (
    <Password__Container style={globalStyles.authScreen__horizontalPadding}>
      <AuthTextInputName name="비밀번호" />
      <AuthTextInput
        props={{
          placeholder: "6자 이상의 영문/숫자 조합 (대/소문자 구분)",
          textContentType: "password",
          secureTextEntry: true,
          value: passwordInput,
          onChangeText: setPasswordInput,
          onSubmitEditing: loginable ? login : undefined,
        }}
      />
    </Password__Container>
  );
}

function Button({ loginable }: { loginable: boolean }) {
  const { isLoading, login } = useAuthLoginStore(
    state => ({
      isLoading: state.isLoading,
      login: state.loginWithEmailPassword,
    }),
    shallow,
  );

  return (
    <Button__Container style={globalStyles.authScreen__horizontalPadding}>
      <Button__Layout
        loginable={loginable}
        activeOpacity={loginable ? 0.6 : 1}
        onPress={loginable ? login : undefined}>
        {isLoading ? null : <Button__Text>로그인</Button__Text>}
      </Button__Layout>
    </Button__Container>
  );
}

/** 고객센터 / 비밀번호 분실 */
function Util() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LoginScreen">>();

  return (
    <Util__Container style={globalStyles.authScreen__horizontalPadding}>
      <Util__Text
        onPress={() => {
          // navigation.navigate("", {})
        }}>
        고객센터
      </Util__Text>
      <Util__Text
        onPress={() => {
          // navigation.navigate("", {})
        }}>
        비밀번호를 잊으셨나요?
      </Util__Text>
    </Util__Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.grey.white};
`;

// Header()
const Header__Container = styled.View`
  margin-bottom: 32px;
`;

const Header__Text = styled.Text`
  font-size: 29px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.purple.deep};
`;

// Email()
const Email__Container = styled.View`
  margin-bottom: 20px;
`;

// Password()
const Password__Container = styled.View`
  margin-bottom: 40px;
`;

// Button()
const Button__Container = styled.View`
  margin-bottom: 16px;
`;

const Button__Layout = styled.TouchableOpacity<{ loginable: boolean }>`
  justify-content: center;
  align-items: center;
  background-color: ${({ loginable, theme }) =>
    loginable ? theme.color.purple.text : theme.color.purple.inactive};
  padding: 12px;
  border-radius: 10px;
`;

const Button__Text = styled(H1)`
  color: ${({ theme }) => theme.color.grey.white};
`;

// Util()
const Util__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Util__Text = styled(BodyText)`
  //TODO: #DESIGN-SYSTEM
  color: #807f7f;
  text-decoration: underline;
`;
