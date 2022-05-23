import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { HomeLandingResearch } from "./Home.landing.research";
import { HomeLandingHotVote } from "./Home.landing.hotVote";
import { HomeLandingRecentVote } from "./Home.landing.recentVote";
import { HomeLandingPartner } from "./Home.landing.partner";
import { WhiteBackgroundScrollView } from "@Component/ScrollView";
import { theme } from "src/Theme";

export type HomeLandingScreenProps = {};

export function HomeLandingScreen() {
  return (
    <SafeAreaView>
      <WhiteBackgroundScrollView>
        {/* 헤더의 경우 기획 방안에 따라 Landing.bottomTab.navigator 에서 관리할 수 있음*/}
        <HomeLandingResearch />
        <HomeLandingHotVote />
        <HomeLandingRecentVote />
        <HomeLandingPartner />
      </WhiteBackgroundScrollView>
    </SafeAreaView>
  );
}

export const screenStyles = StyleSheet.create({
  border: {
    borderBottomWidth: 8,
    borderBottomColor: theme.color.background_purple,
  },
});
