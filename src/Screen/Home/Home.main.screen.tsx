import React from "react";
import { StyleSheet } from "react-native";
import { HomeMainHeader } from "./Home.main.header";
import { HomeMainResearch } from "./Home.main.research";
import { HomeMainHotVote } from "./Home.main.hotVote";
import { HomeMainRecentVote } from "./Home.main.recentVote";
import { HomeMainPartner } from "./Home.main.partner";
import { WhiteBackgroundScrollView } from "@Component/React";
import { theme } from "@Theme/index";

export type HomeMainScreenProps = {};

export function HomeMainScreen() {
  return (
    <WhiteBackgroundScrollView>
      {/* 헤더의 경우 기획 방안에 따라 Main.bottomTab.navigator 에서 관리할 수 있음*/}
      <HomeMainHeader />
      <HomeMainResearch />
      <HomeMainHotVote />
      <HomeMainRecentVote />
      <HomeMainPartner />
    </WhiteBackgroundScrollView>
  );
}

export const screenStyles = StyleSheet.create({
  padding: { paddingHorizontal: 20 },

  header__margin: {
    marginBottom: 20,
  },

  border: {
    borderBottomWidth: 8,
    borderBottomColor: theme.color.background_purple,
  },
});
