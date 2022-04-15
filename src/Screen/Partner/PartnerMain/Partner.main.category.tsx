import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { screenStyles } from "./Partner.main.screen";
import { theme } from "@Theme/index";
import CategoryIcon01 from "@Resource/svg/category-icon01.svg";
import CategoryIcon02 from "@Resource/svg/category-icon02.svg";
import CategoryIcon03 from "@Resource/svg/category-icon03.svg";

export function PartnerMainCategory() {
  return (
    <View style={styles.container}>
      <Header />
      <CategoryList />
    </View>
  );
}

function Header() {
  return (
    <View style={{ ...screenStyles.padding, ...screenStyles.headerContainer }}>
      <Text style={screenStyles.headerTitleText}>카테고리별 파트너</Text>
    </View>
  );
}

function CategoryList() {
  return (
    <View style={styles.categoryListContainer}>
      <CategoryButton index={1} />
      <CategoryButton index={2} />
      <CategoryButton index={3} />
      <CategoryButton index={4} />
      <CategoryButton index={5} />
      <CategoryButton index={6} />
      <CategoryButton index={7} />
      <CategoryButton index={8} />
      <CategoryButton index={9} />
      <CategoryButton index={10} />
    </View>
  );
}

function CategoryButton({ index }: { index: number }) {
  return (
    <View style={styles.categoryButtonContainer}>
      <View style={styles.categoryButtonIconContainer}>
        <CategoryIcon index={index} />
      </View>
      <Text style={styles.categoryButtonText}>{`카테고리${index}`}</Text>
    </View>
  );
}

function CategoryIcon({ index }: { index: number }) {
  const left = index % 3;
  switch (left) {
    case 1:
      return <CategoryIcon01 />;
    case 2:
      return <CategoryIcon02 />;
    default:
      return <CategoryIcon03 />;
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  headerContainer: {
    marginBottom: 20,
  },
  headerTitleText: {},

  categoryListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
  },

  categoryButtonContainer: {
    alignItems: "center",
    width: "20%",
    paddingBottom: 30,
  },
  categoryButtonIconContainer: {
    marginBottom: 12,
  },
  categoryButtonIcon: {},
  categoryButtonText: {
    fontSize: 10,
    fontWeight: "bold",
    color: theme.color.text_color_666,
  },
});
