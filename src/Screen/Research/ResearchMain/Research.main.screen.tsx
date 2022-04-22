import React from "react";
import { StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ResearchStackProps } from "@Navigator/index";
import { ResearchMainSearch } from "./Research.main.search";
import { ResearchMainRecommend } from "./Research.main.recommend";
import { ResearchMainNew } from "./Research.main.new";
import { WhiteBackgroundScrollView } from "@Component/ScrollView";

/**
 * ResearchMainScreen에서 사용하는 props
 * @author 현웅
 */
export type ResearchMainScreenProps = {};

/**
 * ResearchMainScreen에 넘겨진 route와 navigation의 props
 * @TODO 타입 이름을 어떻게 지어야할까..
 * @author 현웅
 */
type ResearchStackResearchMainScreenProps = NativeStackScreenProps<
  ResearchStackProps,
  "ResearchMainScreen"
>;

/**
 * 리서치 랜딩 페이지
 * @author 현웅
 */
export function ResearchMainScreen({
  navigation,
}: ResearchStackResearchMainScreenProps) {
  return (
    <WhiteBackgroundScrollView>
      {/* <TouchableOpacity
        style={{ backgroundColor: "red", width: 100, height: 100 }}
        onPress={() => {
          navigation.navigate("ResearchDetailScreen", {});
        }}></TouchableOpacity> */}
      <ResearchMainSearch />
      <ResearchMainRecommend />
      <ResearchMainNew />
    </WhiteBackgroundScrollView>
  );
}

export const screenStyles = StyleSheet.create({
  padding: {
    paddingHorizontal: 20,
  },
});
