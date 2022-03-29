import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ResearchScreen, ResearchDetailScreen } from "../Screen/Research";

const ResearchStack = createNativeStackNavigator();

/**
 * 리서치 페이지가 쌓이는 스택 네비게이터입니다.
 * @author 현웅
 */
export function ResearchStackNavigator() {
  return (
    <ResearchStack.Navigator screenOptions={{ headerShown: false }}>
      <ResearchStack.Screen
        name={"ResearchScreen"}
        component={ResearchScreen}
      />
      <ResearchStack.Screen
        name={"ResearchDetailScreen"}
        component={ResearchDetailScreen}
      />
    </ResearchStack.Navigator>
  );
}

type ResearchScreenProp = undefined;

type ResearchDetailScreenProp = {
  researchTitle: string;
};

/**
 * ResearchStackNavigator의 스크린들에 사용되는 속성들을 정의합니다.
 * 이 부분의 key에 해당하는 값은 ResearchStack.Screen의 name과 일치해야 합니다.
 * @author 현웅
 */
export type ResearchStackScreenProp = {
  ResearchScreen: ResearchScreenProp;
  ResearchDetailScreen: ResearchDetailScreenProp;
};
