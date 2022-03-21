import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../Screen/Home";
import { ResearchStackNavigator, CommunityStackNavigator } from ".";

const AppBottomTab = createBottomTabNavigator();

/**
 * 앱 메인 하단바 네비게이터입니다. 사실상 앱 그 자체입니다.
 * 다른 네비게이터가 이 네비게이터를 구성하는 스크린 컴포넌트로 들어옵니다.
 * @author 현웅
 */
export function AppBottomTabNavigator() {
  return (
    <AppBottomTab.Navigator screenOptions={{ headerShown: false }}>
      <AppBottomTab.Screen name={"Home"} component={HomeScreen} />
      <AppBottomTab.Screen
        name={"Research"}
        component={ResearchStackNavigator}
      />
      <AppBottomTab.Screen
        name={"Community"}
        component={CommunityStackNavigator}
      />
    </AppBottomTab.Navigator>
  );
}
