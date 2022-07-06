import React, { useEffect, useState, useRef } from "react";
import { Animated, LayoutChangeEvent, BackHandler } from "react-native";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackProps } from "src/Navigator";
import { CommunityLandingRecommend } from "./Community.landing.recommend";
import { CommunityLandingVoteList } from "./Community.landing.voteList";
import { CreateIcon } from "src/Component/Icon";
import { showBlackToast } from "src/Util";

export type CommunityLandingScreenProps = {};

/**
 * 커뮤니티 랜딩 페이지. Collapsible Header 구현 방식은
 * Research.landing.screen.tsx 와 동일합니다.
 * @author 현웅
 */
export function CommunityLandingScreen({
  route,
  navigation,
}: NativeStackScreenProps<AppStackProps, "LandingBottomTabNavigator">) {
  const [recommendSectionHeight, setRecommendSectionHeight] =
    useState<number>(139);

  function onRecommendSectionLayout(event: LayoutChangeEvent) {
    setRecommendSectionHeight(event.nativeEvent.layout.height);
  }

  const scrollY = useRef(new Animated.Value(0));

  const onVoteListScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY.current } } }],
    { useNativeDriver: true },
  );

  const recommendSectionTranslateY = scrollY.current.interpolate({
    inputRange: [0, recommendSectionHeight],
    outputRange: [0, -recommendSectionHeight],
    extrapolate: "clamp",
  });

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
    <Container>
      <CommunityLandingVoteList
        recommendSectionHeight={recommendSectionHeight}
        onScroll={onVoteListScroll}
      />
      <CommunityLandingRecommend
        onLayout={onRecommendSectionLayout}
        translateY={recommendSectionTranslateY}
      />
      <CreateIcon
        onPress={() => {
          navigation.navigate("CommunityVoteUploadScreen", {});
        }}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  position: relative;
  flex: 1;
  background-color: ${({ theme }) => theme.color.grey.white};
`;
