import React from "react";
import { StyleSheet } from "react-native";
import { ProfileLandingHeader } from "./Profile.landing.header";
import { ProfileLandingUserInfo } from "./Profile.landing.userInfo";
import { ProfileLandingActivity } from "./Profile.landing.activity";
import { ProfileLandingCredit } from "./Profile.landing.credit";
import { ProfileLandingFollow } from "./Profile.landing.follow";
import { ProfileLandingInterest } from "./Profile.landing.interest";
import { ProfileLandingFunction } from "./Profile.landing.function";
import { ProfileLandingEvent } from "./Profile.landing.event";
import { ProfileLandingAbout } from "./Profile.landing.about";
import { WhiteBackgroundScrollView } from "@Component/ScrollView";
import { theme } from "src/Theme";

/**
 * 마이페이지 랜딩 페이지
 * @author 현웅
 */
export type ProfileLandingScreenProps = {};

/**
 * 프로필 메인 페이지
 * @author 현웅
 */
export function ProfileLandingScreen() {
  return (
    <WhiteBackgroundScrollView>
      <ProfileLandingHeader />
      <ProfileLandingUserInfo />
      <ProfileLandingActivity />
      <ProfileLandingCredit />
      <ProfileLandingFollow />
      <ProfileLandingInterest />
      <ProfileLandingFunction />
      <ProfileLandingEvent />
      <ProfileLandingAbout />
    </WhiteBackgroundScrollView>
  );
}

export const screenStyles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
  },

  header__margin: {
    marginBottom: 20,
  },

  border: {
    borderBottomWidth: 8,
    borderBottomColor: theme.color.background_purple,
  },
});
