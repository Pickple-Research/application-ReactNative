import React from "react";
import styled from "styled-components/native";
import { CommunityVoteDetailTitle } from "./Community.vote.detail.title";
import { CommunityVoteDetailOptions } from "./Community.vote.detail.options";
import { CommunityVoteDetailComments } from "./Community.vote.detail.comments";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";

export type CommunityVoteDetailScreenProps = {};

/**
 * 커뮤니티 투표 상세 화면입니다.
 * @author 현웅
 */
export function CommunityVoteDetailScreen() {
  return (
    <Container>
      <WhiteBackgroundScrollView>
        <CommunityVoteDetailTitle />
        <CommunityVoteDetailOptions />
        <CommunityVoteDetailComments />
      </WhiteBackgroundScrollView>
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  flex: 1;
  background-color: white;
`;
