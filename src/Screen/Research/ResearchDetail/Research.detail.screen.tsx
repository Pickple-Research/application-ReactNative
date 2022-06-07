import React from "react";
import styled from "styled-components/native";
import { ResearchDetailInfo } from "./Research.detail.info";
import { ResearchDetailCondition } from "./Research.detail.condition";
import { ResearchDetailParticipant } from "./Research.detail.participant";
import { ResearchDetailContent } from "./Research.detail.content";
import { ResearchDetailGift } from "./Research.detail.gift";
import { ResearchDetailBottomButton } from "./Research.detail.bottomButton";
import { ResearchPullupModal } from "src/Modal";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";

export type ResearchDetailScreenProps = { researchId: string };

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
      <ResearchDetailBottomButton />
      <ResearchPullupModal />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  position: relative;
  flex: 1;
  //* ResearchDetailBottomTab의 height과 같은 값으로 유지해야 합니다.
  padding-bottom: 60px;
`;

const WebViewContainer = styled.View`
  flex: 1;
  background-color: black;
`;
