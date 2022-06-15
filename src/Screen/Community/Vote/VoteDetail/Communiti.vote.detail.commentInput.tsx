import React from "react";
import styled from "styled-components/native";
import { DetailText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useVoteDetailStore } from "src/Zustand";

/**
 * 투표 상세 페이지 밑부분의 댓글 작성 컴포넌트입니다.
 * @author 현웅
 */
export function CommunityVoteDetailCommentInput() {
  const {
    commentInput,
    setCommentInput,
    commentUploading,
    uploadComment,
    uploadReply,
  } = useVoteDetailStore(
    state => ({
      commentInput: state.commentInput,
      setCommentInput: state.setCommentInput,
      commentUploading: state.commentUploading,
      uploadComment: state.uploadComment,
      uploadReply: state.uploadReply,
    }),
    shallow,
  );

  return (
    <Container>
      <CommentInput
        multiline
        maxLength={360}
        editable={!commentUploading}
        value={commentInput}
        onChangeText={setCommentInput}
        placeholder={`댓글을 입력하세요`}
      />
      <CommentUploadText onPress={commentUploading ? undefined : uploadComment}>
        {commentUploading ? `게시 중...` : `게시`}
      </CommentUploadText>
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  bottom: 0px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  //TODO: #DESIGN-SYSTEM
  background-color: #eeeeee;
  padding: 0px 20px;
`;

const CommentInput = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }) => `${theme.size.body}`};
  line-height: 24px;
  padding: 8px 0px;
`;

const CommentUploadText = styled(DetailText)`
  color: ${({ theme }) => theme.color.blue.text};
  font-weight: bold;
  padding-left: 20px;
`;
