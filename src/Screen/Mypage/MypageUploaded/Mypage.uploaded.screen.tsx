import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  MypageUploadedResearchScreen,
  MypageUploadedResearchScreenProps,
} from "./Mypage.uploaded.research.screen";
import {
  MypageUploadedVoteScreen,
  MypageUploadedVoteScreenProps,
} from "./Mypage.uploaded.vote.screen";
import { H1 } from "src/StyledComponents/Text";
//TODO: 추후, 선택된 테마에 따라 색상 변경
import { lightThemeColors, darkThemeColors } from "src/Theme";

export type MypageUploadedScreenProps = {};

type MypageUploadedTopTabProps = {
  MypageUploadedResearchScreen: MypageUploadedResearchScreenProps;
  MypageUploadedVoteScreen: MypageUploadedVoteScreenProps;
};

const MypageUploadedTopTab =
  createMaterialTopTabNavigator<MypageUploadedTopTabProps>();

/**
 * 유저가 올린 글(리서치, 투표글)을 보여주는 페이지입니다.
 * @author 현웅
 */
export function MypageUploadedScreen() {
  return (
    <MypageUploadedTopTab.Navigator backBehavior="none">
      <MypageUploadedTopTab.Screen
        name="MypageUploadedResearchScreen"
        component={MypageUploadedResearchScreen}
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <TabBarLabel label="리서치" type="BLUE" focused={focused} />
          ),
          tabBarIndicatorStyle: styles.blueIndicator,
        })}
      />
      <MypageUploadedTopTab.Screen
        name="MypageUploadedVoteScreen"
        component={MypageUploadedVoteScreen}
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <TabBarLabel label="투표글" type="PURPLE" focused={focused} />
          ),
          tabBarIndicatorStyle: styles.purpleIndicator,
        })}
      />
    </MypageUploadedTopTab.Navigator>
  );
}

function TabBarLabel({
  label,
  type,
  focused,
}: {
  label: string;
  type: "BLUE" | "PURPLE";
  focused: boolean;
}) {
  if (!focused) {
    return <TabBarLabel__Unfocused>{label}</TabBarLabel__Unfocused>;
  }
  if (type === "BLUE") {
    return <TabBarLable__Blue>{label}</TabBarLable__Blue>;
  }
  // type === "PURPLE"
  return <TabBarLabel__Purple>{label}</TabBarLabel__Purple>;
}

const TabBarLabel__Unfocused = styled(H1)`
  font-weight: bold;
  color: ${({ theme }) => theme.color.grey.mild};
`;

const TabBarLable__Blue = styled(TabBarLabel__Unfocused)`
  color: ${({ theme }) => theme.color.blue.text};
`;

const TabBarLabel__Purple = styled(TabBarLabel__Unfocused)`
  color: ${({ theme }) => theme.color.purple.text};
`;

const styles = StyleSheet.create({
  blueIndicator: { height: 3, backgroundColor: lightThemeColors.blue.text },
  purpleIndicator: {
    height: 3,
    backgroundColor: lightThemeColors.purple.text,
  },
});
