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
import { PartnerDetailScreenHeader } from "@Screen/Partner/PartnerDetail/Partner.detail.screenHeader";

export type PartnerStackProps = {
  PartnerMainScreen: PartnerMainScreenProps;
  PartnerCategoryScreen: PartnerCategoryScreenProps;
  PartnerDetailScreen: PartnerDetailScreenProps;
};

export const PartnerStack = createNativeStackNavigator<PartnerStackProps>();

export function PartnerStackNavigator() {
  return (
    <PartnerStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <PartnerStack.Screen
        name="PartnerMainScreen"
        component={PartnerMainScreen}
      /> */}
      {/* <PartnerStack.Screen
        name="PartnerCategoryScreen"
        component={PartnerCategoryScreen}
        /> */}
      <PartnerStack.Screen
        name="PartnerDetailScreen"
        component={PartnerDetailScreen}
        options={{
          headerShown: true,
          header: PartnerDetailScreenHeader,
        }}
      />
    </PartnerStack.Navigator>
  );
}
