import React, { useRef } from "react";
import { Animated, FlatList } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { ResearchLandingResearchListHeader } from "./Research.landing.researchListHeader";
import { ResearchListItem } from "src/Component/Research";
import { ResearchSchema } from "src/Schema";
import shallow from "zustand/shallow";
import { useResearchStore, useResearchLandingScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style";

/**
 * 리서치 랜딩 페이지 리서치 리스트 섹션
 * @author 현웅
 */
export function ResearchLandingResearchList({
  recommendSectionHeight,
  onScroll,
}: {
  recommendSectionHeight: number;
  onScroll: (event: any) => void;
}) {
  const researches = useResearchStore(state => state.researches);
  const { loading, getOlderResearches } = useResearchLandingScreenStore(
    state => ({
      loading: state.loading,
      getOlderResearches: state.getOlderResearches,
    }),
    shallow,
  );

  const flatListRef = useRef<FlatList>();

  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <Container>
      <ResearchList<React.ElementType>
        ref={flatListRef}
        data={researches}
        renderItem={({ item }: { item: ResearchSchema }) => {
          return (
            <ResearchListItem
              key={item._id}
              style={globalStyles.screen__horizontalPadding}
              research={item}
              onPress={() => {
                navigation.navigate("ResearchDetailScreen", {
                  research: item,
                });
                // flatListRef.current?.scrollToOffset({
                //   animated: true,
                //   offset: 270,
                // });
              }}
            />
          );
        }}
        contentContainerStyle={{
          paddingTop: recommendSectionHeight,
          paddingBottom: 40,
        }}
        onScroll={onScroll}
        //? 스크롤 이벤트를 일으키는 간극을 조정합니다. iOS에서 버벅이는 현상을 방지합니다.
        scrollEventThrottle={16}
        ListHeaderComponent={ResearchLandingResearchListHeader}
        //? FlatList 헤더가 최상단에 sticky하도록 설정합니다.
        stickyHeaderIndices={[0]}
        onEndReached={getOlderResearches}
      />
    </Container>
  );
}

const Container = styled.View``;

const ResearchList = styled(Animated.FlatList)``;
