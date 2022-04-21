import React from "react";
import styled from "styled-components/native";
import { SectionHeaderMoreContainer } from "@Component/StyledComponents";
import { SectionHeaderTitle, MoreText } from "@Component/React";
import { VoteListContainer, VoteListItem } from "@Component/React/Vote";
import { useVoteStore } from "@Zustand/index";
import { globalStyles } from "../../../Style";

/**
 * 커뮤니티 랜딩 페이지 최신 투표 섹션
 * @author 현웅
 */
export function CommunityMainRecent() {
  return (
    <Container>
      <SectionHeader />
      <RecentVotes />
    </Container>
  );
}

export function SectionHeader() {
  return (
    <SectionHeaderMoreContainer>
      <SectionHeaderTitle title="최신 투표" />
      <MoreText />
    </SectionHeaderMoreContainer>
  );
}

export function RecentVotes() {
  const exampleVotes = useVoteStore(state => state.exampleVotes);

  return (
    <RecentVotes__Container style={globalStyles.screen__horizontalPadding}>
      <VoteListContainer>
        {exampleVotes.map((vote, index) => {
          return <VoteListItem key={`${index}:${vote.tag}`} vote={vote} />;
        })}
      </VoteListContainer>
    </RecentVotes__Container>
  );
}

const Container = styled.View``;

const RecentVotes__Container = styled.View``;
