import React, { useState, useRef } from "react";
import { Animated, LayoutChangeEvent } from "react-native";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackProps } from "src/Navigator";
import { ResearchLandingRecommend } from "./Research.landing.recommend";
import { ResearchLandingResearchList } from "./Research.landing.researchList";
import { CreateIcon } from "src/Component/Icon";

/**
 * ResearchLandingScreen에서 사용하는 props
 * @author 현웅
 */
export type ResearchLandingScreenProps = {};

/**
 * 리서치 랜딩 페이지. Collapsible Header를 구현하는 방법은 링크 내용을 참고하였습니다.
 *
 * @explain
 *  1. useState 를 이용하여 리서치 추천 섹션의 높이 상태를 recommendSectionHeight 으로 설정합니다. 초기값은 0입니다.
 *
 *  2. RecommendSection 의 최외곽 View 의 onLayout 에 들어갈 함수를 정의합니다.
 *    onLayout 함수는 레이아웃에 변화가 생겼을 때 뿐 아니라 레이아웃이 초기화될 때도 실행됩니다.
 *    따라서 컴포넌트 최초 마운트시 추천 섹션의 높이가 recommendSectionHeight 에 들어갑니다.
 *
 *  3. 애니메이션 효과(Y축으로 이동)를 일으킬 때 사용할 값을 scrollY 로 설정합니다.
 *
 *  4. ResearchList 를 구성하는 FlatList 에서 Scroll 이벤트가 일어났을 때 호출할 함수 onResearchListScroll 를 정의합니다.
 *    해당 함수는 스크롤 이벤트의 y 값을 3.단계에서 정의한 scrollY 에 넘겨줍니다.
 *
 *  5. 이벤트 발생 시 scrollY 가 반환할 값을 지정합니다. scrollY.current.interpolate 를 recommendSectionTranslateY 에 정의하고
 *    scrollY 의 값이 0부터 recommendSectionHeight 사이의 값을 가지는 경우
 *    해당 값을 0부터 -recommendSectionHeight 사이의 값으로 치환하여 반환하도록 합니다.
 *
 *  6. recommendSectionTranslateY 를 리서치 추천 섹션의 최외곽 View 의 style - transfrom - translateY 에 적용합니다.
 *    FlatList 에 스크롤 이벤트가 발생하면 recommendSectionTranslateY 가 이동할 거리를 알려줍니다.
 *
 * @see https://coding-w00se.tistory.com/55
 * @see https://medium.com/swlh/making-a-collapsible-sticky-header-animations-with-react-native-6ad7763875c3
 * @author 현웅
 */
export function ResearchLandingScreen({
  route,
  navigation,
}: NativeStackScreenProps<AppStackProps, "LandingBottomTabNavigator">) {
  /**
   * 리서치 추천 섹션의 높이입니다. 초기값은 0이지만,
   * onRecommendSectionLayout 함수가 호출됨에 따라 변경됩니다.
   */
  const [recommendSectionHeight, setRecommendSectionHeight] =
    useState<number>(0);

  /**
   * 리서치 추천 섹션의 레이아웃에 변화가 생겼을 때 호출할 함수입니다.
   * (리서치 추천 섹션가 최초로 랜더링 되었을 때도 호출됩니다)
   * 동적으로 설정되는 Header의 높이를 가져와 headerHeight으로 설정합니다.
   */
  function onRecommendSectionLayout(event: LayoutChangeEvent) {
    setRecommendSectionHeight(event.nativeEvent.layout.height);
  }

  /** 애니메이션 효과를 일으킬 때 사용할 값을 정의합니다. */
  const scrollY = useRef(new Animated.Value(0));

  /**
   * FlatList에서 Scroll 이벤트가 일어났을 때 호출할 함수입니다.
   * Y축 방향으로 일어난 스크롤 값을 scrollY.current에 넘겨줍니다.
   */
  const onResearchListScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY.current } } }],
    { useNativeDriver: true },
  );

  /**
   * inputRange의 범위와 outputRange의 범위를 mapping한 후,
   * scrollY.current의 값이 inputRange 범위에 진입하는 경우 해당 값을 outputRange의 값으로 치환하여 반환합니다.
   *
   * @example
   * ```
   * inputRange: [0, 1]
   * outputRange: [0, 20]
   * 일 때 0.8을 입력하면 16을, 0.3을 입력하면 6을 반환합니다.
   * ```
   */
  const recommendSectionTranslateY = scrollY.current.interpolate({
    inputRange: [0, recommendSectionHeight],
    outputRange: [0, -recommendSectionHeight],
    extrapolate: "clamp",
  });

  /**
   * 만약 리서치 추천 섹션이 높이와 상관없이 스크롤을 위로 올렸을 때 무조건 나타나게 하고 싶다면
   * 위에서 정의한 recommendSectionTranslateY 를 주석처리하고 아래의 주석 코드를 활성화합니다.
   * Animated.diffClamp는 첫번째 인자의 값이 두번째, 세번째 값의 범위를 벗어나지 않도록 강제하므로,
   * 기존에 FlatList의 스크롤 이벤트 값만큼 무한정 늘어났던 scrollY 의 값이 recommendSectionHeight 보다 커지지 않게 됩니다.
   * 위로 올라가는 제스쳐를 취할 때 실제 위치와 상관 없이 무조건 나타나게 됩니다.
   * 물론 이렇게 하면 FlatList 스크린 헤더가 밀리는 현상이 일어날텐데, 그건 그 때 생각하도록 합시다.
   */
  // const scrollYClamp = Animated.diffClamp(scrollY.current, 0, recommendSectionHeight);
  // const recommendSectionTranslateY = scrollYClamp.interpolate({
  //   inputRange: [0, recommendSectionHeight],
  //   outputRange: [0, -recommendSectionHeight],
  //   extrapolate: "clamp",
  // });

  return (
    <Container>
      <ResearchLandingResearchList
        recommendSectionHeight={recommendSectionHeight}
        onScroll={onResearchListScroll}
      />
      {/*
        //! 디자인상 ResearchLandingRecommend가 제일 위에 있지만
        //! position: absolute, top: 0px 로 맞춰진 것이기 때문에
        //! 컴포넌트가 중첩되는 위계를 맞추기 위해서는 코드의 가장 아래에 위치시켜야 합니다.
       */}
      <ResearchLandingRecommend
        onLayout={onRecommendSectionLayout}
        translateY={recommendSectionTranslateY}
      />
      <CreateIcon
        onPress={() => {
          navigation.navigate("ResearchUploadScreen", {});
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
