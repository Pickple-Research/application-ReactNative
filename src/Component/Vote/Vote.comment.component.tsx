import React from "react";
import styled from "styled-components/native";
import { VoteReply } from "./Vote.reply.component";
import { BodyText } from "src/StyledComponents/Text";
import { VoteCommentSchema } from "src/Schema";
import { globalStyles } from "src/Style/globalStyles";
import UserIcon from "src/Resource/svg/user-icon.svg";
import VerticalDotsSmallIcon from "src/Resource/svg/vertical-dots-small-icon.svg";

/**
 * 투표 댓글 컴포넌트입니다.
 * @author 현웅
 */
export function VoteComment({
  comment,
  index,
}: {
  comment: VoteCommentSchema;
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
            return <VoteReply key={reply._id} reply={reply} />;
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

function Contents({ comment }: { comment: VoteCommentSchema }) {
  return (
    <Contents__Container>
      <Contents__Username isAuthor={false}>
        {comment.authorNickname ? comment.authorNickname : `익명`}
      </Contents__Username>
      <Contents__Content>{comment.content}</Contents__Content>
      <Contents__Date>{comment.createdAt}</Contents__Date>
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

const Contents__Username = styled(BodyText)<{ isAuthor: boolean }>`
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

const Contents__Date = styled.Text`
  //TODO: #DESIGN-SYSTEM
  font-size: 8px;
  color: ${({ theme }) => theme.color.grey.mild};
`;

// DotMenu()
const DotMenu__Container = styled.View``;
