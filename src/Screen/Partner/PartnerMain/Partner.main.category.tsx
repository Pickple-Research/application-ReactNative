import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { screenStyles } from "./Partner.main.screen";
import CategoryIcon01 from "@Resource/svg/category-icon01.svg";
import CategoryIcon02 from "@Resource/svg/category-icon02.svg";
import CategoryIcon03 from "@Resource/svg/category-icon03.svg";

export function PartnerMainCategory() {
  return (
    <Container>
      <Header />
      <CategoryButtonsBox />
    </Container>
  );
}

function Header() {
  return (
    <Header__Container
      style={{ ...screenStyles.padding, ...screenStyles.headerContainer }}>
      <Text style={screenStyles.headerTitleText}>카테고리별 파트너</Text>
    </Header__Container>
  );
}

function CategoryButtonsBox() {
  return (
    <CategoryButtonsBox__Container>
      <CategoryButton index={1} />
      <CategoryButton index={2} />
      <CategoryButton index={3} />
      <CategoryButton index={4} />
      <CategoryButton index={5} />
      <CategoryButton index={6} />
      <CategoryButton index={7} />
      <CategoryButton index={8} />
      <CategoryButton index={9} />
      <CategoryButton index={10} />
    </CategoryButtonsBox__Container>
  );
}

function CategoryButton({ index }: { index: number }) {
  return (
    <CategoryButton__Container>
      <CategoryButton__IconContainer>
        <CategoryIcon index={index} />
      </CategoryButton__IconContainer>
      <CategoryButton__Text>{`카테고리${index}`}</CategoryButton__Text>
    </CategoryButton__Container>
  );
}

function CategoryIcon({ index }: { index: number }) {
  const left = index % 3;
  switch (left) {
    case 1:
      return <CategoryIcon01 />;
    case 2:
      return <CategoryIcon02 />;
    default:
      return <CategoryIcon03 />;
  }
}

const Container = styled.View`
  margin-bottom: 20px;
`;

// Header()
const Header__Container = styled.View`
  margin-bottom: 30px;
`;

// CategoryButtonsBox()
const CategoryButtonsBox__Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 10px;
`;

// CategoryButton()
const CategoryButton__Container = styled.View`
  align-items: center;
  width: 20%;
  padding-bottom: 30px;
`;

const CategoryButton__IconContainer = styled.View`
  margin-bottom: 12px;
`;

const CategoryButton__Text = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.text_color_666};
`;
