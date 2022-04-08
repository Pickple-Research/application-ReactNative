import React from "react";
import { Text, View } from "react-native";
import { popBackHandler } from "@Util/backHandler.util";

export function ClientCategoryScreen({ navigation }: any) {
  popBackHandler(navigation)
  return (
    <View>
      <Text>ClientCategoryScreen</Text>
    </View>
  );
}

export type ClientCategoryScreenProps = {
  
}