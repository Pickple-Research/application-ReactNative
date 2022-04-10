import React from "react";
import { Text } from "react-native";
import { FullView } from "@Component/StyledComponents";

export function SplashScreen() {
  return (
    <FullView>
      <Text style={{ color: "black" }}>
        여기서 유저 정보 및 미리 처리할 정보가 있는지 확인하고 넘깁니다
      </Text>
    </FullView>
  );
}
