import React, { useEffect } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackProps } from "src/Navigator";
import { CommunityVoteDetailTitle } from "./Community.vote.detail.title";
import { CommunityVoteDetailOptions } from "./Community.vote.detail.options";
import { CommunityVoteDetailComments } from "./Community.vote.detail.comments";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import shallow from "zustand/shallow";
import { useVoteDetailStore } from "src/Zustand";

export type CommunityVoteDetailScreenProps = { voteId: string };

/**
 * 커뮤니티 투표 상세 화면입니다.
 * @author 현웅
 */
export function CommunityVoteDetailScreen({
  route,
}: // navigation,
NativeStackScreenProps<AppStackProps, "CommunityVoteDetailScreen">) {
  const { clearInfo, getVote } = useVoteDetailStore(
    state => ({
      clearInfo: state.clearInfo,
      getVote: state.getVote,
    }),
    shallow,
  );

  //* 페이지가 로드되면 인자로 받아온 voteId를 통해 투표 정보를 얻어오고,
  //* 페이지를 벗어나면 정보를 초기화합니다.
  useEffect(() => {
    getVote(route.params.voteId);
    return () => {
      clearInfo();
    };
  }, []);

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
