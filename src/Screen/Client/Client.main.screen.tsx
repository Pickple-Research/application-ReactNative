import React from "react";
import { Text, View } from "react-native";
import { popBackHandler } from "@Util/backHandler.util";

export function MainClientScreen({ navigation }: any) {
  popBackHandler(navigation)
  return (
    <View>
      <Text>안녕~!</Text>
    </View>
  );
}

export type MainClientScreenProps = {
  
}