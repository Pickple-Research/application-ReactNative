import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackProps } from "src/Navigator";
import { ResearchLandingSearch } from "./Research.landing.search";
import { ResearchLandingRecommend } from "./Research.landing.recommend";
import { ResearchLandingNew } from "./Research.landing.new";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import { CreateIcon } from "src/Component/Icon";

/**
 * ResearchLandingScreen에서 사용하는 props
 * @author 현웅
 */
export type ResearchLandingScreenProps = {};

/**
 * ResearchLandingScreen에 넘겨진 route와 navigation의 props
 * @TODO 타입 이름을 어떻게 지어야할까..
 * @author 현웅
 */
type AppStackResearchLandingScreenProps = NativeStackScreenProps<
  AppStackProps,
  "LandingBottomTabNavigator"
>;

/**
 * 리서치 랜딩 페이지
 * @author 현웅
 */
export function ResearchLandingScreen({
  route,
  navigation,
}: AppStackResearchLandingScreenProps) {
  return (
    <Container>
      <WhiteBackgroundScrollView>
        <ResearchLandingSearch />
        <ResearchLandingRecommend />
        <ResearchLandingNew />
      </WhiteBackgroundScrollView>
      <CreateIcon
        onPress={() => {
          navigation.navigate("ResearchUploadScreen", {});
        }}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  position: relative;
`;
