import React from "react";
import styled from "styled-components/native";
import { ResearchCategoryResearches } from "./Research.category.researches";

export type ResearchCategoryScreenProps = {};

/**
 * 카테고리별 리서치 페이지입니다.
 * @author 현웅
 */
export function ResearchCategoryScreen() {
  return (
    <Container>
      <ResearchCategoryResearches />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
