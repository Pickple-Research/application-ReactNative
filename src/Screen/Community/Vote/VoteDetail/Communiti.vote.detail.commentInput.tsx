import React from "react";
import styled from "styled-components/native";
import { BodyText, DetailText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useVoteDetailScreenStore } from "src/Zustand";
import CloseIcon from "src/Resource/svg/close-icon.svg";

/**
 * 투표 상세 페이지 밑부분의 댓글 작성 컴포넌트입니다.
 * @author 현웅
 */
export function CommunityVoteDetailCommentInput() {
  const {
    targetCommentId,
    setTargetCommentId,
    targetCommentAuthorNickname,
    setTargetCommentAuthorNickname,
    commentInput,
    setCommentInput,
    commentUploading,
    uploadComment,
    uploadReply,
  } = useVoteDetailScreenStore(
    state => ({
      targetCommentId: state.targetCommentId,
      setTargetCommentId: state.setTargetCommentId,
      targetCommentAuthorNickname: state.targetCommentAuthorNickname,
      setTargetCommentAuthorNickname: state.setTargetCommentAuthorNickname,
      commentInput: state.commentInput,
      setCommentInput: state.setCommentInput,
      commentUploading: state.commentUploading,
      uploadComment: state.uploadComment,
      uploadReply: state.uploadReply,
    }),
    shallow,
  );

  /**
   * '게시' 버튼을 눌렀을 때 행동을 지정합니다.
   * targetCommentId가 설정되어 있는 경우 대댓글을,
   * 그렇지 않은 경우 댓글을 업로드합니다.
   * @author 현웅
   */
  async function onPressUploadCommentText() {
    if (targetCommentId !== "") {
      await uploadReply();
      return;
    }
    await uploadComment();
    return;
  }

  return (
    <Container>
      {/* 대댓글을 남기는 중인 경우 표시 */}
      {targetCommentId !== "" && (
        <Reply__Container>
          <Reply__Text>
            {`${targetCommentAuthorNickname}님에게 답글 남기는 중`}
          </Reply__Text>
          <CloseIcon
            onPress={() => {
              setTargetCommentId("");
              setTargetCommentAuthorNickname("");
            }}
          />
        </Reply__Container>
      )}
      <Input__Container>
        <CommentInput
          multiline
          maxLength={360}
          editable={!commentUploading}
          value={commentInput}
          onChangeText={setCommentInput}
          placeholder={`댓글을 입력하세요`}
        />
        <CommentUploadText
          onPress={commentUploading ? undefined : onPressUploadCommentText}>
          {commentUploading ? `게시 중...` : `게시`}
        </CommentUploadText>
      </Input__Container>
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

const Reply__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.grey.unfocused};
  padding: 14px 20px;
`;

const Reply__Text = styled(BodyText)`
  color: ${({ theme }) => theme.color.grey.deep};
`;

const Input__Container = styled.View`
  flex-direction: row;
  align-items: center;
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
