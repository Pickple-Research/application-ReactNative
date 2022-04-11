import React from "react";
import { Text, View } from "react-native";
import { LinearGradeintContainer } from "@Component/React/index";
import { FullView } from "@Component/StyledComponents";
import { theme } from "@Theme/index";

export function HomeMainScreen() {
  return (
    <FullView>
      <LinearGradeintContainer colors={theme.color.purple_blue_gradient}>
        <Text>Home Main Screen - This is gradient test</Text>
      </LinearGradeintContainer>
    </FullView>
  );
}

export type HomeMainScreenProps = {};
