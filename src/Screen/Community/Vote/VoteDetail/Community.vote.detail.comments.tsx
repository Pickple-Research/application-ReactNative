import React from "react";
import styled from "styled-components/native";
import { VoteCommentsBox } from "src/Component/Vote";
import { SectionHeaderText } from "src/Component/Text";
import { useVoteDetailScreenStore } from "src/Zustand";
import { SectionHeader__Container } from "src/StyledComponents/View";

/**
 * 투표 상세 화면 댓글 항목입니다.
 *
 * TODO: 나중에 댓글이 많아지면 성능 이슈가 생길텐데 구조를 어떻게 짜야할지 고민해봐야 합니다.
 * 댓글을 FlatList data로 넣고 투표 본문을 FlatList Header로 넣어주면 될 듯 합니다.
 * @author 현웅
 */
export function CommunityVoteDetailComments() {
  const voteDetailComments = useVoteDetailScreenStore(
    state => state.voteDetailComments,
  );

  return (
    <Container>
      <SectionHeader />
      <VoteCommentsBox comments={voteDetailComments} />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderText title="댓글" />
    </SectionHeader__Container>
  );
}

const Container = styled.View``;
