import React from "react";
import styled from "styled-components/native";
import { ResearchListItem } from "src/Component/Research";
import { useResearchDetailStore } from "src/Zustand";
import { globalStyles } from "src/Style";

/**
 * 리서치 상세정보 페이지 리서치 정보 섹션 (최상단)
 * @author 현웅
 */
export function ResearchDetailInfo() {
  const researchDetail = useResearchDetailStore(state => state.researchDetail);

  return (
    <Container style={{ ...globalStyles.screen__horizontalPadding }}>
      <ResearchListItem research={researchDetail} />
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 25px;
`;
