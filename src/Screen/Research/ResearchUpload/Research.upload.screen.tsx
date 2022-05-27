import React from "react";
import styled from "styled-components/native";
import { ResearchUploadTitleContentScreen } from "./TitleContent/Research.upload.titleContent.screen";
import { ResearchUploadPurposeTargetScreen } from "./PurposeTarget/Research.upload.purposeTarget.screen";
import { ResearchUploadGiftCreditScreen } from "./GiftCredit/Research.upload.giftCredit.screen";
import { ResearchUploadProgressBar } from "./Research.upload.progressBar";
import { ResearchUploadProgressButton } from "./Research.upload.progressButton";
import { WhiteBackgroundScrollView } from "@Component/ScrollView";
import { useResearchUploadStore } from "src/Zustand";

/**
 * 리서치 작성 페이지 props
 * @author 현웅
 */
export type ResearchUploadScreenProps = {};

/**
 * 리서치 작성 페이지 컨테이너
 * pages 리스트에 스크린을 추가하면 해당 순서대로 작성 페이지를 보여줍니다.
 * @author 원제
 * @modify 현웅
 */
export function ResearchUploadScreen({ navigation }: any) {
  const step = useResearchUploadStore(state => state.step);

  const pages = [
    <ResearchUploadGiftCreditScreen />,
    <ResearchUploadTitleContentScreen />,
    <ResearchUploadPurposeTargetScreen />,
  ];

  return (
    <Container>
      <ResearchUploadProgressBar />
      <WhiteBackgroundScrollView>{pages[step]}</WhiteBackgroundScrollView>
      <ResearchUploadProgressButton />
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  flex: 1;
  //* ResearchUploadProgressBar height과 같은 값으로 유지해야 합니다.
  padding-top: 10px;
  //* ResearchUploadProgressButton의 height과 같은 값으로 유지해야 합니다.
  padding-bottom: 60px;
  background-color: white;
`;
