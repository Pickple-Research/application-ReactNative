import React from "react";
import styled from "styled-components/native";
import { useVoteDetailStore } from "src/Zustand";
import { H2, H3, BodyText, DetailText } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 투표 상세 화면 카테고리/투표제목/작성자/내용 항목입니다.
 * @author 현웅
 */
export function CommunityVoteDetailTitle() {
  const vote = useVoteDetailStore(state => state.vote);

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <VoteCategory>{`vote.category`}</VoteCategory>
      <VoteTitle>{vote.title}</VoteTitle>
      <VoteAuthor>{`by. ${
        vote.authorNickname ? vote.authorNickname : `익명`
      }`}</VoteAuthor>
      <VoteContentText>{vote.content}</VoteContentText>
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 24px;
`;

const VoteCategory = styled(BodyText)`
  color: ${({ theme }) => theme.color.grey.mild};
  margin-bottom: 8px;
`;

const VoteTitle = styled(H2)`
  color: ${({ theme }) => theme.color.grey.deep};
  font-weight: bold;
  margin-bottom: 4px;
`;

const VoteAuthor = styled(DetailText)`
  color: ${({ theme }) => theme.color.grey.mild};
  margin-bottom: 24px;
`;

const VoteContentText = styled(H3)`
  color: ${({ theme }) => theme.color.grey.deep};
  line-height: 18px;
`;
