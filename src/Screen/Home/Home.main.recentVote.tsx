import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Home.main.screen";
import { SectionHeaderTitle, MoreText } from "@Component/React";
import { VoteRow } from "@Component/React/Vote";

export function HomeMainRecentVote() {
  return (
    <Container style={{ ...screenStyles.padding, ...screenStyles.border }}>
      <SectionHeader />
      <RecentVotes />
    </Container>
  );
}

function SectionHeader() {
  return (
    <Header__Container style={{ ...screenStyles.header__margin }}>
      <SectionHeaderTitle title="최신 투표" />
      <MoreText />
    </Header__Container>
  );
}

function RecentVotes() {
  return <VoteRow />;
}

const Container = styled.View`
  padding-bottom: 35px;
  margin-bottom: 15px;
`;

const Header__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
