import React from "react";
import styled from "styled-components/native";
import { ResearchCommentsBox } from "src/Component/Research";
import { SectionHeaderText } from "src/Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import shallow from "zustand/shallow";
import { useResearchDetailScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style";

/**
 * 리서치 상세 화면 댓글 항목입니다.
 *
 * TODO: 나중에 댓글이 많아지면 성능 이슈가 생길텐데 구조를 어떻게 짜야할지 고민해봐야 합니다.
 * 댓글을 FlatList data로 넣고 리서치 본문을 FlatList Header로 넣어주면 될 듯 합니다.
 * @author 현웅
 */
export function ResearchDetailComments() {
  const { researchDetail, researchDetailComments } =
    useResearchDetailScreenStore(
      state => ({
        researchDetail: state.researchDetail,
        researchDetailComments: state.researchDetailComments,
      }),
      shallow,
    );

  return (
    <Container>
      <SectionHeader commentsNum={researchDetail.commentsNum} />
      <CommentInputBox />
      <ResearchCommentsBox comments={researchDetailComments} />
    </Container>
  );
}

function SectionHeader({ commentsNum }: { commentsNum: number }) {
  return (
    <SectionHeader__Container>
      <SectionHeaderText title={`댓글  ${commentsNum}`} />
    </SectionHeader__Container>
  );
}

/**
 * 새로운 리서치 (대)댓글 입력란
 * @author 현웅
 */
function CommentInputBox() {
  const {
    targetCommentId,
    targetCommentAuthorNickname,
    commentInput,
    setCommentInput,
    commentUploading,
    uploadComment,
    uploadReply,
  } = useResearchDetailScreenStore(
    state => ({
      targetCommentId: state.targetCommentId,
      targetCommentAuthorNickname: state.targetCommentAuthorNickname,
      commentInput: state.commentInput,
      setCommentInput: state.setCommentInput,
      commentUploading: state.commentUploading,
      uploadComment: state.uploadComment,
      uploadReply: state.uploadReply,
    }),
    shallow,
  );

  /**
   * (대)댓글을 업로드합니다.
   * targetCommentId가 설정되어 있는 경우 대댓글을,
   * 그렇지 않은 경우 댓글을 업로드합니다.
   * @author 현웅
   */
  async function onEndEditingComment() {
    if (targetCommentId !== "") {
      await uploadReply();
      return;
    }
    await uploadComment();
    return;
  }

  return (
    <CommentInputBox__Container style={globalStyles.screen__horizontalPadding}>
      <CommentInput__Container>
        <CommentInput
          //   multiline
          maxLength={360}
          editable={!commentUploading}
          value={commentInput}
          onChangeText={setCommentInput}
          onEndEditing={onEndEditingComment}
          placeholder="댓글 달기"
        />
      </CommentInput__Container>
    </CommentInputBox__Container>
  );
}

const Container = styled.View``;

const CommentInputBox__Container = styled.View`
  margin-bottom: 12px;
`;

const CommentInput__Container = styled.View`
  padding: 0px 16px;
  //TODO: #DESIGN-SYSTEM
  background-color: #f0f0f3;
  border-radius: 8px;
`;

const CommentInput = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }) => `${theme.size.header3}`};
`;
