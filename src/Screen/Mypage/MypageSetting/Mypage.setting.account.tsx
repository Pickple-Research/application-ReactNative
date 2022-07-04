import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { H2, H3 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";
import CaretRightIcon from "src/Resource/svg/caret-right-icon.svg";

export function MypageSettingAccount() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "MypageSettingScreen">>();

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <FunctionText>계정 관리</FunctionText>
      <FunctionRow__Container
        onPress={() => {
          navigation.navigate("MypageSettingNicknameScreen", {});
        }}>
        <FunctionRow__Text>닉네임 설정</FunctionRow__Text>
        <CaretRightIcon />
      </FunctionRow__Container>
      <FunctionRow__Container
        onPress={() => {
          navigation.navigate("MypageSettingPasswordScreen", {});
        }}>
        <FunctionRow__Text>비밀번호 재설정</FunctionRow__Text>
        <CaretRightIcon />
      </FunctionRow__Container>
      <FunctionRow__Container
        onPress={() => {
          navigation.navigate("MypageSettingUserInfoScreen", {});
        }}>
        <FunctionRow__Text>개인정보 관리</FunctionRow__Text>
        <CaretRightIcon />
      </FunctionRow__Container>
    </Container>
  );
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.grey.white};
  padding-top: 11px;
  padding-bottom: 8px;
  margin-bottom: 8px;
`;

const FunctionText = styled(H2)`
  font-weight: bold;
  color: ${({ theme }) => theme.color.purple.deep};
  margin-bottom: 16px;
`;

const FunctionRow__Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3px 0px;
`;

const FunctionRow__Text = styled(H3)`
  color: ${({ theme }) => theme.color.grey.main};
`;
