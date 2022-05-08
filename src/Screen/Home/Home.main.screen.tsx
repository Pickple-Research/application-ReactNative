import React from "react";
import { StyleSheet, SafeAreaView, Text, Button } from "react-native";
import { HomeMainResearch } from "./Home.main.research";
import { HomeMainHotVote } from "./Home.main.hotVote";
import { HomeMainRecentVote } from "./Home.main.recentVote";
import { HomeMainPartner } from "./Home.main.partner";
import { WhiteBackgroundScrollView } from "@Component/ScrollView";
import { theme } from "@Theme/index";
import { useUserStore } from "@Zustand/index";

export type HomeMainScreenProps = {};

export function HomeMainScreen() {
  const test = useUserStore(state => state.test);
  const getUserInfo = useUserStore(state => state.getUserInfo);

  return (
    <SafeAreaView>
      <Text>{`--> ${test} <--`}</Text>
      <Button
        title="서버와 소통하기"
        onPress={() => {
          getUserInfo();
        }}
      />
      <WhiteBackgroundScrollView>
        {/* 헤더의 경우 기획 방안에 따라 Main.bottomTab.navigator 에서 관리할 수 있음*/}
        <HomeMainResearch />
        <HomeMainHotVote />
        <HomeMainRecentVote />
        <HomeMainPartner />
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
