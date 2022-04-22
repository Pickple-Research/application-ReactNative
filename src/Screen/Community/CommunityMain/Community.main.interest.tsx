import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Community.main.screen";
import { InterestCategoryCarousel } from "@Component/Category";
import { SectionHeaderTitle } from "@Component/Text";
import { SectionHeaderMoreContainer } from "@Component/StyledComponents";
import { exampleInterestingCategories } from "../../../Object/Type";

/**
 * 커뮤니티 랜딩 페이지 즐겨찾는 관심사 섹션
 * @author 현웅
 */
export function CommunityMainInterest() {
  return (
    <Container>
      <SectionHeader />
      <InterestCategoryCarousel categories={exampleInterestingCategories} />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeaderMoreContainer
      style={{ ...screenStyles.padding, ...screenStyles.headerContainer }}>
      <SectionHeaderTitle title="즐겨찾는 관심사" />
    </SectionHeaderMoreContainer>
  );
}

const Container = styled.View`
  margin-bottom: 50px;
`;
