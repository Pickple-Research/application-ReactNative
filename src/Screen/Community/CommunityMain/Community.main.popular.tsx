import React from "react";
import styled from "styled-components/native";
import { VoteListContainer, VoteListItem } from "@Component/Vote";
import { SectionHeaderTitle } from "@Component/Text";
import { SectionHeader__Container } from "../../../StyledComponents/View";
import { useVoteStore } from "@Zustand/index";
import { globalStyles } from "../../../Style";

/**
 * 커뮤니티 랜딩 페이지 인기 투표 섹션
 * @author 현웅
 */
export function CommunityMainPopular() {
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
      <SectionHeaderTitle title="인기 투표" />
    </SectionHeader__Container>
  );
}

function PopularVotes() {
  const exampleVotes = useVoteStore(state => state.exampleVotes);

  return (
    <PopularVotes__Container style={globalStyles.screen__horizontalPadding}>
      <VoteListContainer>
        {exampleVotes.map(vote => {
          return (
            <VoteListItem
              key={`${vote.tag}:${vote.title.slice(0, 10)}`}
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
