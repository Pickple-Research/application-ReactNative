import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Community.main.screen";
import { SectionHeaderTitle } from "@Component/React";
import { InterestCategoryCarousel } from "@Component/React/Category";
import { exampleInterestingCategories } from "../../../Object/Type";

export function CommunityMainInterest() {
  return (
    <Container>
      <Header />
      <InterestCategoryCarousel categories={exampleInterestingCategories} />
    </Container>
  );
}

function Header() {
  return (
    <Header__Container
      style={{ ...screenStyles.padding, ...screenStyles.headerContainer }}>
      <SectionHeaderTitle title="즐겨찾는 관심사" />
    </Header__Container>
  );
}

const Container = styled.View`
  margin-bottom: 50px;
`;

const Header__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
