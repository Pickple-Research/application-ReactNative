import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackProps } from "src/Navigator";
import { ResearchDetailInfo } from "./Research.detail.info";
import { ResearchDetailCondition } from "./Research.detail.condition";
import { ResearchDetailParticipant } from "./Research.detail.participant";
import { ResearchDetailContent } from "./Research.detail.content";
import { ResearchDetailGift } from "./Research.detail.gift";
import { ResearchDetailComments } from "./Research.detail.comments";
import { ResearchDetailBottomButton } from "./Research.detail.bottomButton";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import {
  ResearchDetailDeleteModal,
  ResearchDetailPullupModal,
  ResearchDetailReportModal,
} from "src/Modal";
import shallow from "zustand/shallow";
import { useResearchDetailScreenStore } from "src/Zustand";
import { ResearchSchema } from "src/Schema";

export type ResearchDetailScreenProps = { research: ResearchSchema };

/**
 * 리서치 상세정보 페이지
 * @author 현웅
 */
export function ResearchDetailScreen({
  route,
}: NativeStackScreenProps<AppStackProps, "ResearchDetailScreen">) {
  const { setResearchDetail, getResearchDetailComments, clearState } =
    useResearchDetailScreenStore(
      state => ({
        setResearchDetail: state.setResearchDetail,
        getResearchDetailComments: state.getResearchDetailComments,
        clearState: state.clearState,
      }),
      shallow,
    );

  async function loadResearchDetailComments() {
    await getResearchDetailComments(route.params.research._id);
  }

  useEffect(() => {
    setResearchDetail(route.params.research);
    loadResearchDetailComments();
    return () => {
      clearState();
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
        <ResearchDetailComments />
      </WhiteBackgroundScrollView>
      <ResearchDetailBottomButton />
      <ResearchDetailDeleteModal />
      <ResearchDetailPullupModal />
      <ResearchDetailReportModal />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  position: relative;
  flex: 1;
  //* ResearchDetailBottomTab의 height과 같은 값으로 유지해야 합니다.
  padding-bottom: 60px;
`;

/**
 * 리서치 상세페이지에서만 쓰이는 스타일입니다.
 * @author 현웅
 */
export const researchDetailScreenStyles = StyleSheet.create({
  /** 섹션 구분선 */
  boundary: {
    borderBottomWidth: 5,
    //TODO: #DESIGN-SYSTEM
    borderBottomColor: "#f5f5f5",
  },
});
