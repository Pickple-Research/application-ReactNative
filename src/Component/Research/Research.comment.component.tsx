import React from "react";
import styled from "styled-components/native";
import { ResearchReply } from "./Research.reply.component";
import { BodyText } from "src/StyledComponents/Text";
import { ResearchCommentSchema } from "src/Schema";
import shallow from "zustand/shallow";
import { useResearchDetailScreenStore } from "src/Zustand";
import { convertTimeToMMDDHHMM } from "src/Util";
import { globalStyles } from "src/Style/globalStyles";
import UserIcon from "src/Resource/svg/user-icon.svg";
import VerticalDotsSmallIcon from "src/Resource/svg/vertical-dots-small-icon.svg";

/**
 * 리서치 댓글 컴포넌트입니다.
 * @param comment 댓글 정보
 * @param index 댓글 순서 (첫번째가 아닌 경우 구분선 표시)
 * @author 현웅
 */
export function ResearchComment({
  comment,
  index,
}: {
  comment: ResearchCommentSchema;
  index: number;
}) {
  return (
    <>
      {index !== 0 && <HorizontalLine />}
      <Container style={globalStyles.screen__horizontalPadding}>
        <CommentContainer>
          <Profile />
          <ContentsDotMenu__Container>
            <Contents comment={comment} />
            <DotMenu />
          </ContentsDotMenu__Container>
        </CommentContainer>
        <Replies__Container>
          {comment.replies.map(reply => {
            return <ResearchReply key={reply._id} reply={reply} />;
          })}
        </Replies__Container>
      </Container>
    </>
  );
}

function Profile() {
  return (
    <Profile__Container>
      <UserIcon />
    </Profile__Container>
  );
}

function Contents({ comment }: { comment: ResearchCommentSchema }) {
  const { researchDetail, setTargetCommentId, setTargetCommentAuthorNickname } =
    useResearchDetailScreenStore(
      state => ({
        researchDetail: state.researchDetail,
        setTargetCommentId: state.setTargetCommentId,
        setTargetCommentAuthorNickname: state.setTargetCommentAuthorNickname,
      }),
      shallow,
    );

  const isAuthor = researchDetail.authorId === comment.authorId;

  return (
    <Contents__Container>
      <Contents__UserNickname isAuthor={isAuthor}>
        {comment.author?.nickname ? comment.author.nickname : `(삭제된 사용자)`}
      </Contents__UserNickname>

      <Contents__Content>{comment.content}</Contents__Content>

      <Contents__DateContainer>
        <Contents__Date>
          {convertTimeToMMDDHHMM(comment.createdAt)}
        </Contents__Date>
        <Contents__AppReply
          onPress={() => {
            setTargetCommentId(comment._id);
            setTargetCommentAuthorNickname(`comment.authorNickname`);
          }}>
          답글 달기
        </Contents__AppReply>
      </Contents__DateContainer>
    </Contents__Container>
  );
}

function DotMenu() {
  return (
    <DotMenu__Container>
      <VerticalDotsSmallIcon />
    </DotMenu__Container>
  );
}

const Container = styled.View`
  margin-bottom: 8px;
`;

const CommentContainer = styled.View`
  flex-direction: row;
`;

const ContentsDotMenu__Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 2px 6px 12px 8px;
`;

const HorizontalLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: #e7e7e7;
  margin-bottom: 16px;
`;

const Replies__Container = styled.View`
  padding-left: 16px;
`;

// Profile()
const Profile__Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  //TODO: #DESIGN-SYSTEM
  background-color: #dddddd;
  margin-right: 6px;
  border-radius: 100px;
`;

// Contents()
const Contents__Container = styled.View`
  flex: 1;
`;

const Contents__UserNickname = styled(BodyText)<{ isAuthor: boolean }>`
  color: ${({ isAuthor, theme }) =>
    isAuthor ? theme.color.blue.text : theme.color.grey.deep};
  font-weight: bold;
`;

const Contents__Content = styled(BodyText)`
  flex-wrap: wrap;
  color: ${({ theme }) => theme.color.grey.deep};
  line-height: 15px;
  margin-bottom: 3px;
`;

const Contents__DateContainer = styled.View`
  flex-direction: row;
`;

const Contents__Date = styled.Text`
  //TODO: #DESIGN-SYSTEM
  font-size: 8px;
  color: ${({ theme }) => theme.color.grey.mild};
  margin-right: 10px;
`;

const Contents__AppReply = styled(Contents__Date)``;

// DotMenu()
const DotMenu__Container = styled.View``;
