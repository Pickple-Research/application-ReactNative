import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Home.main.screen";
import { SectionHeaderTitle, MoreText } from "@Component/React";
import { VoteListContainer, VoteListItem } from "@Component/React/Vote";
import { exampleVote } from "../../Object/Type";

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
    <Header__Container
      style={{ ...screenStyles.padding, ...screenStyles.header__margin }}>
      <SectionHeaderTitle title="HOT 투표" />
      <MoreText />
    </Header__Container>
  );
}

function HotVotes() {
  return (
    <VoteListContainer>
      <VoteListItem vote={exampleVote} />
    </VoteListContainer>
  );
}

const Container = styled.View`
  margin-bottom: 35px;
`;

const Header__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
