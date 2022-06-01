import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { VoteComment } from "./Vote.comment.component";

/**
 * 투표 댓글 및 대댓글을 담는 컴포넌트입니다.
 * @author 현웅
 */
export function VoteCommentBox({ style }: { style?: StyleProp<ViewStyle> }) {
  return (
    <Container style={style}>
      <VoteComment />
      <Replies__Container>
        <VoteComment isReply={true} />
      </Replies__Container>
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 12px;
`;

const Replies__Container = styled.View`
  padding-left: 16px;
`;
