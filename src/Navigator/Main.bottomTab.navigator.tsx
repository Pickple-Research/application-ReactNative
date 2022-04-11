import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import { getBottomTabVisibilityFromRoute } from "@Util/index";
import {
  LinearGradeintContainer,
  HomeSvgIcon,
  PartnerSvgIcon,
  ResearchSvgIcon,
  CommunitySvgIcon,
  MypageSvgIcon,
} from "@Component/React";
import { theme } from "@Theme/theme";

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
        //? 전역적으로 tabBarStyle을 적용하더라도 각 TabBar 옵션마다 새로 style이 적용되므로 쓸모가 없습니다.
        // tabBarStyle: styles.bottomTabBar,
      })}>
      <MainBottomTab.Screen
        name={"ClientStack"}
        component={ClientStackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display: getBottomTabVisibilityFromRoute(route),
            ...styles.bottomTabBar,
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
            display: getBottomTabVisibilityFromRoute(route),
            ...styles.bottomTabBar,
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
            display: getBottomTabVisibilityFromRoute(route),
            ...styles.bottomTabBar,
          },
          tabBarIcon: ({ focused }) => <TabBarHomeIcon />,
        })}
      />
      <MainBottomTab.Screen
        name={"CommunityStack"}
        component={CommunityStackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display: getBottomTabVisibilityFromRoute(route),
            ...styles.bottomTabBar,
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
            display: getBottomTabVisibilityFromRoute(route),
            ...styles.bottomTabBar,
          },
          tabBarIcon: ({ focused }) => (
            <TabBarIcon label="마이페이지" focused={focused} />
          ),
        })}
      />
    </MainBottomTab.Navigator>
  );
}

type TabBarIconProps = {
  label: "파트너" | "리서치" | "커뮤니티" | "마이페이지";
  focused: boolean;
};

/**
 * 홈 아이콘을 제외한 BottomTab의 Icon 컴포넌트
 * @author 현웅
 */
function TabBarIcon({ label, focused }: TabBarIconProps) {
  return (
    <View style={styles.tabBarIconContainer}>
      <TabBarSvgIcon label={label} focused={focused} />
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
 * BottomTab의 Icon에 들어갈 Svg 이미지 컴포넌트
 * @author 현웅
 */
function TabBarSvgIcon({ label, focused }: TabBarIconProps) {
  switch (label) {
    case "파트너":
      return <PartnerSvgIcon focused={focused} />;
    case "리서치":
      return <ResearchSvgIcon focused={focused} />;
    case "커뮤니티":
      return <CommunitySvgIcon focused={focused} />;
    case "마이페이지":
      return <MypageSvgIcon focused={focused} />;
  }
}

/**
 * 홈 아이콘 컴포넌트
 * @author 현웅
 */
function TabBarHomeIcon() {
  return (
    <LinearGradeintContainer style={styles.tabBarHomeIconContainer}>
      <HomeSvgIcon />
    </LinearGradeintContainer>
  );
}

const styles = StyleSheet.create({
  //하단바 전체 스타일
  //TODO: #SETTING 그림자 설정 Android, iOS 다르게 해야함
  bottomTabBar: {
    height: 56,
    backgroundColor: "#ffffff",
    // iOS 그림자 스타일
    shadowColor: "#000000",
    shadowOffset: {
      width: 200,
      height: 100,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    // android 그림자 스타일
    elevation: 25,
  },

  // tab bar 아이콘 컨테이너
  tabBarIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  // tab bar 홈 아이콘 컨테이너
  tabBarHomeIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 45,
  },

  // tab bar 버튼 텍스트 (선택시)
  tabBarIconFocusedText: {
    fontSize: 8,
    color: theme.color.focusedGray,
    marginTop: 3,
  },

  // tab bar 버튼 텍스트 (비선택시)
  tabBarIconUnfocusedText: {
    fontSize: 8,
    color: theme.color.unfocusedGray,
    marginTop: 3,
  },
});
