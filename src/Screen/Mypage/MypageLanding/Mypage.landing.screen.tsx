import React from "react";
import { StyleSheet } from "react-native";
import { MypageLandingHeader } from "./Mypage.landing.header";
import { MypageLandingProfile } from "./Mypage.landing.profile";
import { MypageLandingActivity } from "./Mypage.landing.activity";
import { MypageLandingCredit } from "./Mypage.landing.credit";
import { MypageLandingFollow } from "./Mypage.landing.follow";
import { MypageLandingInterest } from "./Mypage.landing.interest";
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
 * 프로필 메인 페이지
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
      <MypageLandingInterest />
      <MypageLandingFunction />
      <MypageLandingEvent />
      <MypageLandingAbout />
    </WhiteBackgroundScrollView>
  );
}

export const screenStyles = StyleSheet.create({
  header__margin: {
    marginBottom: 20,
  },

  boundary: {
    borderBottomWidth: 8,
    borderBottomColor: theme.color.purple.mild,
  },
});
