import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { PartnerMainSearch } from "./Partner.main.search";
import { PartnerMainBanner } from "./Partner.main.banner";
import { PartnerMainFollow } from "./Partner.main.follow";
import { PartnerMainCategory } from "./Partner.main.category";
import { PartnerMainAd } from "./Partner.main.ad";
import { PartnerMainRecent } from "./Partner.main.recent";

export type PartnerMainScreenProps = {};

export function PartnerMainScreen({ navigation }: any) {
  return (
    <ScrollView
      //? contentContainerStyle: ScrollView의 자식을 감싸는 Container 스타일을 정의합니다.
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      nestedScrollEnabled>
      <PartnerMainSearch />
      <PartnerMainBanner />
      <PartnerMainFollow />
      <PartnerMainCategory />
      <PartnerMainAd />
      <PartnerMainRecent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    paddingTop: 25,
    paddingBottom: 20,
  },
});

/**
 * ParterMainScreen에서 공통적으로 사용되는 스타일들을 정의합니다.
 * @author 현웅
 */
export const screenStyles = StyleSheet.create({
  view: {
    width: "100%",
    paddingHorizontal: 10,
    borderColor: "yellow",
  },
});
