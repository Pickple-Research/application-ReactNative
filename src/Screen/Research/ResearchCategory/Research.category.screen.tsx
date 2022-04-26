import React from "react";
import styled from "styled-components/native";
import { ResearchCategoryResearches } from "./Research.category.researches";
import { ResearchCreateIcon } from "@Component/Research";

export type ResearchCategoryScreenProps = {};

/**
 * 카테고리별 리서치 페이지입니다.
 * @author 현웅
 */
export function ResearchCategoryScreen() {
  return (
    <Container>
      <ResearchCategoryResearches />
      <ResearchCreateIcon />
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  flex: 1;
  background-color: white;
`;
