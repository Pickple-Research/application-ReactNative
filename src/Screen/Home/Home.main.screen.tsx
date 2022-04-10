import React from "react";
import { Text, View } from "react-native";
import { LinearGradeintContainer } from "@Component/React/LinearGradeintContainer.component";
import { color } from "@Theme/Value";

export function HomeMainScreen() {
  return (
    <View>
      <LinearGradeintContainer colors={color.purple_blue_gradient}>
        <Text>Home Main Screen - This is gradient test</Text>
      </LinearGradeintContainer>
    </View>
  );
}

export type HomeMainScreenProps = {};
