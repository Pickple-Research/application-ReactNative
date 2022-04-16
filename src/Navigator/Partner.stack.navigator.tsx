import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  PartnerMainScreen,
  PartnerMainScreenProps,
  PartnerCategoryScreen,
  PartnerCategoryScreenProps,
  PartnerDetailScreen,
  PartnerDetailScreenProps,
} from "@Screen/Partner";

export type PartnerStackProps = {
  PartnerMainScreen: PartnerMainScreenProps;
  PartnerCategoryScreen: PartnerCategoryScreenProps;
  PartnerDetailScreen: PartnerDetailScreenProps;
};

export const PartnerStack = createNativeStackNavigator<PartnerStackProps>();

export function PartnerStackNavigator() {
  return (
    <PartnerStack.Navigator screenOptions={{ headerShown: false }}>
      <PartnerStack.Screen
        name="PartnerMainScreen"
        component={PartnerMainScreen}
      />
      <PartnerStack.Screen
        name="PartnerCategoryScreen"
        component={PartnerCategoryScreen}
      />
      <PartnerStack.Screen
        name="PartnerDetailScreen"
        component={PartnerDetailScreen}
      />
    </PartnerStack.Navigator>
  );
}
