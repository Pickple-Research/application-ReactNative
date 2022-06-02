import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import {
  TitleAndCloseIconScreenHeader,
  StepScreenHeader,
} from "src/Component/View";
import shallow from "zustand/shallow";
import { useResearchUploadStore } from "src/Zustand";

export function ResearchUploadScreenHeader() {
  const navigation = useNavigation<NavigationProp<AppStackProps>>();

  const { step, goPreviousStep, clearInputs } = useResearchUploadStore(
    state => ({
      step: state.step,
      goPreviousStep: state.goPreviousStep,
      clearInputs: state.clearInputs,
    }),
    shallow,
  );

  switch (step) {
    case 0:
      return <TitleAndCloseIconScreenHeader title="리서치 작성" />;
    default:
      return (
        <StepScreenHeader
          title="리서치 작성"
          onPressBack={goPreviousStep}
          onPressClose={() => {
            clearInputs();
            navigation.goBack();
          }}
        />
      );
  }
}
