import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ClientMainScreen,
  ClientMainScreenProps,
  ClientCategoryScreen,
  ClientCategoryScreenProps,
  ClientDetailScreen,
  ClientDetailScreenProps,
} from "@Screen/Client";

export const ClientStack = createNativeStackNavigator<ClientStackProps>();

export function ClientStackNavigator() {
  return (
    <ClientStack.Navigator screenOptions={{ headerTitle: "" }}>
      <ClientStack.Screen
        name="ClientMainScreen"
        component={ClientMainScreen}
      />
      <ClientStack.Screen
        name="ClientCategoryScreen"
        component={ClientCategoryScreen}
      />
      <ClientStack.Screen
        name="ClientDetailScreen"
        component={ClientDetailScreen}
      />
    </ClientStack.Navigator>
  );
}
export type ClientStackProps = {
  ClientMainScreen: ClientMainScreenProps;
  ClientCategoryScreen: ClientCategoryScreenProps;
  ClientDetailScreen: ClientDetailScreenProps;
};
