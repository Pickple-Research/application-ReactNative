import React from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { ResearchListItem } from "src/Component/Research";
import { ResearchLandingListFilterHeader } from "./Research.landing.listFilterHeader";
import { ResearchSchema } from "src/Schema";
import { useResearchStore } from "src/Zustand";
import { globalStyles } from "src/Style";

/**
 * 리서치 랜딩 페이지 리서치 리스트 섹션
 * @author 현웅
 */
export function ResearchLandingList({
  recommendSectionHeight,
  onScroll,
}: {
  recommendSectionHeight: number;
  onScroll: (event: any) => void;
}) {
  const researches = useResearchStore(state => state.researches);

  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <Container>
      <ResearchList<React.ElementType>
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
              }}
            />
          );
        }}
        contentContainerStyle={{ paddingTop: recommendSectionHeight }}
        onScroll={onScroll}
        //? 스크롤 이벤트를 일으키는 간극을 조정합니다. iOS에서 버벅이는 현상을 방지합니다.
        scrollEventThrottle={16}
        ListHeaderComponent={ResearchLandingListFilterHeader}
        //? FlatList 헤더가 최상단에 sticky하도록 설정합니다.
        stickyHeaderIndices={[0]}
      />
    </Container>
  );
}

const Container = styled.View``;

const ResearchList = styled(Animated.FlatList)``;
