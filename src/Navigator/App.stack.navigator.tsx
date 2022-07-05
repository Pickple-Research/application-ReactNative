import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
  AuthFunnelScreen,
  AuthFunnelScreenHeader,
  AuthFunnelScreenProps,
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
  MypageAlarmScreen,
  MypageAlarmScreenHeader,
  MypageAlarmScreenProps,
  MypageNoticeScreen,
  MypageNoticeScreenHeader,
  MypageNoticeScreenProps,
  MypageSettingScreen,
  MypageSettingScreenHeader,
  MypageSettingScreenProps,
  MypageSettingAlarmScreen,
  MypageSettingAlarmScreenHeader,
  MypageSettingAlarmScreenProps,
  MypageSettingNicknameScreen,
  MypageSettingNicknameScreenHeader,
  MypageSettingNicknameScreenProps,
  MypageSettingPasswordScreen,
  MypageSettingPasswordScreenHeader,
  MypageSettingPasswordScreenProps,
  MypageSettingUserInfoScreen,
  MypageSettingUserInfoScreenHeader,
  MypageSettingUserInfoScreenProps,
  MypageCreditHistoryScreen,
  MypageCreditHistoryScreenHeader,
  MypageCreditHistoryScreenProps,
  MypageParticipatedResearchScreen,
  MypageParticipatedResearchScreenHeader,
  MypageParticipatedResearchScreenProps,
  MypageParticipatedVoteScreen,
  MypageParticipatedVoteScreenHeader,
  MypageParticipatedVoteScreenProps,
  MypageScrappedScreen,
  MypageScrappedScreenHeader,
  MypageScrappedScreenProps,
  MypageUploadedScreen,
  MypageUploadedScreenHeader,
  MypageUploadedScreenProps,
} from "src/Screen/Mypage";

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
  AuthFunnelScreen: AuthFunnelScreenProps;
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
  MypageAlarmScreen: MypageAlarmScreenProps;
  MypageNoticeScreen: MypageNoticeScreenProps;
  MypageSettingScreen: MypageSettingScreenProps;
  MypageSettingAlarmScreen: MypageSettingAlarmScreenProps;
  MypageSettingNicknameScreen: MypageSettingNicknameScreenProps;
  MypageSettingPasswordScreen: MypageSettingPasswordScreenProps;
  MypageSettingUserInfoScreen: MypageSettingUserInfoScreenProps;
  MypageCreditHistoryScreen: MypageCreditHistoryScreenProps;
  MypageParticipatedResearchScreen: MypageParticipatedResearchScreenProps;
  MypageParticipatedVoteScreen: MypageParticipatedVoteScreenProps;
  MypageUploadedScreen: MypageUploadedScreenProps;
  MypageScrappedScreen: MypageScrappedScreenProps;
};

export type MypageScrapStackProps = {};

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
        <AppStack.Screen
          name="AuthFunnelScreen"
          component={AuthFunnelScreen}
          options={{
            headerShown: true,
            header: AuthFunnelScreenHeader,
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
          //* 알림 페이지
          name={"MypageAlarmScreen"}
          component={MypageAlarmScreen}
          options={{
            headerShown: true,
            header: MypageAlarmScreenHeader,
          }}
        />
        <AppStack.Screen
          //* 공지사항 페이지
          name={"MypageNoticeScreen"}
          component={MypageNoticeScreen}
          options={{
            headerShown: true,
            header: MypageNoticeScreenHeader,
          }}
        />
        <AppStack.Screen
          //* 설정 페이지
          name={"MypageSettingScreen"}
          component={MypageSettingScreen}
          options={{
            headerShown: true,
            header: MypageSettingScreenHeader,
          }}
        />
        <AppStack.Screen
          //* 알림 설정 페이지
          name={"MypageSettingAlarmScreen"}
          component={MypageSettingAlarmScreen}
          options={{
            headerShown: true,
            header: MypageSettingAlarmScreenHeader,
          }}
        />
        <AppStack.Screen
          //* 닉네임 설정 페이지
          name={"MypageSettingNicknameScreen"}
          component={MypageSettingNicknameScreen}
          options={{
            headerShown: true,
            header: MypageSettingNicknameScreenHeader,
          }}
        />
        <AppStack.Screen
          //* 비밀번호 재설정 페이지
          name={"MypageSettingPasswordScreen"}
          component={MypageSettingPasswordScreen}
          options={{
            headerShown: true,
            header: MypageSettingPasswordScreenHeader,
          }}
        />
        <AppStack.Screen
          //* 로그아웃 / 회원탈퇴 페이지
          name={"MypageSettingUserInfoScreen"}
          component={MypageSettingUserInfoScreen}
          options={{
            headerShown: true,
            header: MypageSettingUserInfoScreenHeader,
          }}
        />
        <AppStack.Screen
          //* 크레딧 사용내역 페이지
          name={"MypageCreditHistoryScreen"}
          component={MypageCreditHistoryScreen}
          options={{
            headerShown: true,
            header: MypageCreditHistoryScreenHeader,
          }}
        />
        <AppStack.Screen
          //* 내가 참여한 리서치 페이지
          name={"MypageParticipatedResearchScreen"}
          component={MypageParticipatedResearchScreen}
          options={{
            headerShown: true,
            header: MypageParticipatedResearchScreenHeader,
          }}
        />
        <AppStack.Screen
          //* 내가 투표한 글 페이지
          name={"MypageParticipatedVoteScreen"}
          component={MypageParticipatedVoteScreen}
          options={{
            headerShown: true,
            header: MypageParticipatedVoteScreenHeader,
          }}
        />
        <AppStack.Screen
          //* 내가 스크랩한 글 페이지
          name={"MypageScrappedScreen"}
          component={MypageScrappedScreen}
          options={{
            headerShown: true,
            header: MypageScrappedScreenHeader,
          }}
        />
        <AppStack.Screen
          //* 내가 올린 글 페이지
          name={"MypageUploadedScreen"}
          component={MypageUploadedScreen}
          options={{
            headerShown: true,
            header: MypageUploadedScreenHeader,
          }}
        />
      </AppStack.Group>
    </AppStack.Navigator>
  );
}
