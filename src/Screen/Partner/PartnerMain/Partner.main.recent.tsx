import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { screenStyles } from "./Partner.main.screen";

export function PartnerMainRecent() {
  return (
    <View style={styles.container}>
      <Text>{`최신`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
