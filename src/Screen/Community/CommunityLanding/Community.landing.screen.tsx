import React from "react";
import { StyleSheet } from "react-native";
import { CommunityLandingSearch } from "./Community.landing.search";
import { CommunityLandingInterest } from "./Community.landing.interest";
import { CommunityLandingHotVote } from "./Community.landing.hotVote";
import { CommunityLandingPopular } from "./Community.landing.popular";
import { CommunityLandingRecent } from "./Community.landing.recent";
import { WhiteBackgroundScrollView } from "@Component/ScrollView";
import { theme } from "src/Theme";

export type CommunityLandingScreenProps = {};

/**
 * 커뮤니티 랜딩 페이지
 * @author 현웅
 */
export function CommunityLandingScreen() {
  return (
    <WhiteBackgroundScrollView>
      <CommunityLandingSearch />
      <CommunityLandingInterest />
      <CommunityLandingHotVote />
      <CommunityLandingPopular />
      <CommunityLandingRecent />
    </WhiteBackgroundScrollView>
  );
}

export const screenStyles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
  },

  // 각 섹션 헤더 View 스타일
  headerContainer: {
    marginBottom: 20,
  },

  // 헤더 타이틀 텍스트 스타일
  headerTitleText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },

  headerMoreText: {
    color: theme.color.purple.text,
    fontSize: 13,
  },
});
