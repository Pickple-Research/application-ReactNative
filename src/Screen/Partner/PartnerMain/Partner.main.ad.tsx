import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { screenStyles } from "./Partner.main.screen";
import { PartnerAdCarousel } from "@Component/React/Partner";
import { examplePartnersList } from "../../../Object/Type";

/**
 * 파트너 랜딩 페이지 광고 섹션
 * @author 현웅
 */
export function PartnerMainAd() {
  return (
    <Container>
      <Header />
      <PartnerAdCarousel partners={examplePartnersList} />
    </Container>
  );
}

function Header() {
  return (
    <Header__Container
      style={{
        ...screenStyles.padding,
        ...screenStyles.headerContainer,
      }}>
      <Text style={screenStyles.headerTitleText}>광고</Text>
      <Text style={screenStyles.headerMoreText}>MORE</Text>
    </Header__Container>
  );
}

function FollowButton() {
  return (
    <FollowButton__Container activeOpacity={0.6}>
      <FollowButton__Text>팔로우</FollowButton__Text>
    </FollowButton__Container>
  );
}

const Container = styled.View`
  margin-bottom: 45px;
`;

// Header()
const Header__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FollowButton__Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 36px;
  background-color: ${({ theme }) => theme.color.main_skyblue};
  border-radius: 18px;
`;

const FollowButton__Text = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;
