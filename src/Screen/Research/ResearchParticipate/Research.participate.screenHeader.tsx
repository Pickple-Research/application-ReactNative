import React from "react";
import { BackButtonScreenHeader } from "src/Component/View";
import { useResearchParticipateScreenStore } from "src/Zustand";

/**
 * 리서치 참여 페이지 스크린 헤더
 */
export function ResearchParticipateScreenHeader() {
  const setBlockExitModalVisible = useResearchParticipateScreenStore(
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
