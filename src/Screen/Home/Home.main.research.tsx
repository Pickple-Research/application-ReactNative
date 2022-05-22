import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Home.main.screen";
import { ResearchListItem } from "@Component/Research";
import { SectionHeaderTitle, MoreText } from "@Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { useResearchStore } from "@Zustand/index";
import { globalStyles } from "src/Style";

/**
 * 홈 랜딩 페이지의 리서치 섹션
 * @author 현웅
 */
export function HomeMainResearch() {
  return (
    <Container style={{ ...screenStyles.border }}>
      <SectionHeader />
      <Researches />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderTitle title={"리서치"} />
      <MoreText />
    </SectionHeader__Container>
  );
}

function Researches() {
  const exampleResearch = useResearchStore(state => state.exampleResearch);

  return (
    <Researches__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      <ResearchListItem research={exampleResearch} />
    </Researches__Container>
  );
}

const Container = styled.View`
  padding-bottom: 40px;
  margin-bottom: 30px;
`;

const Researches__Container = styled.View``;
