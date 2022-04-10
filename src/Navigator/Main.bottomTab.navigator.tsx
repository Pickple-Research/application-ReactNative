import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import {
  ClientStackNavigator,
  ClientStackProps,
  ResearchStackNavigator,
  ResearchStackProps,
  HomeStackNavigator,
  HomeStackProps,
  CommunityStackNavigator,
  CommunityStackProps,
  ProfileStackNavigator,
  ProfileStackProps,
} from "@Navigator/index";
import { getBottomTabVisibilityByRoute } from "@Util/index";
import { StyleSheet } from "react-native";

const MainBottomTab = createBottomTabNavigator<MainBottomTabProps>();

/**
 * MainBottomTab의 Props
 * @author 원제
 */
export type MainBottomTabProps = {
  ClientStack: ClientStackProps;
  ResearchStack: ResearchStackProps;
  HomeStack: HomeStackProps;
  CommunityStack: CommunityStackProps;
  ProfileStack: ProfileStackProps;
};

/**
 * 앱 메인 하단바 네비게이터입니다. 사실상 앱 그 자체입니다.
 * 다른 (스택) 네비게이터가 이 네비게이터를 구성하는 스크린 컴포넌트로 들어옵니다.
 * @author 현웅
 */
export function MainBottomTabNavigator() {
  return (
    <MainBottomTab.Navigator
      //? initialRouteName: 처음 보여주는 Screen을 순서를 무시하고 HomeStack으로 설정합니다.
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        //? headerShown: bottomTabNavigator 상에서의 위치를 나타내는 헤더를 표시하지 않습니다.
        //? tabBarShowLabel: 기본 tabBarLabel을 표시하지 않습니다.
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.navigator,
      })}>
      <MainBottomTab.Screen
        name={"ClientStack"}
        component={ClientStackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display: getBottomTabVisibilityByRoute(route),
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon label="파트너" focused={focused} />
          ),
        })}
      />

      <MainBottomTab.Screen
        name={"ResearchStack"}
        component={ResearchStackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display: getBottomTabVisibilityByRoute(route),
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon label="리서치" focused={focused} />
          ),
        })}
      />
      <MainBottomTab.Screen
        name={"HomeStack"}
        component={HomeStackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display: getBottomTabVisibilityByRoute(route),
          },
          tabBarIcon: ({ focused }) => <TabBarHomeIcon />,
        })}
      />
      <MainBottomTab.Screen
        name={"CommunityStack"}
        component={CommunityStackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display: getBottomTabVisibilityByRoute(route),
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon label="커뮤니티" focused={focused} />
          ),
        })}
      />
      <MainBottomTab.Screen
        name={"ProfileStack"}
        component={ProfileStackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display: getBottomTabVisibilityByRoute(route),
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon label="마이페이지" focused={focused} />
          ),
        })}
      />
    </MainBottomTab.Navigator>
  );
}

type BottomTabIconProps = {
  label: "파트너" | "리서치" | "커뮤니티" | "마이페이지";
  focused: boolean;
};

/**
 * Home Icon을 제외한 BottomTab의 Icon 컴포넌트
 * @author 현웅
 */
function TabBarIcon({ label, focused }: BottomTabIconProps) {
  return (
    <View style={styles.tabBarIconContainer}>
      <Image
        source={require("@Resource/png/bottom_tab_client_inactive.png")}
        style={styles.tabBarIconImage}
      />
      <Text
        style={
          focused
            ? styles.tabBarIconFocusedText
            : styles.tabBarIconUnfocusedText
        }>
        {label}
      </Text>
    </View>
  );
}

/**
 * 홈 아이콘 컴포넌트
 * @author 현웅
 */
function TabBarHomeIcon() {
  return (
    <View style={styles.tabBarHomeIconContainer}>
      <Image
        source={require("@Resource/png/bottom_tab_home_inactive.png")}
        style={styles.tabBarHomeIconImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  //하단바 전체 스타일
  //TODO: #SETTING 그림자 설정 Android, iOS 다르게 해야함
  navigator: {
    height: "fit-content",
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 200,
      height: 100,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 25,
  },

  // tab bar 아이콘 컨테이너
  tabBarIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  // tab bar 버튼 아이콘
  tabBarIconImage: {
    height: "40%",
    aspectRatio: 1,
  },

  // tab bar 홈 아이콘 컨테이너
  tabBarHomeIconContainer: {
    alignItems: "center",
    marginBottom: 45,
  },

  // tab bar
  tabBarHomeIconImage: {
    width: 80,
    height: 80,
  },

  // tab bar 버튼 텍스트 (선택시)
  tabBarIconFocusedText: {
    fontSize: 10,
    color: "red",
  },

  // tab bar 버튼 텍스트 (비선택시)
  tabBarIconUnfocusedText: {
    fontSize: 10,
    color: "black",
  },
});
