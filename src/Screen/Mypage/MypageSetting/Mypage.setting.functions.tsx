import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { H2 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";
import CaretRightIcon from "src/Resource/svg/caret-right-icon.svg";

export function MypageSettingFunctions() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "MypageSettingScreen">>();

  return (
    <>
      <Container
        activeOpacity={1}
        style={globalStyles.screen__horizontalPadding}
        onPress={() => {
          navigation.navigate("MypageSettingAlarmScreen", {});
        }}>
        <FunctionText>알림 설정</FunctionText>
        <CaretRightIcon />
      </Container>
      <Container
        activeOpacity={1}
        style={globalStyles.screen__horizontalPadding}
        onPress={() => {
          navigation.navigate("MypageSettingAlarmScreen", {});
        }}>
        <FunctionText>서비스 이용약관</FunctionText>
        <CaretRightIcon />
      </Container>
      <Container
        activeOpacity={1}
        style={globalStyles.screen__horizontalPadding}
        onPress={() => {
          navigation.navigate("MypageSettingAlarmScreen", {});
        }}>
        <FunctionText>개인정보 처리방침</FunctionText>
        <CaretRightIcon />
      </Container>
    </>
  );
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.grey.white};
  padding-top: 11px;
  padding-bottom: 11px;
  margin-bottom: 8px;
`;

const FunctionText = styled(H2)`
  font-weight: bold;
  color: ${({ theme }) => theme.color.purple.deep};
`;
