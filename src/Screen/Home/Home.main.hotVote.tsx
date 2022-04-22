import React from "react";
import styled from "styled-components/native";
import { VoteListContainer, VoteListItem } from "@Component/Vote";
import { SectionHeaderTitle, MoreText } from "@Component/Text";
import { SectionHeader__Container } from "../../StyledComponents/View";
import { useVoteStore } from "@Zustand/index";
import { globalStyles } from "../../Style";

/**
 * 홈 랜딩 페이지의 HOT 투표 섹션
 * @author 현웅
 */
export function HomeMainHotVote() {
  return (
    <Container>
      <SectionHeader />
      <HotVotes />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderTitle title="HOT 투표" />
      <MoreText />
    </SectionHeader__Container>
  );
}

function HotVotes() {
  const exampleVote = useVoteStore(state => state.exampleVote);

  return (
    <HotVotes__Container style={{ ...globalStyles.screen__horizontalPadding }}>
      <VoteListContainer>
        <VoteListItem vote={exampleVote} />
      </VoteListContainer>
    </HotVotes__Container>
  );
}

const Container = styled.View`
  margin-bottom: 35px;
`;

const HotVotes__Container = styled.View``;
