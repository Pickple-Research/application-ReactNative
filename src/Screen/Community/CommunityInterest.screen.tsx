import React from "react";
import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CommunityStackScreenProp } from "../../Navigator";

type CommunityInterestScreenProp = NativeStackScreenProps<
  CommunityStackScreenProp,
  "CommunityInterestScreen"
>;

export function CommunityInterestScreen({
  navigation,
}: CommunityInterestScreenProp) {
  return <Text>커뮤니티 관심사 페이지</Text>;
}
