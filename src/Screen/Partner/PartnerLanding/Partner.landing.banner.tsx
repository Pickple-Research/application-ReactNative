import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Carousel } from "@Component/FlatList";

/**
 * 파트너 랜딩 페이지 배너 섹션
 * @author 현웅
 */
export function PartnerLandingBanner() {
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
      RenderItem={BannerCarouselItem}
      fullPage
      useScrollBreak
      showIndex
    />
  );
}

type BannerPageProps = {
  color: string;
  key: number;
};

function BannerCarouselItem({ item }: { item: BannerPageProps }) {
  return <BannerPage__Container color={item.color} />;
}

const styles = StyleSheet.create({
  carouselContainer: {
    width: "100%",
    marginBottom: 35,
  },
});

const BannerPage__Container = styled.View<{ color: string }>`
  width: 100%;
  height: 120px;
  background-color: ${({ color }) => color};
`;
