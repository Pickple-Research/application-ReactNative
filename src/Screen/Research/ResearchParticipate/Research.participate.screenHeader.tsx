import React from "react";
import { BackButtonScreenHeader } from "src/Component/View";
import { useResearchUploadScreenStore } from "src/Zustand";

/**
 * 리서치 참여 페이지 스크린 헤더
 */
export function ResearchParticipateScreenHeader() {
  const setBlockExitModalVisible = useResearchUploadScreenStore(
    state => state.setBlockExitModalVisible,
  );

  return (
    <BackButtonScreenHeader
      onPressBackIcon={() => {
        setBlockExitModalVisible(true);
      }}
    />
  );
}
