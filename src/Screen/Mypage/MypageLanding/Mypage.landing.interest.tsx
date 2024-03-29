import React from "react";
import styled from "styled-components/native";
import { mypageLandingScreenStyles } from "./Mypage.landing.screen";
import { InterestCategoryCarousel } from "src/Component/Category";
import { SectionHeaderText } from "src/Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { exampleInterestingCategories } from "src/Object/Type";

/**
 * @deprecated
 * 마이페이지 랜딩 페이지 관심 카테고리 섹션
 * @author 현웅
 */
export function MypageLandingInterest() {
  return (
    <Container style={{ ...mypageLandingScreenStyles.boundary }}>
      <SectionHeader />
      <InterestCategoryCarousel categories={exampleInterestingCategories} />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderText title="관심 카테고리" />
    </SectionHeader__Container>
  );
}

const Container = styled.View`
  padding-bottom: 25px;
  margin-bottom: 18px;
`;
