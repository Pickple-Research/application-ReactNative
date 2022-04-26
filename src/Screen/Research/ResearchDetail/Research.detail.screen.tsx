import React from "react";
import styled from "styled-components/native";
import { ResearchDetailInfo } from "./Research.detail.info";
import { ResearchDetailCondition } from "./Research.detail.condition";
import { ResearchDetailParticipant } from "./Research.detail.participant";
import { ResearchDetailContent } from "./Research.detail.content";
import { ResearchDetailGift } from "./Research.detail.gift";
import { ResearchDetailBottomTab } from "./Research.detail.bottomTab";
import { WhiteBackgroundScrollView } from "@Component/ScrollView";

export type ResearchDetailScreenProps = {};

/**
 * 리서치 상세정보 페이지
 * @author 현웅
 */
export function ResearchDetailScreen() {
  return (
    <Container>
      <WhiteBackgroundScrollView>
        <ResearchDetailInfo />
        <ResearchDetailCondition />
        <ResearchDetailParticipant />
        <ResearchDetailContent />
        <ResearchDetailGift />
      </WhiteBackgroundScrollView>
      <ResearchDetailBottomTab />
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  //* ResearchDetailBottomTab 높이와 맞춰야 함
  padding-bottom: 60px;
`;
