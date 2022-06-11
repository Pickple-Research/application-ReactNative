import React from "react";
import styled from "styled-components/native";
import { VoteListContainer, VoteListItem } from "@Component/Vote";
import { SectionHeaderText } from "@Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { useVoteStore } from "src/Zustand";
import { globalStyles } from "src/Style";

/**
 * 커뮤니티 랜딩 페이지 인기 투표 섹션
 * @author 현웅
 */
export function CommunityLandingPopular() {
  return (
    <Container>
      <SectionHeader />
      <PopularVotes />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderText title="인기 투표" />
    </SectionHeader__Container>
  );
}

function PopularVotes() {
  const votes = useVoteStore(state => state.votes);

  return (
    <PopularVotes__Container style={globalStyles.screen__horizontalPadding}>
      <VoteListContainer>
        {votes.map((vote, index) => {
          return (
            <VoteListItem
              key={`${index}:${vote.title.slice(0, 10)}`}
              vote={vote}
            />
          );
        })}
      </VoteListContainer>
    </PopularVotes__Container>
  );
}

const Container = styled.View`
  margin-bottom: 45px;
`;

const PopularVotes__Container = styled.View``;
