import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// 랜딩 페이지 Bottom tab navigator
import {
  LandingBottomTabNavigator,
  LandingBottomTabProps,
} from "@Navigator/index";
// 파트너 관련 Screen
import {
  PartnerCategoryScreen,
  PartnerCategoryScreenProps,
  PartnerDetailScreen,
  PartnerDetailScreenProps,
} from "@Screen/Partner";
import { PartnerDetailScreenHeader } from "@Screen/Partner/PartnerDetail/Partner.detail.screenHeader";
// 리서치 관련 Screen
import {
  ResearchDetailScreen,
  ResearchDetailScreenProps,
  ResearchWriteScreen,
  ResearchWriteScreenProps,
  ResearchUploadScreen,
  ResearchUploadScreenProps,
} from "@Screen/Research";
// 커뮤니티(투표) 관련 Screen
// 마이페이지 관련 Screen

/**
 * 앱에서 사용되는 모든 스크린의 속성들을 정의합니다.
 * 이 type의 key에 해당하는 값은 AppStack.Screen의 name과 일치해야 합니다.
 * @author 현웅
 */
export type AppStackProps = {
  LandingBottomTabNavigator: LandingBottomTabProps;
  // 파트너 관련 Screen
  PartnerCategoryScreen: PartnerCategoryScreenProps;
  PartnerDetailScreen: PartnerDetailScreenProps;
  // 리서치 관련 Screen
  ResearchDetailScreen: ResearchDetailScreenProps;
  ResearchWriteScreen: ResearchWriteScreenProps;
  ResearchUploadScreen: ResearchUploadScreenProps;
  // 커뮤니티(투표) 관련 Screen
  // 마이페이지 관련 Screen
};

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

      {/* 파트너 관련 Screen 그룹 */}
      <AppStack.Group>
        <AppStack.Screen
          name="PartnerCategoryScreen"
          component={PartnerCategoryScreen}
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
        />
        <AppStack.Screen
          name={"ResearchWriteScreen"}
          component={ResearchWriteScreen}
        />
        <AppStack.Screen
          name={"ResearchUploadScreen"}
          component={ResearchUploadScreen}
        />
      </AppStack.Group>

      {/* 커뮤니티(투표) 관련 Screen 그룹 */}
      {/* <AppStack.Group></AppStack.Group> */}

      {/* 마이페이지 관련 Screen 그룹 */}
      {/* <AppStack.Group></AppStack.Group> */}
    </AppStack.Navigator>
  );
}
