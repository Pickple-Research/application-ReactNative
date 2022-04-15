import React from "react";
import { StyleSheet, View, Text } from "react-native";
import styled from "styled-components/native";
import { screenStyles } from "./Partner.main.screen";
import { Carousel } from "@Component/React";

export function PartnerMainFollow() {
  return (
    <Container>
      <Header />
      <FollowingPartnersList />
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

function FollowingPartnersList() {
  const data = [
    { partnerName: "스타트업1", color: "red" },
    { partnerName: "스타트업2", color: "orange" },
    { partnerName: "스타트업3", color: "yellow" },
    { partnerName: "스타트업4", color: "green" },
    { partnerName: "스타트업5", color: "blue" },
    { partnerName: "스타트업6", color: "navy" },
    { partnerName: "스타트업7", color: "purple" },
  ];

  return (
    <Carousel
      style={styles.carouselContainer}
      contentContainerStyle={styles.carouselContentContainer}
      data={data}
      PageComponent={PartnerButton}
      fullPage={false}
      useScrollBreak={false}
    />
  );
}

type Partner = {
  partnerName: string;
  color: string;
};

/**
 * 캐러샐에 들어갈 버튼 디자인
 * @author 현웅
 */
function PartnerButton({ item }: { item: Partner }) {
  return (
    <PartnerButton__Container>
      <PartnerButton__IconContainer color={item.color} />
      <PartnerButton__Text>{item.partnerName}</PartnerButton__Text>
    </PartnerButton__Container>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {},
  carouselContentContainer: { paddingHorizontal: 15 },
});

const Container = styled.View`
  margin-bottom: 45px;
`;

// Header()
const Header__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
// PartnerButton()
const PartnerButton__Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
`;

const PartnerButton__IconContainer = styled.View<{ color: string }>`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 25px;
  background-color: ${({ color }) => color};
`;

const PartnerButton__Text = styled.Text`
  color: ${({ theme }) => theme.color.text_color_666};
  font-size: 12px;
  font-weight: bold;
`;
