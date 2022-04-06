import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ResearchScreen, ResearchDetailScreen } from "../Screen/Research";
import { MainResearchScreenProps } from "@Screen/Main/MainResearch";

const ResearchStack = createNativeStackNavigator<ResearchStackProps>();

/**
 * 리서치 페이지가 쌓이는 스택 네비게이터입니다.
 * @author 현웅
 */
export function ResearchStackNavigator() {
  return (
    <ResearchStack.Navigator screenOptions={{headerTitle: ""}}>
      <ResearchStack.Screen
        name={"MainResearchScreen"}
        component={ResearchScreen}
      />
    </ResearchStack.Navigator>
  );
}


/**
 * ResearchStackNavigator의 스크린들에 사용되는 속성들을 정의합니다.
 * 이 부분의 key에 해당하는 값은 ResearchStack.Screen의 name과 일치해야 합니다.
 * @author 현웅
 */
export type ResearchStackProps = {
  MainResearchScreen: MainResearchScreenProps;
};
