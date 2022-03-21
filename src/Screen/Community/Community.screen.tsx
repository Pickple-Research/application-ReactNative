import React from "react";
import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CommunityStackScreenProp } from "../../Navigator";

type CommunityScreenProp = NativeStackScreenProps<
  CommunityStackScreenProp,
  "CommunityScreen"
>;

export function CommunityScreen({ navigation }: CommunityScreenProp) {
  return <Text>커뮤니티 메인 페이지</Text>;
}
