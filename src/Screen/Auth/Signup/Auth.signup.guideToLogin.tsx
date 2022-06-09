import React from "react";
import styled from "styled-components/native";
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { H3 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 회원가입 페이지 최상단 문구:
 * '이미 회원이신가요? 로그인하기' 섹션 입니다
 * @author 현웅
 */
export function SignupGuideToLogin() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "SignupScreen">>();

  return (
    <Container style={globalStyles.authScreen__horizontalPadding}>
      <Text__Container>
        <GuideText>{`이미 회원이신가요? `}</GuideText>
        <GuideText__Underlined
          onPress={() => {
            navigation.dispatch(StackActions.replace("LoginScreen", {}));
          }}>
          로그인하기
        </GuideText__Underlined>
      </Text__Container>
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 30px;
`;

const Text__Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.purple.pastel};
  padding: 16px;
  border-radius: 12px;
`;

const GuideText = styled(H3)`
  color: ${({ theme }) => theme.color.purple.text};
  font-weight: bold;
`;

const GuideText__Underlined = styled(GuideText)`
  text-decoration: underline;
`;
