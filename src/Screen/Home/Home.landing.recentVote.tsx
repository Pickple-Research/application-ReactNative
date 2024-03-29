import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LandingBottomTabProps } from "src/Navigator";
import { screenStyles } from "./Home.landing.screen";
import { VoteRow } from "src/Component/Vote";
import { SectionHeaderText, MoreText } from "src/Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { globalStyles } from "src/Style";
import { useVoteStore } from "src/Zustand";

/**
 * 홈 랜딩 페이지의 최신 투표 섹션
 * @author 현웅
 */
export function HomeLandingRecentVote() {
  return (
    <Container style={{ ...screenStyles.boundary }}>
      <SectionHeader />
      <RecentVotes />
    </Container>
  );
}

function SectionHeader() {
  const navigation =
    useNavigation<NavigationProp<LandingBottomTabProps, "HomeLandingScreen">>();

  return (
    <SectionHeader__Container>
      <SectionHeaderText title="최신 투표" />
      <MoreText
        onPress={() => {
          navigation.navigate("CommunityLandingScreen", {});
        }}
      />
    </SectionHeader__Container>
  );
}

function RecentVotes() {
  const votes = useVoteStore(state => state.votes);

  return (
    <RecentVotes__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      <VoteRow vote={votes[0]} participated={false} />
    </RecentVotes__Container>
  );
}

const Container = styled.View`
  padding-bottom: 35px;
  margin-bottom: 15px;
`;

const RecentVotes__Container = styled.View``;
