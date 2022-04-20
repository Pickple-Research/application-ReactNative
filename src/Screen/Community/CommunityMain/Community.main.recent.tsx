import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { screenStyles } from "./Community.main.screen";
import { VoteListContainer, VoteListItem } from "@Component/React/Vote";
import { exampleVotesList } from "../../../Object/Type";

export function CommunityMainRecent() {
  return (
    <Container style={{ ...screenStyles.padding }}>
      <Header />
      <RecentVotesList />
    </Container>
  );
}

export function Header() {
  return (
    <Header__Container style={{ ...screenStyles.headerContainer }}>
      <Text style={{ ...screenStyles.headerTitleText }}>최신 투표</Text>
      <Text style={{ ...screenStyles.headerMoreText }}>more</Text>
    </Header__Container>
  );
}

export function RecentVotesList() {
  return (
    <VoteListContainer>
      {exampleVotesList.map((vote, index) => {
        return <VoteListItem key={`${index}:${vote.tag}`} vote={vote} />;
      })}
    </VoteListContainer>
  );
}

const Container = styled.View``;

const Header__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
