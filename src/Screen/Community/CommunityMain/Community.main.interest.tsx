import React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { screenStyles } from "./Community.main.screen";
import { Carousel } from "@Component/React";
import CategoryIcon01 from "@Resource/svg/category-icon01.svg";
import CategoryIcon02 from "@Resource/svg/category-icon02.svg";
import CategoryIcon03 from "@Resource/svg/category-icon03.svg";

export function CommunityMainInterest() {
  return (
    <Container>
      <Header />
      <InterestsList />
    </Container>
  );
}

function Header() {
  return (
    <Header__Container
      style={{ ...screenStyles.padding, ...screenStyles.headerContainer }}>
      <Text style={screenStyles.headerTitleText}>즐겨찾는 관심사</Text>
    </Header__Container>
  );
}

function InterestsList() {
  const data = [
    { index: 1, title: "랩실" },
    { index: 2, title: "스타트업" },
    { index: 3, title: "웰빙" },
    { index: 1, title: "헬스케어" },
    { index: 2, title: "뷰티" },
    { index: 3, title: "대학생" },
  ];

  return (
    <Carousel
      contentContainerStyle={styles.carousel__contentContainer}
      data={data}
      PageComponent={InterestButton}
      fullPage={false}
      useScrollBreak={false}
    />
  );
}

type InterestProps = {
  index: number;
  title: string;
};

function InterestButton({ item }: { item: InterestProps }) {
  return (
    <Button__Container>
      <InterestIcon index={item.index} />
      <Button__Text>{item.title}</Button__Text>
    </Button__Container>
  );
}

function InterestIcon({ index }: { index: number }) {
  switch (index % 3) {
    case 0:
      return <CategoryIcon01 style={styles.interestButton} />;
    case 1:
      return <CategoryIcon02 style={styles.interestButton} />;
    default:
      return <CategoryIcon03 style={styles.interestButton} />;
  }
}

const styles = StyleSheet.create({
  carousel__contentContainer: {
    paddingHorizontal: 10,
  },

  interestButton: {
    marginBottom: 10,
  },
});

const Container = styled.View`
  margin-bottom: 50px;
`;

const Header__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// InterestButton()
const Button__Container = styled.View`
  align-items: center;
  padding: 0px 16px;
`;

const Button__Text = styled.Text`
  font-size: 10px;
`;
