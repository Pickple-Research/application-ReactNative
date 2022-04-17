import React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { Carousel } from "@Component/React";
import { VotesContainer, VoteListItem } from "@Component/React/Vote";
import { screenStyles } from "./Community.main.screen";
import { exampleVotesList } from "../../../Object/Type";

export function CommunityMainPopular() {
  return (
    <Container style={{ ...screenStyles.padding }}>
      <Header />
      <PopularVotesList />
    </Container>
  );
}

function Header() {
  return (
    <Header__Container style={{ ...screenStyles.headerContainer }}>
      <Text style={{ ...screenStyles.headerTitleText }}>인기 투표</Text>
    </Header__Container>
  );
}

function PopularVotesList() {
  return (
    <VotesContainer>
      {exampleVotesList.map(vote => {
        return (
          <VoteListItem
            key={`${vote.tag}:${vote.title.slice(0, 10)}`}
            vote={vote}
          />
        );
      })}
    </VotesContainer>
  );
}

const styles = StyleSheet.create({
  carousel__contentContainer: {},
});

const Container = styled.View`
  margin-bottom: 45px;
`;

// Header()
const Header__Container = styled.View``;

// PopularVotesList()
