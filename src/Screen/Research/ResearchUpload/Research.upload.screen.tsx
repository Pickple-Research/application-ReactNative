import React, { createContext, useState } from "react";
import { ScrollView, View } from "react-native";
import { Bar } from "react-native-progress";
import { ResearchUploadTitleContentScreen } from "./TitleContent/Research.upload.titleContent.screen";
import { ResearchUploadPurposeTargetScreen } from "./PurposeTarget/Research.upload.purposeTarget.screen";
import { ResearchUploadGiftCreditScreen } from "./GiftCredit/Research.upload.giftCredit.screen";
import { ResearchUploadProgressBar } from "./Research.upload.progressBar";
import { ResearchUploadProgressButton } from "./Research.upload.progressButton";
import { useResearchUploadStore } from "src/Zustand";
import { vh, vw } from "@Theme/size.theme";

const pages = [
  <ResearchUploadTitleContentScreen />,
  <ResearchUploadPurposeTargetScreen />,
  <ResearchUploadGiftCreditScreen />,
];

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

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* 대충 헤더 위치 */}
      <ResearchUploadProgressBar />
      <ScrollView>{pages[step]}</ScrollView>
      <ResearchUploadProgressButton />
    </View>
  );
}
