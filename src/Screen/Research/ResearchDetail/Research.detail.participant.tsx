import React from "react";
import styled from "styled-components/native";
import { H1, H4 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";

/**
 * 리서치 상세정보 페이지 참여 현황 섹션
 * @author 현웅
 */
export function ResearchDetailParticipant() {
  return (
    <Container style={{ ...globalStyles.screen__horizontalPadding }}>
      <Icon__Container />
      <ParticipantsNum>62</ParticipantsNum>
      <ParticipantsText>{` 명이 이 리서치에 참여했어요!`}</ParticipantsText>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

const Icon__Container = styled.View`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.color.blue.pastel};
  margin-right: 8px;
  border-radius: 100px;
`;

const ParticipantsNum = styled(H1)`
  font-weight: bold;
`;

const ParticipantsText = styled(H4)``;
