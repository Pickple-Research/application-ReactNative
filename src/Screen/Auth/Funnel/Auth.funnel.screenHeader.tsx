import {
  StepScreenHeader,
  TitleAndCloseIconScreenHeader,
} from "@Component/View";
import { useAuthFunnelScreenStore } from "@Zustand/Auth/auth.funnel.zustand";
import React from "react";
import shallow from "zustand/shallow";

export function AuthFunnelScreenHeader() {
  const { step, goPreviousStep } = useAuthFunnelScreenStore(
    state => ({
      step: state.step,
      goPreviousStep: state.goPreviousStep,
    }),
    shallow,
  );

  switch (step) {
    case 0:
      return (
        <TitleAndCloseIconScreenHeader
          title="리서치 작성"
          onPressClose={() => {
            // setBlockExitModalVisible(true);
          }}
        />
      );
    default:
      return (
        <StepScreenHeader
          title="리서치 작성"
          onPressBack={goPreviousStep}
          onPressClose={() => {
            // setBlockExitModalVisible(true);
          }}
        />
      );
  }
}
