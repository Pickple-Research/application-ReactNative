import React from "react";
import { StyleSheet, View } from "react-native";
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
    <Carousel
      style={styles.carouselContainer}
      data={data}
      PageComponent={BannerPage}
      showIndex
    />
  );
}

type P = {
  color: string;
  key: number;
};

function BannerPage({ item }: { item: P }) {
  return (
    <View
      style={{
        ...styles.bannerPage,
        backgroundColor: item.color,
      }}
    />
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    width: "100%",
    marginBottom: 35,
  },

  bannerPage: {
    width: "100%",
    height: 120,
  },
});
