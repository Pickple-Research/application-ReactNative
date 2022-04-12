import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { partnerMainScreenStyles } from "./Partner.main.screen";

export function PartnerMainFollow() {
  return (
    <View style={partnerMainScreenStyles.contentContainer}>
      <Text>팔로우</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
