import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Profile.main.screen";
import { InterestCategoryCarousel } from "@Component/Category";
import { SectionHeaderTitle } from "@Component/Text";
import { SectionHeaderContainer } from "@Component/StyledComponents";
import { exampleInterestingCategories } from "../../../Object/Type";

/**
 * 마이페이지 랜딩 페이지 관심 카테고리 섹션
 * @author 현웅
 */
export function ProfileMainInterest() {
  return (
    <Container style={{ ...screenStyles.border }}>
      <SectionHeader />
      <InterestCategoryCarousel categories={exampleInterestingCategories} />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeaderContainer>
      <SectionHeaderTitle title="관심 카테고리" />
    </SectionHeaderContainer>
  );
}

const Container = styled.View`
  padding-bottom: 25px;
  margin-bottom: 18px;
`;
