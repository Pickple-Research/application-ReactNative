import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { partnerMainScreenStyles } from "./Partner.main.screen";

export function PartnerMainSearch() {
  return (
    <View style={partnerMainScreenStyles.contentContainer}>
      <Text>검색창</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
