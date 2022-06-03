import React from "react";
import styled from "styled-components/native";
import { ResearchTypeCarousel } from "src/Component/Research";
import shallow from "zustand/shallow";
import { useResearchStore } from "src/Zustand";

/**
 * 리서치 랜딩 페이지의 리서치 리스트의 필터 헤더입니다.
 * @author 현웅
 */
export function ResearchLandingListFilterHeader() {
  const { selectedType, setSelectedType } = useResearchStore(
    state => ({
      selectedType: state.selectedType,
      setSelectedType: state.setSelectedType,
    }),
    shallow,
  );

  return (
    <Container>
      <ResearchTypeCarousel
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
    </Container>
  );
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.grey.white};
  padding: 16px 0px;
`;
