import React, { useState } from "react";
import styled from "styled-components/native";
import { ResearchTypeCarousel, ResearchListItem } from "@Component/Research";
import { SectionHeaderTitle } from "@Component/Text";
import { SectionHeaderMoreContainer } from "@Component/StyledComponents";
//! #BUG? @Object/Enum 으로 import가 안 됩니다. (대체 왜?)
import { ResearchType } from "../../../Object/Enum";
import { useResearchStore } from "@Zustand/index";
import { globalStyles } from "../../../Style";

/**
 * 리서치 랜딩 페이지 신규 리서치 섹션
 * @author 현웅
 */
export function ResearchMainNew() {
  const [selectedType, setSelectedType] = useState<ResearchType>(
    ResearchType.ALL,
  );

  return (
    <Container>
      <SectionHeader />
      <ResearchTypeCarousel
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <RecentResearches />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeaderMoreContainer>
      <SectionHeaderTitle title="신규 리서치" />
    </SectionHeaderMoreContainer>
  );
}

function RecentResearches() {
  const exampleResearches = useResearchStore(state => state.exampleResearches);

  return (
    <RecentResearches__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      {exampleResearches.map(research => {
        return <ResearchListItem key={research.title} research={research} />;
      })}
    </RecentResearches__Container>
  );
}

const Container = styled.View``;

// RecentResearches()
const RecentResearches__Container = styled.View``;
