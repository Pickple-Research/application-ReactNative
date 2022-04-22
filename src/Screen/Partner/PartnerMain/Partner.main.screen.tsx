import React from "react";
import { StyleSheet } from "react-native";
import { PartnerMainSearch } from "./Partner.main.search";
import { PartnerMainBanner } from "./Partner.main.banner";
import { PartnerMainFollow } from "./Partner.main.follow";
import { PartnerMainCategory } from "./Partner.main.category";
import { PartnerMainAd } from "./Partner.main.ad";
import { PartnerMainRecent } from "./Partner.main.recent";
import { WhiteBackgroundScrollView } from "@Component/ScrollView";

export type PartnerMainScreenProps = {};

/**
 * 파트너 랜딩 페이지
 * @author 현웅
 */
export function PartnerMainScreen() {
  return (
    <WhiteBackgroundScrollView>
      <PartnerMainSearch />
      <PartnerMainBanner />
      <PartnerMainFollow />
      <PartnerMainCategory />
      <PartnerMainAd />
      <PartnerMainRecent />
    </WhiteBackgroundScrollView>
  );
}

/**
 * ParterMainScreen에서 공통적으로 사용되는 스타일들을 정의합니다.
 * @author 현웅
 */
export const screenStyles = StyleSheet.create({});
