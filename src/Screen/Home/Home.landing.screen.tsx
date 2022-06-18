import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { HomeLandingResearch } from "./Home.landing.research";
import { HomeLandingHotVote } from "./Home.landing.hotVote";
import { HomeLandingRecentVote } from "./Home.landing.recentVote";
import { HomeLandingPartner } from "./Home.landing.partner";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import { theme } from "src/Theme";

export type HomeLandingScreenProps = { completeFillProfile?: boolean };

export function HomeLandingScreen() {
  return (
    <Container>
      <WhiteBackgroundScrollView>
        <HomeLandingResearch />
        <HomeLandingHotVote />
        <HomeLandingRecentVote />
        <HomeLandingPartner />
      </WhiteBackgroundScrollView>
    </Container>
  );
}

const Container = styled.SafeAreaView``;

export const screenStyles = StyleSheet.create({
  boundary: {
    borderBottomWidth: 8,
    borderBottomColor: theme.color.purple.mild,
  },
});
