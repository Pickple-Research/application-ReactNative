import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CommunityScreen,
  CommunityInterestScreen,
  CommunityVoteScreen,
} from "../Screen/Community";

const CommunityStack = createNativeStackNavigator();

/**
 * 커뮤니티 페이지가 쌓이는 스택 네비게이터입니다.
 * @author 현웅
 */
export function CommunityStackNavigator() {
  return (
    <CommunityStack.Navigator screenOptions={{ headerShown: false }}>
      <CommunityStack.Screen
        name={"CommunityScreen"}
        component={CommunityScreen}
      />
      <CommunityStack.Screen
        name={"CommunityInterestScreen"}
        component={CommunityInterestScreen}
      />
      <CommunityStack.Screen
        name={"CommunityVoteScreen"}
        component={CommunityVoteScreen}
      />
    </CommunityStack.Navigator>
  );
}

type CommunityScreenProp = undefined;

type CommunityInterestScreenProp = undefined;

type CommunityVoteScreenProp = undefined;

/**
 * CommunityStackNavigator 스크린들에 사용되는 속성들을 정의합니다.
 * 이 type의 key에 해당하는 값은 CommunityStack.Screen의 name과 일치해야 합니다.
 * @author 현웅
 */
export type CommunityStackScreenProp = {
  CommunityScreen: CommunityScreenProp;
  CommunityInterestScreen: CommunityInterestScreenProp;
  CommunityVoteScreen: CommunityVoteScreenProp;
};
