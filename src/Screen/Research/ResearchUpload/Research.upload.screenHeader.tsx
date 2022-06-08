import React from "react";
import {
  TitleAndCloseIconScreenHeader,
  StepScreenHeader,
} from "src/Component/View";
import shallow from "zustand/shallow";
import { useResearchUploadStore } from "src/Zustand";

export function ResearchUploadScreenHeader() {
  const { step, goPreviousStep, setBlockExitModalVisible } =
    useResearchUploadStore(
      state => ({
        step: state.step,
        goPreviousStep: state.goPreviousStep,
        setBlockExitModalVisible: state.setBlockExitModalVisible,
      }),
      shallow,
    );

  switch (step) {
    case 0:
      return (
        <TitleAndCloseIconScreenHeader
          title="리서치 작성"
          onPressClose={() => {
            setBlockExitModalVisible(true);
          }}
        />
      );
    default:
      return (
        <StepScreenHeader
          title="리서치 작성"
          onPressBack={goPreviousStep}
          onPressClose={() => {
            setBlockExitModalVisible(true);
          }}
        />
      );
  }
}
