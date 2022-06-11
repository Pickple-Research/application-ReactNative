import React from "react";
import styled from "styled-components/native";
import { VoteListContainer, VoteListItem } from "@Component/Vote";
import { SectionHeaderText, MoreText } from "@Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { useVoteStore } from "src/Zustand";
import { globalStyles } from "src/Style";

/**
 * 커뮤니티 랜딩 페이지 최신 투표 섹션
 * @author 현웅
 */
export function CommunityLandingRecent() {
  return (
    <Container>
      <SectionHeader />
      <RecentVotes />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderText title="최신 투표" />
      <MoreText />
    </SectionHeader__Container>
  );
}

function RecentVotes() {
  const votes = useVoteStore(state => state.votes);

  return (
    <RecentVotes__Container style={globalStyles.screen__horizontalPadding}>
      <VoteListContainer>
        {votes.map((vote, index) => {
          return <VoteListItem key={`${index}:${vote.title}`} vote={vote} />;
        })}
      </VoteListContainer>
    </RecentVotes__Container>
  );
}

const Container = styled.View``;

const RecentVotes__Container = styled.View``;
