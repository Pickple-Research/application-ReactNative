import React from "react";
import styled from "styled-components/native";
import { SectionHeaderText } from "src/Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { useResearchDetailStore } from "src/Zustand";
import { H3 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";

/**
 * 리서치 상세정보 페이지 내용 섹션
 * @author 현웅
 */
export function ResearchDetailContent() {
  const research = useResearchDetailStore(state => state.research);

  return (
    <Container>
      <SectionHeader />
      <Content content={research.content} />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderText title="내용" />
    </SectionHeader__Container>
  );
}

function Content({ content }: { content: string }) {
  return (
    <Content__Container style={{ ...globalStyles.screen__horizontalPadding }}>
      <Content__Text>{content}</Content__Text>
    </Content__Container>
  );
}

const Container = styled.View`
  margin-bottom: 80px;
`;

const Content__Container = styled.View``;

const Content__Text = styled(H3)``;
