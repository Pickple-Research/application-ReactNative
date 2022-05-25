import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { ResearchUploadTitleContentScreen } from "./TitleContent/Research.upload.titleContent.screen";
import { ResearchUploadPurposeTargetScreen } from "./PurposeTarget/Research.upload.purposeTarget.screen";
import { ResearchUploadGiftCreditScreen } from "./GiftCredit/Research.upload.giftCredit.screen";
import { ResearchUploadProgressBar } from "./Research.upload.progressBar";
import { ResearchUploadProgressButton } from "./Research.upload.progressButton";
import { useResearchUploadStore } from "src/Zustand";

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

/**
 * 리서치 업로드 페이지에서만 사용되는 스타일들입니다.
 * @author 현웅
 */
export const uploadScreenStyles = StyleSheet.create({
  /**
   * 리서치 업로드 페이지의 섹션 헤더에만 적용되는 하단 마진입니다.
   * @author 현웅
   */
  sectionHeaderBottomMargin: { marginBottom: 10 },
});
