import React, { useEffect, useRef } from "react";
import { BackHandler, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { LandingBottomTabProps } from "src/Navigator";
import { HomeLandingResearch } from "./Home.landing.research";
import { HomeLandingHotVote } from "./Home.landing.hotVote";
import { HomeLandingRecentVote } from "./Home.landing.recentVote";
import { HomeLandingPartner } from "./Home.landing.partner";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import { themeColors } from "src/Theme";
import { showBlackToast } from "src/Util";

export type HomeLandingScreenProps = {};

export function HomeLandingScreen({
  navigation,
}: BottomTabScreenProps<LandingBottomTabProps, "HomeLandingScreen">) {
  const readyToExit = useRef(false);

  /**
   * 뒤로 가기 버튼을 눌렀을 때,
   * 1.5초 이내에 다시 뒤로 가기 버튼을 누르면 앱을 종료합니다.
   * #EVENT-HANDLER #BACKBUTTON #BACKBUTTON-HANDLER
   * ! 이유는 잘 모르지만, useEffect 에서 직접 BackHandler.addEventListener 를 사용하면 작동이 안됩니다.
   * ! readyToExit 도 Ref 대신 state 를 사용하면, state 를 변화시키지 않습니다.
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
    <Container>
      <WhiteBackgroundScrollView>
        <HomeLandingResearch />
        <HomeLandingHotVote />
        <HomeLandingRecentVote />
        <HomeLandingPartner />
      </WhiteBackgroundScrollView>
    </Container>
  );
}

const Container = styled.SafeAreaView``;

export const screenStyles = StyleSheet.create({
  boundary: {
    borderBottomWidth: 8,
    borderBottomColor: themeColors().purple.mild,
  },
});
