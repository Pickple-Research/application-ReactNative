import React from "react";
import { StyleSheet } from "react-native";
import { ProfileMainHeader } from "./Profile.main.header";
import { ProfileMainUserInfo } from "./Profile.main.userInfo";
import { ProfileMainActivity } from "./Profile.main.activity";
import { ProfileMainCredit } from "./Profile.main.credit";
import { ProfileMainFollow } from "./Profile.main.follow";
import { ProfileMainInterest } from "./Profile.main.interest";
import { ProfileMainFunction } from "./Profile.main.function";
import { ProfileMainEvent } from "./Profile.main.event";
import { ProfileMainAbout } from "./Profile.main.about";
import { WhiteBackgroundScrollView } from "@Component/ScrollView";
import { theme } from "@Theme/index";

/**
 * 마이페이지 랜딩 페이지
 * @author 현웅
 */
export type ProfileMainScreenProps = {};

/**
 * 프로필 메인 페이지
 * @author 현웅
 */
export function ProfileMainScreen() {
  return (
    <WhiteBackgroundScrollView>
      <ProfileMainHeader />
      <ProfileMainUserInfo />
      <ProfileMainActivity />
      <ProfileMainCredit />
      <ProfileMainFollow />
      <ProfileMainInterest />
      <ProfileMainFunction />
      <ProfileMainEvent />
      <ProfileMainAbout />
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
