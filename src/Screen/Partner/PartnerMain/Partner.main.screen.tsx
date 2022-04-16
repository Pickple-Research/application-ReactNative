import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { PartnerMainSearch } from "./Partner.main.search";
import { PartnerMainBanner } from "./Partner.main.banner";
import { PartnerMainFollow } from "./Partner.main.follow";
import { PartnerMainCategory } from "./Partner.main.category";
import { PartnerMainAd } from "./Partner.main.ad";
import { PartnerMainRecent } from "./Partner.main.recent";
import { WhiteBackgroundScrollView } from "@Component/StyledComponents";
import { theme } from "@Theme/index";

export type PartnerMainScreenProps = {};

/**
 * 파트너 랜딩 페이지
 * @author 현웅
 */
export function PartnerMainScreen({ navigation }: any) {
  return (
    <WhiteBackgroundScrollView
      contentContainerStyle={styles.contentContainer}
      nestedScrollEnabled>
      <PartnerMainSearch />
      <PartnerMainBanner />
      <PartnerMainFollow />
      <PartnerMainCategory />
      <PartnerMainAd />
      <PartnerMainRecent />
    </WhiteBackgroundScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 25,
    paddingBottom: 70,
  },
});

/**
 * ParterMainScreen에서 공통적으로 사용되는 스타일들을 정의합니다.
 * @author 현웅
 */
export const screenStyles = StyleSheet.create({
  // 각 섹션 헤더 View 패딩
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

  // 헤더 MORE 텍스트 스타일
  headerMoreText: {
    color: theme.color.main_skyblue,
  },
});
