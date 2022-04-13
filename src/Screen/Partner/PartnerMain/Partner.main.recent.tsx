import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { screenStyles } from "./Partner.main.screen";

export function PartnerMainRecent() {
  return (
    <View style={screenStyles.view}>
      <Text>{`최신(UX Writing)`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
