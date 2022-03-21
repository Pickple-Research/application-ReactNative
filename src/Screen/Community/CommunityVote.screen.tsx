import React from "react";
import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CommunityStackScreenProp } from "../../Navigator";

type CommunityVoteScreenProp = NativeStackScreenProps<
  CommunityStackScreenProp,
  "CommunityVoteScreen"
>;

export function CommunityVoteScreen({ navigation }: CommunityVoteScreenProp) {
  return <Text>커뮤니티 투표 페이지</Text>;
}
