import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Home.main.screen";
import { SectionHeaderMoreContainer } from "@Component/StyledComponents";
import { SectionHeaderTitle, MoreText } from "@Component/React";
import { VoteRow } from "@Component/React/Vote";
import { globalStyles } from "../../Style";

/**
 * 홈 랜딩 페이지의 최신 투표 섹션
 * @author 현웅
 */
export function HomeMainRecentVote() {
  return (
    <Container style={{ ...screenStyles.border }}>
      <SectionHeader />
      <RecentVotes />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeaderMoreContainer>
      <SectionHeaderTitle title="최신 투표" />
      <MoreText />
    </SectionHeaderMoreContainer>
  );
}

function RecentVotes() {
  return (
    <RecentVotes__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      <VoteRow />
    </RecentVotes__Container>
  );
}

const Container = styled.View`
  padding-bottom: 35px;
  margin-bottom: 15px;
`;

const RecentVotes__Container = styled.View``;
