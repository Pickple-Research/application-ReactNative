import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { screenStyles } from "./Partner.main.screen";
import { FollowingPartnerCarousel } from "@Component/React/Partner";
import { examplePartnersList } from "../../../Object/Type";

export function PartnerMainFollow() {
  return (
    <Container>
      <Header />
      <FollowingPartnerCarousel followingPartners={examplePartnersList} />
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
      <Text style={screenStyles.headerTitleText}>팔로우</Text>
      <Text style={screenStyles.headerMoreText}>MORE</Text>
    </Header__Container>
  );
}

const Container = styled.View`
  margin-bottom: 45px;
`;

const Header__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
