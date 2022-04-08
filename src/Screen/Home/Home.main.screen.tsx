import { color } from "@Theme/Value";
import { LinearGradeintContainer } from "@Component/React/LinearGradeintContainer.component";
import React from "react";
import { Image, Text, View } from "react-native";

export function MainHomeScreen() {
  return (
    <View>
      <LinearGradeintContainer
        colors={color.purple_blue_gradient}>
        <Text>This is gradient test</Text>
      </LinearGradeintContainer>
    </View>
  );
}

export type MainHomeScreenProps = {
  
}