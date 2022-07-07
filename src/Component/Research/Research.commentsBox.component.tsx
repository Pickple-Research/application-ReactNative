import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { ResearchComment } from "./Research.comment.component";
import { ResearchCommentSchema } from "src/Schema";

/**
 * 리서치 댓글 및 대댓글을 담는 컴포넌트입니다.
 * @author 현웅
 */
export function ResearchCommentsBox({
  comments,
  style,
}: {
  comments: ResearchCommentSchema[];
  style?: StyleProp<ViewStyle>;
}) {
  if (comments.length === 0) return null;

  return (
    <Container style={style}>
      {comments.map((comment, index) => {
        return (
          <ResearchComment key={comment._id} comment={comment} index={index} />
        );
      })}
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 12px;
`;
