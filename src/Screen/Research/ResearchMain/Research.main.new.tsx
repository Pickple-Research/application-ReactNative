import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Research.main.screen";
import { Carousel } from "@Component/React";
import { StyleSheet } from "react-native";

export function ResearchMainNew() {
  return (
    <Container>
      <Header />
      <ResearchTypeButtonsList />
      <RecentResearchesList />
    </Container>
  );
}

function Header() {
  return (
    <Header__Container style={{ ...screenStyles.padding }}>
      <Header__TitleText>신규 리서치</Header__TitleText>
    </Header__Container>
  );
}

function ResearchTypeButtonsList() {
  const tags = [
    { tagName: "전체", selected: true },
    { tagName: "설문조사", selected: false },
    { tagName: "인터뷰", selected: false },
    { tagName: "실험참여", selected: false },
    { tagName: "UIUX 리서치", selected: false },
  ];

  return (
    <Carousel
      contentContainerStyle={styles.carousel__contentContainer}
      data={tags}
      PageComponent={ResearchTypeButton}
    />
  );
}

type ResearchTypeProps = {
  tagName: string;
  selected: boolean;
};

function ResearchTypeButton({ item }: { item: ResearchTypeProps }) {
  return (
    <TypeButton__Container
      style={item.selected && styles.typeButton__Container}
      selected={item.selected}>
      <TypeButton__Text selected={item.selected}>
        {item.tagName}
      </TypeButton__Text>
    </TypeButton__Container>
  );
}

function RecentResearchesList() {
  return null;
}

const styles = StyleSheet.create({
  carousel__contentContainer: {
    paddingHorizontal: 10,
  },

  typeButton__Container: {
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
});

const Container = styled.View``;

// Header()
const Header__Container = styled.View`
  margin-bottom: 25px;
`;

const Header__TitleText = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: bold;
`;

// ResearchTypeButton()
const TypeButton__Container = styled.View<{ selected: boolean }>`
  margin: 0px 8px;
  background-color: ${({ selected }) => selected && "#444444"};
  border-radius: 100px;
`;

const TypeButton__Text = styled.Text<{ selected: boolean }>`
  color: ${({ selected, theme }) =>
    selected ? "white" : theme.color.text_color_999};
`;
