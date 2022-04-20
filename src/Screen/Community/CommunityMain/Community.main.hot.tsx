import React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { screenStyles } from "./Community.main.screen";
import {
  VoteListContainer,
  VoteParticipantInfo,
  VoteOption,
} from "@Component/React/Vote";
import { VoteProps } from "@Object/Type";
import { exampleVote } from "../../../Object/Type";

export function CommunityMainHot() {
  return (
    <Container style={{ ...screenStyles.padding }}>
      <Header />
      <HotVote vote={exampleVote} />
    </Container>
  );
}

function Header() {
  return (
    <Header__Container style={{ ...screenStyles.headerContainer }}>
      <Text style={{ ...screenStyles.headerTitleText }}>지금 핫한 투표는</Text>
    </Header__Container>
  );
}

function HotVote({ vote }: { vote: VoteProps }) {
  return (
    <VoteListContainer style={styles.votesContainer}>
      <HotVote__Title>{vote.title}</HotVote__Title>
      {vote.options.map((option, index) => {
        return (
          <VoteOption
            key={`${index}:${option.content.slice(0, 4)}`}
            voteOption={option}
          />
        );
      })}
      <HotVote__BottomContainer>
        <HotVote__Viewed>10명이 이 투표를 읽었습니다.</HotVote__Viewed>
        <VoteParticipantInfo />
      </HotVote__BottomContainer>
    </VoteListContainer>
  );
}

const styles = StyleSheet.create({
  votesContainer: {
    padding: 10,
  },
});

const Container = styled.View`
  margin-bottom: 50px;
`;

const Header__Container = styled.View``;

// HotVote()
const HotVote__Title = styled.Text`
  font-size: 12px;
  font-weight: bold;

  margin-bottom: 12px;
`;

const HotVote__BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const HotVote__Viewed = styled.Text`
  font-size: 9px;
`;
