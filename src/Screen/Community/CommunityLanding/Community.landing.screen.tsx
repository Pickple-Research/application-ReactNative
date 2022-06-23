import React, { useState, useRef } from "react";
import { Animated, LayoutChangeEvent } from "react-native";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackProps } from "src/Navigator";
import { CommunityLandingRecommend } from "./Community.landing.recommend";
import { CommunityLandingVoteList } from "./Community.landing.voteList";
import { CreateIcon } from "src/Component/Icon";

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
    useState<number>(0);

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
