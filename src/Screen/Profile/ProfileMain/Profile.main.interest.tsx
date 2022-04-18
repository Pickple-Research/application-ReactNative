import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Profile.main.screen";
import { SectionHeaderTitle } from "@Component/React";
import { InterestCategoryCarousel } from "@Component/React/Category";
import { exampleInterestingCategories } from "../../../Object/Type";

/**
 * 프로필 랜딩 페이지 관심 카테고리 섹션
 * @author 현웅
 */
export function ProfileMainInterest() {
  return (
    <Container style={{ ...screenStyles.border }}>
      <Header />
      <InterestCategoryCarousel categories={exampleInterestingCategories} />
    </Container>
  );
}

function Header() {
  return (
    <Header__Container
      style={{ ...screenStyles.header__margin, ...screenStyles.padding }}>
      <SectionHeaderTitle title="관심 카테고리" />
    </Header__Container>
  );
}

const Container = styled.View`
  padding-bottom: 25px;
  margin-bottom: 18px;
`;

const Header__Container = styled.View``;
