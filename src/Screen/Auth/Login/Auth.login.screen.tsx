import React, { useEffect } from "react";
import styled from "styled-components/native";
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { AppStackProps } from "@Navigator/App.stack.navigator";
import { AuthTextInput, AuthTextInputName } from "src/Component/Auth";
import { H1, BodyText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useUserStore, useAuthLoginStore } from "src/Zustand";
import { getStorage } from "src/Util";
import { globalStyles } from "src/Style/globalStyles";

export type LoginScreenProps = {};

/**
 * 로그인 화면입니다.
 * @author 현웅
 */
export function LoginScreen() {
  const { emailInput, setEmailInput, passwordInput, isLoading, clearInputs } =
    useAuthLoginStore(
      state => ({
        emailInput: state.emailInput,
        setEmailInput: state.setEmailInput,
        passwordInput: state.passwordInput,
        isLoading: state.isLoading,
        clearInputs: state.clearInputs,
      }),
      shallow,
    );

  const loginable =
    Boolean(emailInput.length) && passwordInput.length >= 6 && !isLoading;

  /** 이전에 로그인에 성공했던 이메일이 있는지 확인하고, 존재한다면 초기값을 설정합니다. */
  async function loadPreviousEmailInput() {
    const email = await getStorage("EMAIL");
    if (email) {
      setEmailInput(email);
    }
  }

  useEffect(() => {
    loadPreviousEmailInput();
    return () => {
      //* 로그인 창을 벗어나면 입력값을 초기화합니다.
      clearInputs();
    };
  }, []);

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

/**
 * 이메일 입력란
 * @author 현웅
 */
function Email({ loginable }: { loginable: boolean }) {
  const { emailInput, setEmailInput, isLoading, login } = useAuthLoginStore(
    state => ({
      emailInput: state.emailInput,
      setEmailInput: state.setEmailInput,
      isLoading: state.isLoading,
      login: state.login,
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
          editable: !isLoading,
          onChangeText: setEmailInput,
          onSubmitEditing: loginable ? login : undefined,
        }}
      />
    </Email__Container>
  );
}

/**
 * 비밀번호 입력란
 * @author 현웅
 */
function Password({ loginable }: { loginable: boolean }) {
  const { passwordInput, setPasswordInput, isLoading, login } =
    useAuthLoginStore(
      state => ({
        passwordInput: state.passwordInput,
        setPasswordInput: state.setPasswordInput,
        isLoading: state.isLoading,
        login: state.login,
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
          editable: !isLoading,
          onChangeText: setPasswordInput,
          onSubmitEditing: loginable ? login : undefined,
        }}
      />
    </Password__Container>
  );
}

/**
 * 로그인 버튼
 * @author 현웅
 */
function Button({ loginable }: { loginable: boolean }) {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LoginScreen">>();

  const setUserInfo = useUserStore(state => state.setUserInfo);
  const { isLoading, login } = useAuthLoginStore(
    state => ({
      isLoading: state.isLoading,
      login: state.login,
    }),
    shallow,
  );

  /**
   * 로그인을 시도합니다. 로그인 결과가 성공적인 경우, AsyncStorage에 이메일과 비밀번호를 저장합니다.
   * @returns
   */
  async function tryLogin() {
    const result = await login();
    if (!result) return;

    setUserInfo(result);
    navigation.dispatch(StackActions.replace("LandingBottomTabNavigator", {}));
  }

  return (
    <Button__Container style={globalStyles.authScreen__horizontalPadding}>
      <Button__Layout
        loginable={loginable}
        activeOpacity={loginable ? 0.6 : 1}
        onPress={loginable ? tryLogin : undefined}>
        <Button__Text>{isLoading ? `로그인 중...` : `로그인`}</Button__Text>
      </Button__Layout>
    </Button__Container>
  );
}

/**
 * 고객센터 / 비밀번호 분실
 * @author 현웅
 */
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
