import React from "react";
import styled from "styled-components/native";
import { researchDetailScreenStyles } from "./Research.detail.screen";
import { useResearchDetailScreenStore } from "src/Zustand";
import { H1, H4 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";

/**
 * 리서치 상세정보 페이지 참여 현황 섹션
 * @author 현웅
 */
export function ResearchDetailParticipant() {
  const researchDetail = useResearchDetailScreenStore(
    state => state.researchDetail,
  );

  return (
    <Container
      style={[
        globalStyles.screen__horizontalPadding,
        researchDetailScreenStyles.boundary,
      ]}>
      <Icon__Container />
      <ParticipantsNum>{researchDetail.participantsNum}</ParticipantsNum>
      <ParticipantsText>{` 명이 이 리서치에 참여했어요!`}</ParticipantsText>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 24px;
  margin-bottom: 16px;
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
