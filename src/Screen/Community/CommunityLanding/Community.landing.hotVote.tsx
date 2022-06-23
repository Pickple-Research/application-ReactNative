import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import {
  VoteListContainer,
  VoteParticipationInfo,
  VoteOption,
  VoteOptionResult,
} from "src/Component/Vote";
import { SectionHeaderText } from "src/Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { VoteSchema } from "src/Schema";
import { useVoteStore } from "src/Zustand";
import { H3, DetailText } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";

/**
 * @deprecated
 * 커뮤니티 랜딩 페이지 '지금 핫한 투표는' 섹션
 * @author 현웅
 */
export function CommunityLandingHotVote() {
  const votes = useVoteStore(state => state.votes);

  return (
    <Container>
      <SectionHeader />
      <HotVote vote={votes[0]} />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container style={globalStyles.screen__horizontalPadding}>
      <SectionHeaderText title="지금 핫한 투표는" />
    </SectionHeader__Container>
  );
}

function HotVote({ vote }: { vote: VoteSchema }) {
  return (
    <HotVote__Container style={globalStyles.screen__horizontalPadding}>
      <VoteListContainer style={styles.votesContainer}>
        <HotVote__Title>{vote.title}</HotVote__Title>
        {vote.options.map((option, index) => {
          return (
            <VoteOption
              key={`${index}:${option.content.slice(0, 4)}`}
              voteOption={option}
              selected={true}
              onPress={() => {}}
            />
          );
        })}
        {vote.options.map((option, index) => {
          return (
            <VoteOptionResult
              key={`${index}:${option.content.slice(0, 4)}`}
              voteOption={option}
              selected={true}
              ratio={24}
              won={true}
            />
          );
        })}
        <HotVote__BottomContainer>
          <HotVote__Viewed>{`${vote.viewsNum}명이 이 투표를 읽었습니다.`}</HotVote__Viewed>
          <VoteParticipationInfo
            participantsNum={vote.participantsNum}
            commentsNum={vote.commentsNum}
          />
        </HotVote__BottomContainer>
      </VoteListContainer>
    </HotVote__Container>
  );
}

const styles = StyleSheet.create({
  votesContainer: {
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
});

const Container = styled.View`
  margin-bottom: 50px;
`;

// HotVote()
const HotVote__Container = styled.View``;

const HotVote__Title = styled(H3)`
  font-weight: bold;
  margin-bottom: 12px;
`;

const HotVote__BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const HotVote__Viewed = styled(DetailText)``;
