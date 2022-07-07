import React from "react";
import styled from "styled-components/native";
import { BodyText } from "src/StyledComponents/Text";
import { ResearchReplySchema } from "src/Schema";
import shallow from "zustand/shallow";
import { useResearchDetailScreenStore } from "src/Zustand";
import { convertTimeToMMDDHHMM } from "src/Util";
import UserIcon from "src/Resource/svg/user-icon.svg";
import VerticalDotsSmallIcon from "src/Resource/svg/vertical-dots-small-icon.svg";

/**
 * 리서치 대댓글 컴포넌트입니다.
 * 댓글 컴포넌트와 ContentsDotMenu__Container의 배경색만 다릅니다.
 * @author 현웅
 */
export function ResearchReply({ reply }: { reply: ResearchReplySchema }) {
  return (
    <Container>
      <Profile />
      <ContentsDotMenu__Container>
        <Contents reply={reply} />
        <DotMenu />
      </ContentsDotMenu__Container>
    </Container>
  );
}

function Profile() {
  return (
    <Profile__Container>
      <UserIcon />
    </Profile__Container>
  );
}

function Contents({ reply }: { reply: ResearchReplySchema }) {
  const { researchDetail, setTargetCommentId, setTargetCommentAuthorNickname } =
    useResearchDetailScreenStore(
      state => ({
        researchDetail: state.researchDetail,
        setTargetCommentId: state.setTargetCommentId,
        setTargetCommentAuthorNickname: state.setTargetCommentAuthorNickname,
      }),
      shallow,
    );

  const isAuthor = researchDetail.authorId === reply.authorId;

  return (
    <Contents__Container>
      <Contents__UserNickname isAuthor={isAuthor}>
        {reply.author?.nickname ? reply.author.nickname : `(삭제된 사용자)`}
      </Contents__UserNickname>

      <Contents__Content>{reply.content}</Contents__Content>

      <Contents__DateContainer>
        <Contents__Date>
          {convertTimeToMMDDHHMM(reply.createdAt)}
        </Contents__Date>
        <Contents__AppReply
          onPress={() => {
            setTargetCommentId(reply.commentId);
            setTargetCommentAuthorNickname(`reply.authorNickname`);
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
  flex-direction: row;
  margin-bottom: 8px;
`;

const ContentsDotMenu__Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  //TODO: #DESIGN-SYSTEM
  background-color: #f3f3f3;
  padding: 8px;
  padding-right: 6px;
  border-radius: 8px;
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
