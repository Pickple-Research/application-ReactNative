import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Carousel } from "@Component/React";

export function PartnerMainBanner() {
  const data = [
    { key: 0, color: "red" },
    { key: 1, color: "orange" },
    { key: 2, color: "yellow" },
    { key: 3, color: "green" },
    { key: 4, color: "blue" },
    { key: 5, color: "navy" },
    { key: 6, color: "purple" },
  ];

  return (
    <View style={styles.container}>
      <Carousel data={data} pageWidth={300} PageComponent={BannerPage} />
    </View>
  );
}

function BannerPage({ item }: { item: { color: string; key: number } }) {
  return (
    <View
      style={{
        width: 300,
        height: styles.container.height,
        backgroundColor: item.color,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
});
