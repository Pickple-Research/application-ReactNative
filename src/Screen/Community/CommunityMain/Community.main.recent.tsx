import React from "react";
import styled from "styled-components/native";
import { VoteListContainer, VoteListItem } from "@Component/Vote";
import { SectionHeaderTitle, MoreText } from "@Component/Text";
import { SectionHeaderContainer } from "@Component/StyledComponents";
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
    <SectionHeaderContainer>
      <SectionHeaderTitle title="최신 투표" />
      <MoreText />
    </SectionHeaderContainer>
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
