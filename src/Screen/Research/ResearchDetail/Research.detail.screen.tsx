import React, { useEffect } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackProps } from "src/Navigator";
import { ResearchDetailInfo } from "./Research.detail.info";
import { ResearchDetailCondition } from "./Research.detail.condition";
import { ResearchDetailParticipant } from "./Research.detail.participant";
import { ResearchDetailContent } from "./Research.detail.content";
import { ResearchDetailGift } from "./Research.detail.gift";
import { ResearchDetailBottomButton } from "./Research.detail.bottomButton";
import { ResearchPullupModal } from "src/Modal";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import shallow from "zustand/shallow";
import { useResearchDetailStore } from "src/Zustand";
import { ResearchSchema } from "src/Schema";

export type ResearchDetailScreenProps = { research: ResearchSchema };

/**
 * 리서치 상세정보 페이지
 * @author 현웅
 */
export function ResearchDetailScreen({
  route,
}: NativeStackScreenProps<AppStackProps, "ResearchDetailScreen">) {
  const { setResearch, clearInfo } = useResearchDetailStore(
    state => ({
      setResearch: state.setResearch,
      clearInfo: state.clearInfo,
    }),
    shallow,
  );

  useEffect(() => {
    setResearch(route.params.research);
    return () => {
      clearInfo();
    };
  }, []);

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
