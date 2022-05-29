import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  PartnerLandingScreen,
  PartnerLandingScreenProps,
} from "@Screen/Partner";
import {
  ResearchLandingScreen,
  ResearchLandingScreenProps,
} from "@Screen/Research";
import { HomeLandingScreen, HomeLandingScreenProps } from "@Screen/Home";
import {
  CommunityLandingScreen,
  CommunityLandingScreenProps,
} from "@Screen/Community";
import {
  ProfileLandingScreen,
  ProfileLandingScreenProps,
} from "@Screen/Profile";
import { HomeLandingScreenHeader } from "@Screen/Home/Home.landing.screenHeader";
import { LinearGradeintContainer } from "@Component/View";
import {
  HomeIcon,
  PartnerIcon,
  ResearchIcon,
  CommunityIcon,
  MypageSvgIcon,
} from "@Component/Svg";
import { theme } from "@Theme/theme";

const LandingBottomTab = createBottomTabNavigator<LandingBottomTabProps>();

/**
 * LandingBottomTab의 Props
 * @author 원제
 */
export type LandingBottomTabProps = {
  PartnerLandingScreen: PartnerLandingScreenProps;
  ResearchLandingScreen: ResearchLandingScreenProps;
  HomeLandingScreen: HomeLandingScreenProps;
  CommunityLandingScreen: CommunityLandingScreenProps;
  ProfileLandingScreen: ProfileLandingScreenProps;
};

/**
 * 파트너/리서치/메인/커뮤니티/프로필의 랜딩페이지가 모이는 네비게이터입니다.
 * @author 현웅
 */
export function LandingBottomTabNavigator() {
  return (
    <LandingBottomTab.Navigator
      //? initialRouteName: 처음 보여주는 Screen을 순서를 무시하고 HomeLandingScreen으로 설정합니다.
      initialRouteName="HomeLandingScreen"
      screenOptions={({ route }) => ({
        //? headerShown: bottomTabNavigator 상에서의 위치를 나타내는 헤더를 표시하지 않습니다.
        //? tabBarShowLabel: 기본 tabBarLabel을 표시하지 않습니다.
        //? tabBarHideOnKeyBoard: 키보드를 사용하면 tabBar를 숨깁니다.
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.bottomTabBar,
      })}>
      {/* 파트너 스택 */}
      <LandingBottomTab.Screen
        name={"PartnerLandingScreen"}
        component={PartnerLandingScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabBarIcon label="파트너" focused={focused} />
          ),
        })}
      />

      {/* 리서치 스택 */}
      <LandingBottomTab.Screen
        name={"ResearchLandingScreen"}
        component={ResearchLandingScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabBarIcon label="리서치" focused={focused} />
          ),
        })}
      />

      {/* 홈 랜딩 페이지 */}
      <LandingBottomTab.Screen
        name={"HomeLandingScreen"}
        component={HomeLandingScreen}
        options={({ route }) => ({
          headerShown: true,
          header: HomeLandingScreenHeader,
          tabBarIcon: () => <TabBarHomeIcon />,
        })}
      />

      {/* 커뮤니티 스택 */}
      <LandingBottomTab.Screen
        name={"CommunityLandingScreen"}
        component={CommunityLandingScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabBarIcon label="커뮤니티" focused={focused} />
          ),
        })}
      />

      {/* 마이페이지 스택 */}
      <LandingBottomTab.Screen
        name={"ProfileLandingScreen"}
        component={ProfileLandingScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabBarIcon label="마이페이지" focused={focused} />
          ),
        })}
      />
    </LandingBottomTab.Navigator>
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
      return <PartnerIcon focused={focused} />;
    case "리서치":
      return <ResearchIcon focused={focused} />;
    case "커뮤니티":
      return <CommunityIcon focused={focused} />;
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
      <HomeIcon />
    </LinearGradeintContainer>
  );
}

const styles = StyleSheet.create({
  //하단바 전체 스타일
  //TODO: #SETTING(style) 그림자 설정 Android, iOS 다르게 해야함
  bottomTabBar: {
    height: 56,
    backgroundColor: "white",
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
    color: theme.color.focused_gray,
    marginTop: 3,
  },

  // tab bar 버튼 텍스트 (비선택시)
  tabBarIconUnfocusedText: {
    fontSize: 8,
    color: theme.color.unfocused_gray,
    marginTop: 3,
  },
});