import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// 랜딩 페이지 Bottom tab navigator
import {
  LandingBottomTabNavigator,
  LandingBottomTabProps,
} from "src/Navigator";
// 로그인, 회원가입 등 Auth 관련 Screen
import {
  LoginScreen,
  LoginScreenHeader,
  LoginScreenProps,
  SignupScreen,
  SignupScreenHeader,
  SignupScreenProps,
} from "src/Screen/Auth";
// 파트너 관련 Screen
import {
  PartnerCategoryScreen,
  PartnerCategoryScreenHeader,
  PartnerCategoryScreenProps,
  PartnerDetailScreen,
  PartnerDetailScreenHeader,
  PartnerDetailScreenProps,
} from "src/Screen/Partner";
// 리서치 관련 Screen
import {
  ResearchDetailScreen,
  ResearchDetailScreenHeader,
  ResearchDetailScreenProps,
  ResearchParticipateScreen,
  ResearchParticipateScreenHeader,
  ResearchParticipateScreenProps,
  ResearchUploadScreen,
  ResearchUploadScreenHeader,
  ResearchUploadScreenProps,
} from "src/Screen/Research";
// 커뮤니티(투표) 관련 Screen
import {
  CommunityVoteDetailScreen,
  CommunityVoteDetailScreenHeader,
  CommunityVoteDetailScreenProps,
  CommunityVoteUploadScreen,
  CommunityVoteUploadScreenHeader,
  CommunityVoteUploadScreenProps,
} from "src/Screen/Community";
// 마이페이지 관련 Screen
import {
  MypageScrapScreenHeader,
  MypageVotedScreen,
  MypageVotedScreenHeader,
  MypageVotedScreenProps,
} from "src/Screen/Mypage";
import { MypageScrapTopNavigator, MypageScrapTopTabProps } from "./MypageScrap.topTab.navigator";

/**
 * 앱에서 사용되는 모든 스크린의 속성들을 정의합니다.
 * 이 type의 key에 해당하는 값은 AppStack.Screen의 name과 일치해야 합니다.
 * @author 현웅
 */
export type AppStackProps = {
  LandingBottomTabNavigator: LandingBottomTabProps;
  // Auth 관련 Screen
  LoginScreen: LoginScreenProps;
  SignupScreen: SignupScreenProps;
  // 파트너 관련 Screen
  PartnerCategoryScreen: PartnerCategoryScreenProps;
  PartnerDetailScreen: PartnerDetailScreenProps;
  // 리서치 관련 Screen
  ResearchDetailScreen: ResearchDetailScreenProps;
  ResearchParticipateScreen: ResearchParticipateScreenProps;
  ResearchUploadScreen: ResearchUploadScreenProps;
  // 커뮤니티(투표) 관련 Screen
  CommunityVoteDetailScreen: CommunityVoteDetailScreenProps;
  CommunityVoteUploadScreen: CommunityVoteUploadScreenProps;
  // 마이페이지 관련 Screen
  MypageVotedScreen: MypageVotedScreenProps;
  MypageScrapTopNavigator: MypageScrapTopTabProps;
  
};

export type MypageScrapStackProps = {

}

const AppStack = createNativeStackNavigator<AppStackProps>();

/**
 * 앱의 모든 화면들이 쌓이는 Stack Navigator입니다.
 * @author 현웅
 */
export function AppStackNavigator() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      {/* 랜딩 페이지 BottomTab Navigator */}
      <AppStack.Screen
        name="LandingBottomTabNavigator"
        component={LandingBottomTabNavigator}
      />

      {/* Auth 관련 Screen 그룹 */}
      <AppStack.Group>
        <AppStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: true,
            header: LoginScreenHeader,
          }}
        />
        <AppStack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            headerShown: true,
            header: SignupScreenHeader,
          }}
        />
      </AppStack.Group>

      {/* 파트너 관련 Screen 그룹 */}
      <AppStack.Group>
        <AppStack.Screen
          name="PartnerCategoryScreen"
          component={PartnerCategoryScreen}
          options={{
            headerShown: true,
            header: PartnerCategoryScreenHeader,
            headerShadowVisible: true,
          }}
        />
        <AppStack.Screen
          name="PartnerDetailScreen"
          component={PartnerDetailScreen}
          options={{
            headerShown: true,
            header: PartnerDetailScreenHeader,
          }}
        />
      </AppStack.Group>

      {/* 리서치 관련 Screen 그룹 */}
      <AppStack.Group>
        <AppStack.Screen
          name={"ResearchDetailScreen"}
          component={ResearchDetailScreen}
          options={{
            headerShown: true,
            header: ResearchDetailScreenHeader,
          }}
        />
        <AppStack.Screen
          name={"ResearchParticipateScreen"}
          component={ResearchParticipateScreen}
          options={{
            headerShown: true,
            header: ResearchParticipateScreenHeader,
          }}
        />
        <AppStack.Screen
          name={"ResearchUploadScreen"}
          component={ResearchUploadScreen}
          options={{
            headerShown: true,
            header: ResearchUploadScreenHeader,
          }}
        />
      </AppStack.Group>

      {/* 커뮤니티(투표) 관련 Screen 그룹 */}
      <AppStack.Group>
        <AppStack.Screen
          name={"CommunityVoteDetailScreen"}
          component={CommunityVoteDetailScreen}
          options={{
            headerShown: true,
            header: CommunityVoteDetailScreenHeader,
          }}
        />
        <AppStack.Screen
          name={"CommunityVoteUploadScreen"}
          component={CommunityVoteUploadScreen}
          options={{
            headerShown: true,
            header: CommunityVoteUploadScreenHeader,
          }}
        />
      </AppStack.Group>

      {/* 마이페이지 관련 Screen 그룹 */}
      <AppStack.Group>
        <AppStack.Screen
          name={"MypageVotedScreen"}
          component={MypageVotedScreen}
          options={{
            headerShown: true,
            header: MypageVotedScreenHeader,
          }}
        />
        <AppStack.Screen
          name={"MypageScrapTopNavigator"}
          component={MypageScrapTopNavigator}
          options={{
            headerShown: true,
            header: MypageScrapScreenHeader,
          }}
        />
      </AppStack.Group>
    </AppStack.Navigator>
  );
}
