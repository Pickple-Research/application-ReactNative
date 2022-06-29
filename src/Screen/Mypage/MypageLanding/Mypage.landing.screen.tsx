import React from "react";
import { StyleSheet } from "react-native";
import { MypageLandingHeader } from "./Mypage.landing.header";
import { MypageLandingProfile } from "./Mypage.landing.profile";
import { MypageLandingActivity } from "./Mypage.landing.activity";
import { MypageLandingCredit } from "./Mypage.landing.credit";
import { MypageLandingFollow } from "./Mypage.landing.follow";
import { MypageLandingFunction } from "./Mypage.landing.function";
import { MypageLandingEvent } from "./Mypage.landing.event";
import { MypageLandingAbout } from "./Mypage.landing.about";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import { theme } from "src/Theme";

/**
 * 마이페이지 랜딩 페이지
 * @author 현웅
 */
export type MypageLandingScreenProps = {};

/**
 * 마이페이지 랜딩 페이지
 * @author 현웅
 */
export function MypageLandingScreen() {
  return (
    <WhiteBackgroundScrollView>
      <MypageLandingHeader />
      <MypageLandingProfile />
      <MypageLandingActivity />
      <MypageLandingCredit />
      <MypageLandingFollow />
      <MypageLandingFunction />
      <MypageLandingEvent />
      <MypageLandingAbout />
    </WhiteBackgroundScrollView>
  );
}

/**
 * 마이페이지 랜딩 페이지에서만 사용되는 스타일
 * @author 현웅
 */
export const mypageLandingScreenStyles = StyleSheet.create({
  /** 섹션 구분선 */
  boundary: {
    borderBottomWidth: 8,
    borderBottomColor: theme.color.purple.mild,
  },
});
