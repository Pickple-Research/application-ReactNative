import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { LinearGradeintContainer } from "src/Component/View";
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
      <LinearGradeintContainer style={styles.linearGradeintContainer}>
        <GuideText>{`이미 회원이신가요?  `}</GuideText>
        <GuideText__Underlined
          onPress={() => {
            navigation.dispatch(StackActions.replace("LoginScreen", {}));
          }}>
          로그인하기
        </GuideText__Underlined>
      </LinearGradeintContainer>
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 30px;
`;

const styles = StyleSheet.create({
  linearGradeintContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
  },
});

const GuideText = styled(H3)`
  color: ${({ theme }) => theme.color.grey.white};
`;

const GuideText__Underlined = styled(GuideText)`
  font-weight: bold;
  text-decoration: underline;
`;
