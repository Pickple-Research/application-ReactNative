import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Home.main.screen";
import { SectionHeaderMoreContainer } from "@Component/StyledComponents";
import { SectionHeaderTitle, MoreText } from "@Component/React";
import { ResearchListItem } from "@Component/React/Research";
import { useResearchStore } from "@Zustand/index";
import { globalStyles } from "../../Style";

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
    <SectionHeaderMoreContainer>
      <SectionHeaderTitle title={"리서치"} />
      <MoreText />
    </SectionHeaderMoreContainer>
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
