import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ResearchMainScreen,
  ResearchMainScreenProps,
  ResearchDetailScreen,
  ResearchDetailScreenProps,
  ResearchUploadScreen,
  ResearchUploadScreenProps,
} from "@Screen/Research";

/**
 * ResearchStackNavigator의 스크린들에 사용되는 속성들을 정의합니다.
 * 이 부분의 key에 해당하는 값은 ResearchStack.Screen의 name과 일치해야 합니다.
 * @author 현웅
 */
export type ResearchStackProps = {
  ResearchMainScreen: ResearchMainScreenProps;
  ResearchDetailScreen: ResearchDetailScreenProps;
  ResearchUploadScreen: ResearchUploadScreenProps;
};

const ResearchStack = createNativeStackNavigator<ResearchStackProps>();

/**
 * 리서치 페이지가 쌓이는 스택 네비게이터입니다.
 * @author 현웅
 */
export function ResearchStackNavigator({ navigation }: any) {
  return (
    <ResearchStack.Navigator screenOptions={{ headerShown: false }}>
      <ResearchStack.Screen
        name={"ResearchMainScreen"}
        component={ResearchMainScreen}
      />
      <ResearchStack.Screen
        name={"ResearchDetailScreen"}
        component={ResearchDetailScreen}
      />
      <ResearchStack.Screen
        name={"ResearchUploadScreen"}
        component={ResearchUploadScreen}
      />
    </ResearchStack.Navigator>
  );
}
