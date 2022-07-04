import { WhiteBackgroundScrollView } from "@Component/ScrollView";
import { useAuthFunnelScreenStore } from "@Zustand/Auth/auth.funnel.zustand";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { AuthFunnelBottomButton } from "./Auth.funnel.bottombutton";
import { AuthFunnelProgressBar } from "./Auth.funnel.progressBar";

import { AuthFunnelJobScreen } from "./Job/Auth.funnel.job.screen";
import { AuthFunnelOccupationScreen } from "./Occupation/Auth.funnel.occupation.screen";
import { AuthFunnelEducationScreen } from "./Education/Auth.funnel.education.screen";
import { AuthFunnelResidenceScreen } from "./Residence/Auth.funnel.residence.screen";
import { AuthFunnelInterestsScreen } from "./Interests/Auth.funnel.interests.screen";
import { AuthFunnelInfluxScreen } from "./Influx/Auth.funnel.influx.screen";
import { AuthFunnelScreenHeader } from "./Auth.funnel.screenHeader";

export type AuthFunnelScreenProps = {};

export function AuthFunnelScreen() {
  const { step } = useAuthFunnelScreenStore(state => ({
    step: state.step,
  }));

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
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  flex: 1;
  padding-top: 6px;
  //* AuthFunnelBottomButton의 height과 같은 값으로 유지해야 합니다.
  padding-bottom: 60px;
  background-color: white;
`;
