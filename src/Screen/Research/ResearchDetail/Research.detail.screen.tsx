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
  const { setResearchDetail, clearState } = useResearchDetailScreenStore(
    state => ({
      setResearchDetail: state.setResearchDetail,
      clearState: state.clearState,
    }),
    shallow,
  );

  useEffect(() => {
    setResearchDetail(route.params.research);
    return () => {
      clearState();
    };
  }, []);

  return (
    <Container>
      <WhiteBackgroundScrollView>
        <ResearchDetailInfo />
        <Image
          source={{
            uri: "https://pickple-research.s3.ap-northeast-2.amazonaws.com/image1",
          }}
        />
        <ResearchDetailCondition />
        <ResearchDetailParticipant />
        <ResearchDetailContent />
        <ResearchDetailGift />
      </WhiteBackgroundScrollView>
      <ResearchDetailBottomButton />
      <ResearchDetailDeleteModal />
      <ResearchDetailPullupModal />
      <ResearchDetailReportModal />
    </Container>
  );
}

const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

const Container = styled.SafeAreaView`
  position: relative;
  flex: 1;
  //* ResearchDetailBottomTab의 height과 같은 값으로 유지해야 합니다.
  padding-bottom: 60px;
`;
