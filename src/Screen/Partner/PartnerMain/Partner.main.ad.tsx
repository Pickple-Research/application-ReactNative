import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { screenStyles } from "./Partner.main.screen";
import { Carousel } from "@Component/React";
import { theme } from "@Theme/index";
import styled from "styled-components/native";

/**
 * 파트너 랜딩 페이지 광고 섹션
 * @author 현웅
 */
export function PartnerMainAd() {
  return (
    <View style={styles.container}>
      <Header />
      <PartnersAdList />
      <Container focused={false} />
    </View>
  );
}

const Container = styled.View<{ focused: boolean }>`
  width: 80px;
  height: 80px;
  background-color: ${({ focused, theme }) =>
    focused ? theme.color.background_purple : theme.color.main_skyblue};
`;

function Header() {
  return (
    <View
      style={{
        ...screenStyles.padding,
        ...screenStyles.headerContainer,
        ...styles.header__container,
      }}>
      <Text style={screenStyles.headerTitleText}>광고</Text>
      <Text style={screenStyles.headerMoreText}>MORE</Text>
    </View>
  );
}

function PartnersAdList() {
  const data = [
    {
      partnerName: "A 스타트업",
      tags: ["디자인", "기획", "마케팅"],
      color: "red",
    },
    { partnerName: "B 스타트업", tags: ["기획", "개발"], color: "orange" },
    { partnerName: "C 스타트업", tags: ["디자인", "기획"], color: "yellow" },
    { partnerName: "D 스타트업", tags: ["디자인"], color: "green" },
    { partnerName: "E 스타트업", tags: ["마케팅"], color: "blue" },
    { partnerName: "F 스타트업", tags: ["디자인", "마케팅"], color: "navy" },
    { partnerName: "G 스타트업", tags: ["개발", "마케팅"], color: "purple" },
  ];

  return (
    <Carousel
      style={styles.carouselContainer}
      contentContainerStyle={styles.carouselContentContainer}
      data={data}
      PageComponent={PartnerAdButton}
      fullPage={false}
      useScrollBreak={false}
    />
  );
}

type PartnerAd = {
  partnerName: string;
  tags: string[];
  color: string;
};

/**
 * 캐러샐에 들어갈 광고 버튼 디자인
 * @author 현웅
 */
function PartnerAdButton({ item }: { item: PartnerAd }) {
  return (
    <View style={styles.adButton__container}>
      <View style={styles.adButton__imageContainer}></View>
      <View style={styles.adButton__bottomContainer}>
        <View style={styles.adButton__iconContainer}>
          <View
            style={{
              ...styles.adButton__icon,
              backgroundColor: item.color,
            }}
          />
        </View>
        <View style={styles.adButton__nameTagContainer}>
          <Text style={styles.adButton__nameText}>{item.partnerName}</Text>
          <View style={styles.adButton__tagContainer}>
            {item.tags.splice(0, 2).map(tag => {
              return (
                <Text
                  style={styles.adButton__tagText}
                  key={tag}>{`#${tag} `}</Text>
              );
            })}
          </View>
        </View>
        <Button title={"팔로우"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 45,
  },

  // Header()
  header__container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // PartnerAdList()
  carouselContainer: {},
  carouselContentContainer: { paddingHorizontal: 20 },

  // PartnerAdButton()
  adButton__container: {
    paddingHorizontal: 3,
  },
  adButton__imageContainer: {
    height: 105,
    backgroundColor: "gray",
    borderRadius: 6,
    marginBottom: 8,
  },
  adButton__bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "black",
  },
  adButton__iconContainer: {
    padding: 5,
    marginRight: 10,
  },
  adButton__icon: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  adButton__nameTagContainer: {
    justifyContent: "space-between",
    width: 160,
  },
  adButton__nameText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 6,
  },
  adButton__tagContainer: {
    flexDirection: "row",
  },
  adButton__tagText: {
    color: theme.color.text_skyblue,
    fontSize: 12,
    paddingLeft: 3,
  },
  adButton__followButton: {},
});
