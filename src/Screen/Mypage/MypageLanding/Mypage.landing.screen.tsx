import React, { useEffect, useRef } from "react";
import { BackHandler, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackProps } from "src/Navigator";
import { MypageLandingHeader } from "./Mypage.landing.header";
import { MypageLandingProfile } from "./Mypage.landing.profile";
import { MypageLandingActivity } from "./Mypage.landing.activity";
import { MypageLandingCredit } from "./Mypage.landing.credit";
import { MypageLandingFollow } from "./Mypage.landing.follow";
import { MypageLandingFunction } from "./Mypage.landing.function";
import { MypageLandingEvent } from "./Mypage.landing.event";
import { MypageLandingAbout } from "./Mypage.landing.about";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import { themeColors } from "src/Theme";
import { showBlackToast } from "src/Util";

/**
 * 마이페이지 랜딩 페이지
 * @author 현웅
 */
export type MypageLandingScreenProps = {};

/**
 * 마이페이지 랜딩 페이지
 * @author 현웅
 */
export function MypageLandingScreen({
  route,
  navigation,
}: NativeStackScreenProps<AppStackProps, "LandingBottomTabNavigator">) {
  const readyToExit = useRef(false);

  /**
   * 뒤로 가기 버튼을 눌렀을 때,
   * 1.5초 이내에 다시 뒤로 가기 버튼을 누르면 앱을 종료합니다.
   * @author 현웅
   */
  function handleBackButton() {
    if (readyToExit.current) {
      BackHandler.exitApp();
      return true;
    }
    showBlackToast({
      text1: "뒤로 가기 버튼을 한번 더 누르면 앱을 종료합니다.",
      visibilityTime: 1500,
    });
    readyToExit.current = true;
    setTimeout(() => {
      readyToExit.current = false;
    }, 1500);
    return true;
  }

  function attachBackButtonHandler() {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
  }

  function detachBackButtonHandler() {
    BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  }

  useEffect(() => {
    const attach = navigation.addListener("focus", attachBackButtonHandler);
    const detach = navigation.addListener("blur", detachBackButtonHandler);

    return () => {
      attach();
      detach();
    };
  }, []);

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
    borderBottomColor: themeColors().purple.mild,
  },
});
