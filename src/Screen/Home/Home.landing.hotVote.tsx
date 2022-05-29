import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LandingBottomTabProps } from "src/Navigator";
import { VoteListContainer, VoteListItem } from "@Component/Vote";
import { SectionHeaderText, MoreText } from "@Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { useVoteStore } from "src/Zustand";
import { globalStyles } from "src/Style";

/**
 * 홈 랜딩 페이지의 HOT 투표 섹션
 * @author 현웅
 */
export function HomeLandingHotVote() {
  return (
    <Container>
      <SectionHeader />
      <HotVotes />
    </Container>
  );
}

function SectionHeader() {
  const navigation =
    useNavigation<NavigationProp<LandingBottomTabProps, "HomeLandingScreen">>();

  return (
    <SectionHeader__Container>
      <SectionHeaderText title="HOT 투표" />
      <MoreText
        onPress={() => {
          navigation.navigate("CommunityLandingScreen", {});
        }}
      />
    </SectionHeader__Container>
  );
}

function HotVotes() {
  const exampleVote = useVoteStore(state => state.exampleVote);

  return (
    <HotVotes__Container style={{ ...globalStyles.screen__horizontalPadding }}>
      <VoteListContainer>
        <VoteListItem vote={exampleVote} />
      </VoteListContainer>
    </HotVotes__Container>
  );
}

const Container = styled.View`
  margin-bottom: 35px;
`;

const HotVotes__Container = styled.View``;
