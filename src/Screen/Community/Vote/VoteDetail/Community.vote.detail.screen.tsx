import React, { useEffect } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackProps } from "src/Navigator";
import { CommunityVoteDetailTitle } from "./Community.vote.detail.title";
import { CommunityVoteDetailOptions } from "./Community.vote.detail.options";
import { CommunityVoteDetailComments } from "./Community.vote.detail.comments";
import { CommunityVoteDetailCommentInput } from "./Communiti.vote.detail.commentInput";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import { VoteSchema } from "src/Schema";
import shallow from "zustand/shallow";
import { useVoteDetailStore } from "src/Zustand";

export type CommunityVoteDetailScreenProps = { vote: VoteSchema };

/**
 * 커뮤니티 투표 상세 화면입니다.
 * @author 현웅
 */
export function CommunityVoteDetailScreen({
  route,
}: NativeStackScreenProps<AppStackProps, "CommunityVoteDetailScreen">) {
  const { setVote, getVoteDetailComments, clearInfo } = useVoteDetailStore(
    state => ({
      setVote: state.setVoteDetail,
      getVoteDetailComments: state.getVoteDetailComments,
      clearInfo: state.clearInfo,
    }),
    shallow,
  );

  async function loadVoteDetailComments() {
    await getVoteDetailComments(route.params.vote._id);
  }

  //* 페이지가 로드되면 인자로 받아온 투표 정보를 랜더링하도록 상태를 변경하고,
  //* 투표 (대)댓글 정보를 모두 받아옵니다.
  //* 페이지를 벗어나면 정보를 초기화합니다.
  useEffect(() => {
    setVote(route.params.vote);
    loadVoteDetailComments();
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
      <CommunityVoteDetailCommentInput />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  position: relative;
  flex: 1;
  background-color: white;
`;
