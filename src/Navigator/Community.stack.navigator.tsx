import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CommunityTopTabProps,
  CommunityTopTabNavigator,
} from "./Community.topTab.navigator";

const CommunityStack = createNativeStackNavigator<CommunityStackProps>();

/**
 * 커뮤니티 페이지가 쌓이는 스택 네비게이터입니다.
 * @author 현웅
 */
export function CommunityStackNavigator() {
  return (
    <CommunityStack.Navigator screenOptions={{ headerShown: false }}>
      <CommunityStack.Screen
        name={"CommunityTopTabNavigator"}
        component={CommunityTopTabNavigator}
      />
    </CommunityStack.Navigator>
  );
}

/**
 * CommunityStackNavigator 스크린들에 사용되는 속성들을 정의합니다.
 * 이 type의 key에 해당하는 값은 CommunityStack.Screen의 name과 일치해야 합니다.
 * @author 현웅
 */

export type CommunityStackProps = {
  CommunityTopTabNavigator: CommunityTopTabProps;
};
