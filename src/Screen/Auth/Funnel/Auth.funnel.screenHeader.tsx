import React from "react";
import styled from "styled-components/native";
import { BackButtonAndFunctionScreenHeader } from "src/Component/View";
import shallow from "zustand/shallow";
import { useAuthFunnelScreenStore } from "src/Zustand";
import { BodyText } from "src/StyledComponents/Text";

export function AuthFunnelScreenHeader() {
  const { step, goPreviousStep, setShowBlockExitModal } =
    useAuthFunnelScreenStore(
      state => ({
        step: state.step,
        goPreviousStep: state.goPreviousStep,
        setShowBlockExitModal: state.setShowBlockExitModal,
      }),
      shallow,
    );

  return (
    <BackButtonAndFunctionScreenHeader
      onPressBackIcon={
        step === 0
          ? () => {
              setShowBlockExitModal(true);
            }
          : goPreviousStep
      }
      rightComponents={
        <SkipText
          onPress={() => {
            setShowBlockExitModal(true);
          }}>
          SKIP
        </SkipText>
      }
    />
  );
}

const SkipText = styled(BodyText)`
  color: ${({ theme }) => theme.color.grey.main};
`;
