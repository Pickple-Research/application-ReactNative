import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { mypageLandingScreenStyles } from "./Mypage.landing.screen";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { H3, H4 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";
import CaretRightIcon from "src/Resource/svg/caret-right-icon.svg";

/**
 * 마이페이지 랜딩 페이지 고객기능 섹션
 * @author 현웅
 */
export function MypageLandingFunction() {
  return (
    <Container style={mypageLandingScreenStyles.boundary}>
      <SectionHeader />
      <FunctionsList />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container style={{ marginBottom: 8 }}>
      <SectionHeader__Text>고객기능</SectionHeader__Text>
    </SectionHeader__Container>
  );
}

function FunctionsList() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <FunctionsList__Container style={globalStyles.screen__horizontalPadding}>
      <FunctionRow__Container
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("MypageNoticeScreen", {});
        }}>
        <FunctionRow__Text>공지사항</FunctionRow__Text>
        <CaretRightIcon />
      </FunctionRow__Container>
      <FunctionRow__Container
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("MypageNoticeScreen", {});
        }}>
        <FunctionRow__Text>자주 묻는 질문</FunctionRow__Text>
        <CaretRightIcon />
      </FunctionRow__Container>
      <FunctionRow__Container
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("MypageNoticeScreen", {});
        }}>
        <FunctionRow__Text>고객센터</FunctionRow__Text>
        <CaretRightIcon />
      </FunctionRow__Container>
      <FunctionRow__Container
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("MypageNoticeScreen", {});
        }}>
        <FunctionRow__Text>Contact Us</FunctionRow__Text>
        <CaretRightIcon />
      </FunctionRow__Container>
    </FunctionsList__Container>
  );
}

const Container = styled.View`
  padding-bottom: 30px;
  margin-bottom: 25px;
`;

const SectionHeader__Text = styled(H4)`
  color: ${({ theme }) => theme.color.grey.mild};
`;

const FunctionsList__Container = styled.View``;

// 각 기능 한 줄
const FunctionRow__Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`;

const FunctionRow__Text = styled(H3)`
  color: ${({ theme }) => theme.color.grey.deep};
`;
