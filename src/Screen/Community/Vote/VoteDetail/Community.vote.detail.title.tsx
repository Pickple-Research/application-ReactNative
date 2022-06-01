import React from "react";
import styled from "styled-components/native";
import { H2, H3, BodyText, DetailText } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 투표 상세 화면 카테고리/투표제목/작성자/내용 항목입니다.
 * @author 현웅
 */
export function CommunityVoteDetailTitle() {
  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <VoteCategory>개발</VoteCategory>
      <VoteTitle>프로그래밍 언어 추천</VoteTitle>
      <VoteContent>{`by. {이서치}`}</VoteContent>
      <VoteContentText>
        개발자분들, 요새 어떤 언어 쓰시나요? 우리는 언어를 추천해드리겠습니다.
        언어를 추천해드리겠습니다. 정신 나갈 것 같아
      </VoteContentText>
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

const VoteContent = styled(DetailText)`
  color: ${({ theme }) => theme.color.grey.mild};
  margin-bottom: 24px;
`;

const VoteContentText = styled(H3)`
  color: ${({ theme }) => theme.color.grey.deep};
  line-height: 18px;
`;
