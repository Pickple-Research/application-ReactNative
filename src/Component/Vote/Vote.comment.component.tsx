import React from "react";
import styled from "styled-components/native";
import { BodyText } from "src/StyledComponents/Text";
import UserIcon from "src/Resource/svg/user-icon.svg";
import DotsIcon from "src/Resource/svg/dots-icon.svg";

/**
 * 투표 댓글 및 대댓글 컴포넌트입니다.
 * 댓글과 대댓글의 디자인 차이점은 내용을 담는 컴포넌트의 배경색 차이 뿐이므로 재활용합니다.
 * @author 현웅
 */
export function VoteComment({ isReply }: { isReply?: boolean }) {
  return (
    <Container>
      <Profile />
      <ContentsDotMenu__Container isReply={isReply}>
        <Contents />
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

function Contents() {
  return (
    <Contents__Container>
      <Contents__Username isAuthor={false}>이삭토스트</Contents__Username>
      <Contents__Content>
        평소 관심있던 주제였는데 결과가 어떻게 나올지 궁금하네요. 재밌게 잘
        참여했습니다. 저도 같이 참여해보고 싶어요. 저도 잘 참여하고 싶어요. 얼른
        더 추천해
      </Contents__Content>
      <Contents__Date>05/06 14:21</Contents__Date>
    </Contents__Container>
  );
}

function DotMenu() {
  return (
    <DotMenu__Container>
      <DotsIcon />
    </DotMenu__Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

const ContentsDotMenu__Container = styled.View<{ isReply?: boolean }>`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  //TODO: #DESIGN-SYSTEM
  background-color: ${({ isReply }) => (isReply ? "#f3f3f3" : "none")};
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
