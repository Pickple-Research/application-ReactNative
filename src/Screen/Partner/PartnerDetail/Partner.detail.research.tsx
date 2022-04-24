import React from "react";
import styled from "styled-components/native";
import { SectionHeaderTitle, MoreText } from "@Component/Text";
import { ResearchListItem } from "@Component/Research";
import { SectionHeader__Container } from "../../../StyledComponents/View";
import { useResearchStore } from "@Zustand/index";
import { globalStyles } from "../../../Style";

/**
 * 파트너 상세정보 페이지 파트너가 진행중인 리서치 섹션
 * @author 현웅
 */
export function PartnerDetailResearch() {
  return (
    <Container>
      <SectionHeader />
      <Researches />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeader__TitleContainer>
        <SectionHeaderTitle title="새 리서치" style={{ marginRight: 6 }} />
        <SectionHeader__TitleNum>3</SectionHeader__TitleNum>
      </SectionHeader__TitleContainer>
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
  margin-bottom: 50px;
`;

const SectionHeader__TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionHeader__TitleNum = styled.Text`
  color: ${({ theme }) => theme.color.main_skyblue};
  font-size: 14px;
  font-weight: bold;
`;

const Researches__Container = styled.View``;
