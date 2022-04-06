import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
  MainResearchScreen, MainResearchScreenProps, 
  ResearchDetailScreen, ResearchDetailScreenProps, 
  ResearchUploadScreen, ResearchUploadScreenProps
} from "@Screen/Research";
import { BackHandler } from "react-native";

const ResearchStack = createNativeStackNavigator<ResearchStackProps>();

/**
 * 리서치 페이지가 쌓이는 스택 네비게이터입니다.
 * @author 현웅
 */
export function ResearchStackNavigator( { navigation }: any) {
  
  return (
    <ResearchStack.Navigator screenOptions={{headerTitle: ""}}>
      <ResearchStack.Screen
        name={"MainResearchScreen"}
        component={MainResearchScreen}
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


/**
 * ResearchStackNavigator의 스크린들에 사용되는 속성들을 정의합니다.
 * 이 부분의 key에 해당하는 값은 ResearchStack.Screen의 name과 일치해야 합니다.
 * @author 현웅
 */
export type ResearchStackProps = {
  MainResearchScreen: MainResearchScreenProps;
  ResearchDetailScreen: ResearchDetailScreenProps;
  ResearchUploadScreen: ResearchUploadScreenProps;
};
