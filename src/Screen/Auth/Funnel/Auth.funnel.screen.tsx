import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import styled from "styled-components/native";
import { AuthFunnelBottomButton } from "./Auth.funnel.bottomButton";
import { AuthFunnelProgressBar } from "./Auth.funnel.progressBar";
import { AuthFunnelJobScreen } from "./Job/Auth.funnel.job.screen";
import { AuthFunnelOccupationScreen } from "./Occupation/Auth.funnel.occupation.screen";
import { AuthFunnelEducationScreen } from "./Education/Auth.funnel.education.screen";
import { AuthFunnelResidenceScreen } from "./Residence/Auth.funnel.residence.screen";
import { AuthFunnelInterestsScreen } from "./Interests/Auth.funnel.interests.screen";
import { AuthFunnelInfluxScreen } from "./Influx/Auth.funnel.influx.screen";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import { AuthFunnelBlockExitModal, AuthFunnelCompleteModal } from "src/Modal";
import shallow from "zustand/shallow";
import { useAuthFunnelScreenStore } from "src/Zustand";

export type AuthFunnelScreenProps = {};

export function AuthFunnelScreen() {
  const { step, handleBackPress, clearState } = useAuthFunnelScreenStore(
    state => ({
      step: state.step,
      handleBackPress: state.handleBackPress,
      clearState: state.clearState,
    }),
    shallow,
  );

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
      clearState();
    };
  }, []);

  const pages = [
    <AuthFunnelJobScreen />,
    <AuthFunnelOccupationScreen />,
    <AuthFunnelEducationScreen />,
    <AuthFunnelResidenceScreen />,
    <AuthFunnelInterestsScreen />,
    <AuthFunnelInfluxScreen />,
  ];

  return (
    <Container>
      <AuthFunnelProgressBar />
      <WhiteBackgroundScrollView>{pages[step]}</WhiteBackgroundScrollView>
      <AuthFunnelBottomButton />
      <AuthFunnelBlockExitModal />
      <AuthFunnelCompleteModal />
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  flex: 1;
  padding-top: 6px;
  //* AuthFunnelBottomButton의 height과 같은 값으로 유지해야 합니다.
  padding-bottom: 60px;
  background-color: ${({ theme }) => theme.color.grey.white};
`;
