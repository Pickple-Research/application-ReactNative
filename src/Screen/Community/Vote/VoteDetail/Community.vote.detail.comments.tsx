import React from "react";
import styled from "styled-components/native";
import { VoteCommentBox } from "src/Component/Vote";
import { SectionHeaderText } from "src/Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 투표 상세 화면 댓글 항목입니다.
 *
 * TODO: 나중에 댓글이 많아지면 성능 이슈가 생길텐데 구조를 어떻게 짜야할지 고민해봐야 합니다.
 * @author 현웅
 */
export function CommunityVoteDetailComments() {
  return (
    <Container>
      <SectionHeader />
      <CommentList />
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

function CommentList() {
  return (
    <CommentList__Container>
      <VoteCommentBox style={globalStyles.screen__horizontalPadding} />
      <HorizontalLine />
      <VoteCommentBox style={globalStyles.screen__horizontalPadding} />
    </CommentList__Container>
  );
}

const Container = styled.View``;

const CommentList__Container = styled.View``;

const HorizontalLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: #e7e7e7;
  margin-bottom: 16px;
`;
