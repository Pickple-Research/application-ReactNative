import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Community.landing.screen";
import { InterestCategoryCarousel } from "@Component/Category";
import { SectionHeaderTitle } from "@Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { exampleInterestingCategories } from "src/Object/Type";

/**
 * 커뮤니티 랜딩 페이지 즐겨찾는 관심사 섹션
 * @author 현웅
 */
export function CommunityLandingInterest() {
  return (
    <Container>
      <SectionHeader />
      <InterestCategoryCarousel categories={exampleInterestingCategories} />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container
      style={{ ...screenStyles.padding, ...screenStyles.headerContainer }}>
      <SectionHeaderTitle title="즐겨찾는 관심사" />
    </SectionHeader__Container>
  );
}

const Container = styled.View`
  margin-bottom: 50px;
`;
