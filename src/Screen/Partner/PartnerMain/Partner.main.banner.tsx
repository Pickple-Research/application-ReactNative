import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { partnerMainScreenStyles } from "./Partner.main.screen";

export function PartnerMainBanner() {
  return (
    <View style={partnerMainScreenStyles.contentContainer}>
      <Text>광고</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
