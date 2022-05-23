import React from "react";
import { StyleSheet } from "react-native";
import { PartnerLandingSearch } from "./Partner.landing.search";
import { PartnerLandingBanner } from "./Partner.landing.banner";
import { PartnerLandingFollow } from "./Partner.landing.follow";
import { PartnerLandingCategory } from "./Partner.landing.category";
import { PartnerLandingAd } from "./Partner.landing.ad";
import { PartnerLandingRecent } from "./Partner.landing.recent";
import { WhiteBackgroundScrollView } from "@Component/ScrollView";

export type PartnerLandingScreenProps = {};

/**
 * 파트너 랜딩 페이지
 * @author 현웅
 */
export function PartnerLandingScreen() {
  return (
    <WhiteBackgroundScrollView>
      <PartnerLandingSearch />
      <PartnerLandingBanner />
      <PartnerLandingFollow />
      <PartnerLandingCategory />
      <PartnerLandingAd />
      <PartnerLandingRecent />
    </WhiteBackgroundScrollView>
  );
}

/**
 * ParterLandingScreen에서 공통적으로 사용되는 스타일들을 정의합니다.
 * @author 현웅
 */
export const screenStyles = StyleSheet.create({});
