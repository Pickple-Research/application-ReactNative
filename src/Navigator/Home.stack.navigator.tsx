import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeMainScreen, HomeMainScreenProps } from "@Screen/Home";
import {
  ResearchDetailScreen,
  ResearchDetailScreenProps,
} from "src/Screen/Research";
import {
  PartnerDetailScreen,
  PartnerDetailScreenProps,
} from "src/Screen/Partner";

export type HomeStackProps = {
  HomeMainScreen: HomeMainScreenProps;
  ResearchDetailScreen: ResearchDetailScreenProps;
  PartnerDetailScreen: PartnerDetailScreenProps;
};

export const HomeStack = createNativeStackNavigator<HomeStackProps>();

export function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={"HomeMainScreen"} component={HomeMainScreen} />
      <HomeStack.Screen
        name={"ResearchDetailScreen"}
        component={ResearchDetailScreen}
      />
      <HomeStack.Screen
        name="PartnerDetailScreen"
        component={PartnerDetailScreen}
        // options={{
        //   headerShown: true,
        //   header: PartnerDetailScreenHeader,
        // }}
      />
    </HomeStack.Navigator>
  );
}
