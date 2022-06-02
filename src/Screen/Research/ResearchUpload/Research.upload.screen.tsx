import React from "react";
import styled from "styled-components/native";
import { ResearchUploadTitleContentScreen } from "./TitleContent/Research.upload.titleContent.screen";
import { ResearchUploadPurposeTargetScreen } from "./PurposeTarget/Research.upload.purposeTarget.screen";
import { ResearchUploadGiftCreditScreen } from "./GiftCredit/Research.upload.giftCredit.screen";
import { ResearchUploadScreeningScreen } from "./Screening/Research.upload.screening.screen";
import { ResearchUploadProgressBar } from "./Research.upload.progressBar";
import { ResearchUploadButtomButton } from "./Research.upload.bottomButton";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import { useResearchUploadStore } from "src/Zustand";

/**
 * 리서치 작성 페이지 props
 * @author 현웅
 */
export type ResearchUploadScreenProps = {};

/**
 * 리서치 업로드 페이지입니다.
 * pages 리스트 순서대로 작성 페이지를 보여줍니다.
 * @author 원제
 * @modify 현웅
 */
export function ResearchUploadScreen({ navigation }: any) {
  const step = useResearchUploadStore(state => state.step);

  const pages = [
    <ResearchUploadTitleContentScreen />,
    <ResearchUploadPurposeTargetScreen />,
    <ResearchUploadGiftCreditScreen />,
    <ResearchUploadScreeningScreen />,
  ];

  return (
    <Container>
      <ResearchUploadProgressBar />
      <WhiteBackgroundScrollView>{pages[step]}</WhiteBackgroundScrollView>
      <ResearchUploadButtomButton />
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  flex: 1;
  padding-top: 6px;
  //* ResearchUploadBottomButton의 height과 같은 값으로 유지해야 합니다.
  padding-bottom: 60px;
  background-color: white;
`;
