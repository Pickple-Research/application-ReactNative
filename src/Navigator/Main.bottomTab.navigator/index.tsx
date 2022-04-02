import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../Screen/Home";
import { BottomTabImage, BottomTabMainImage, BottomTabMainView, BottomTabTextActive, BottomTabTextInactive, BottomTabView } from "./style";
import { BackHandler } from "react-native";


export const MainBottomTab = createBottomTabNavigator<MainBottomTabProps>();


export type MainBottomTabProps = {
  "Client": any
  "Research": any
  "Home": any
  "Community": any
  "User": any
}

const bottomTab = {
  "Client": {
    "label": "스타트업",
    "image": {
      "inactive": require("@Resource/png/bottom_tab_client_inactive.png"),
      "active": require("@Resource/png/bottom_tab_client_active.png"),
    }
  },
  "Research": {
    "label": "리서치",
    "image": {
      "inactive": require("@Resource/png/bottom_tab_research_inactive.png"),
      "active": require("@Resource/png/bottom_tab_research_active.png"),
    }
  },
  "Home": {
    "label": "",
    "image": {
      "inactive": require("@Resource/png/bottom_tab_home_inactive.png"),
      "active": require("@Resource/png/bottom_tab_home_active.png"),
    }
  },
  "Community": {
    "label": "커뮤니티",
    "image": {
      "inactive": require("@Resource/png/bottom_tab_community_inactive.png"),
      "active": require("@Resource/png/bottom_tab_community_active.png"),
    }
  },
  "User": {
    "label": "마이페이지",
    "image": {
      "inactive": require("@Resource/png/bottom_tab_profile_inactive.png"),
      "active": require("@Resource/png/bottom_tab_profile_active.png"),
    }
  },
}
/**
 * 앱 메인 하단바 네비게이터입니다. 사실상 앱 그 자체입니다.
 * 다른 네비게이터가 이 네비게이터를 구성하는 스크린 컴포넌트로 들어옵니다.
 * @author 현웅
 */
export function MainBottomTabNavigator() {
  BackHandler.addEventListener("hardwareBackPress", () => {
    console.log("메인페이지에서 로그인 페이지로 back button을 통해 돌아가는 것을 불가능합니다.")
    console.log("유저페이지에서 시도해주세요");
    return true;
  })
  return (
    <MainBottomTab.Navigator screenOptions={{ headerTitle: "", tabBarShowLabel: false }}>
      <MainBottomTab.Screen name={"Client"} component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <BottomTabView>
            <BottomTabImage source={focused ? bottomTab.Client.image.active : bottomTab.Client.image.inactive} />
            {focused ? <BottomTabTextActive>{bottomTab.Client.label}</BottomTabTextActive> : <BottomTabTextInactive>{bottomTab.Client.label}</BottomTabTextInactive>}
          </BottomTabView>
        ),
      }} />

      <MainBottomTab.Screen
        name={"Research"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabView>
              <BottomTabImage source={focused ? bottomTab.Research.image.active : bottomTab.Research.image.inactive} />
              {focused ? <BottomTabTextActive>{bottomTab.Research.label}</BottomTabTextActive> : <BottomTabTextInactive>{bottomTab.Research.label}</BottomTabTextInactive>}
            </BottomTabView>
          ),
        }}
      />
      <MainBottomTab.Screen name={"Home"} component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <BottomTabMainView>
            <BottomTabMainImage source={focused ? bottomTab.Home.image.active : bottomTab.Home.image.inactive} />
          </BottomTabMainView>
        ),
      }} />
      <MainBottomTab.Screen
        name={"Community"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabView>
              <BottomTabImage source={focused ? bottomTab.Community.image.active : bottomTab.Community.image.inactive} />
              {focused ? <BottomTabTextActive>{bottomTab.Community.label}</BottomTabTextActive> : <BottomTabTextInactive>{bottomTab.Community.label}</BottomTabTextInactive>}
            </BottomTabView>
          ),
        }}
      />
      <MainBottomTab.Screen name="User" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <BottomTabView>
            <BottomTabImage source={focused ? bottomTab.User.image.active : bottomTab.User.image.inactive} />
              {focused ? <BottomTabTextActive>{bottomTab.User.label}</BottomTabTextActive> : <BottomTabTextInactive>{bottomTab.User.label}</BottomTabTextInactive>}
          </BottomTabView>
        ),
      }} />
    </MainBottomTab.Navigator>
  );
}
