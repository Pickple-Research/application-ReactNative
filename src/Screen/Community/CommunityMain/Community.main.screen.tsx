import React from "react";
import { StyleSheet } from "react-native";
import { CommunityMainSearch } from "./Community.main.search";
import { CommunityMainInterest } from "./Community.main.interest";
import { CommunityMainHot } from "./Community.main.hot";
import { CommunityMainPopular } from "./Community.main.popular";
import { CommunityMainRecent } from "./Community.main.recent";
import { WhiteBackgroundScrollView } from "@Component/React";
import { theme } from "@Theme/index";

export type CommunityMainScreenProps = {};

/**
 * 커뮤니티 랜딩 페이지
 * @author 현웅
 */
export function CommunityMainScreen() {
  return (
    <WhiteBackgroundScrollView>
      <CommunityMainSearch />
      <CommunityMainInterest />
      <CommunityMainHot />
      <CommunityMainPopular />
      <CommunityMainRecent />
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
    color: theme.color.text_purple,
    fontSize: 13,
  },
});
