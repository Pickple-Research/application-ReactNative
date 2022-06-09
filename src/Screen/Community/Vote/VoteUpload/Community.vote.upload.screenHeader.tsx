import React from "react";
import { TitleAndCloseIconScreenHeader } from "src/Component/View";
import { useVoteUploadStore } from "src/Zustand";

/**
 * 투표 업로드 페이지 스크린 헤더입니다.
 * @author 현웅
 */
export function CommunityVoteUploadScreenHeader() {
  const setBlockExitModalVisible = useVoteUploadStore(
    state => state.setBlockExitModalVisible,
  );

  return (
    <TitleAndCloseIconScreenHeader
      title="투표 올리기"
      onPressClose={() => {
        setBlockExitModalVisible(true);
      }}
    />
  );
}
