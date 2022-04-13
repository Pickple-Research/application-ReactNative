import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { screenStyles } from "./Partner.main.screen";

export function PartnerMainCategory() {
  return (
    <View style={screenStyles.view}>
      <Text>카테고리별 파트너</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
