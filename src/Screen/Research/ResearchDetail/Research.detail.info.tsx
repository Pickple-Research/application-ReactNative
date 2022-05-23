import React from "react";
import styled from "styled-components/native";
import { ResearchListItem } from "@Component/Research";
import { useResearchStore } from "@Zustand/research.zustand";
import { globalStyles } from "src/Style";

/**
 * 리서치 상세정보 페이지 리서치 정보 섹션
 * @author 현웅
 */
export function ResearchDetailInfo() {
  const exampleResearch = useResearchStore(state => state.exampleResearch);

  return (
    <Container style={{ ...globalStyles.screen__horizontalPadding }}>
      <ResearchListItem research={exampleResearch} />
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 25px;
`;
