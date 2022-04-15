import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { screenStyles } from "./Partner.main.screen";
import { Carousel } from "@Component/React";
import { theme } from "@Theme/index";

export function PartnerMainFollow() {
  return (
    <View style={styles.container}>
      <Header />
      <FollowingPartnersList />
    </View>
  );
}

function Header() {
  return (
    <View
      style={{
        ...screenStyles.padding,
        ...screenStyles.headerContainer,
        ...styles.headerContainer,
      }}>
      <Text style={screenStyles.headerTitleText}>팔로우</Text>
      <Text style={screenStyles.headerMoreText}>MORE</Text>
    </View>
  );
}

function FollowingPartnersList() {
  const data = [
    { partnerName: "스타트업1", color: "red" },
    { partnerName: "스타트업2", color: "orange" },
    { partnerName: "스타트업3", color: "yellow" },
    { partnerName: "스타트업4", color: "green" },
    { partnerName: "스타트업5", color: "blue" },
    { partnerName: "스타트업6", color: "navy" },
    { partnerName: "스타트업7", color: "purple" },
  ];

  return (
    <Carousel
      style={styles.carouselContainer}
      contentContainerStyle={styles.carouselContentContainer}
      data={data}
      PageComponent={PartnerButton}
      fullPage={false}
      useScrollBreak={false}
    />
  );
}

type Partner = {
  partnerName: string;
  color: string;
};

/**
 * 캐러샐에 들어갈 버튼 디자인
 * @author 현웅
 */
function PartnerButton({ item }: { item: Partner }) {
  return (
    <View style={styles.partnerButtonContainer}>
      <View
        style={{ ...styles.partnerButtonImage, backgroundColor: item.color }}
      />
      <Text style={styles.partnerButtonText}>{item.partnerName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 45,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitleText: {},

  carouselContainer: {},
  carouselContentContainer: { paddingHorizontal: 15 },

  partnerButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  partnerButtonImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: 25,
  },
  partnerButtonText: {
    color: theme.color.text_color_666,
    fontSize: 12,
    fontWeight: "bold",
  },
});
