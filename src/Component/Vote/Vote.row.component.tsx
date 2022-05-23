import React from "react";
import styled from "styled-components/native";
import { VoteParticipantInfo } from "@Component/Vote";
import { H3, BodyText } from "src/StyledComponents/Text";

/**
 * 얇은 투표 한 줄에 사용되는 컴포넌트입니다.
 * @author 현웅
 */
export function VoteRow() {
  return (
    <Container>
      <VoteCategory>자유 토픽</VoteCategory>
      <VoteTitle numberOfLines={1}>
        진짜 변기 물 내릴 때 발로 눌러서 내리나요?
      </VoteTitle>
      <VoteParticipantInfo />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
`;

const VoteCategory = styled(H3)`
  color: black;
  font-weight: bold;
  margin-right: 8px;
`;

const VoteTitle = styled(BodyText)`
  flex: 1;
  color: ${({ theme }) => theme.color.text_color_555};
  margin-right: 12px;
`;
