import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { SectionHeaderTitle } from "@Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { ResearchGiftProps } from "@Object/Type";
import { Carousel } from "@Component/FlatList";
import { H3, BodyText } from "src/StyledComponents/Text";

/**
 * 리서치 상세정보 페이지 경품 섹션
 * @author 현웅
 */
export function ResearchDetailGift() {
  return (
    <Container>
      <SectionHeader />
      <GiftCarousel />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderTitle title="추가로 받을 수도 있어요 (경품 추첨)" />
    </SectionHeader__Container>
  );
}

function GiftCarousel() {
  const data = [
    { giftName: "AirPods Pro" },
    { giftName: "스타벅스 아이스 아메리카노우바이어" },
    { giftName: "AirPods Pro" },
  ];

  return (
    <Carousel
      data={data}
      RenderItem={GiftCarouselItem}
      contentContainerStyle={styles.carousel__contentContainer}
    />
  );
}

function GiftCarouselItem({ item }: { item: ResearchGiftProps }) {
  return (
    <GiftCarouselItem__Container>
      <GiftCarouselItem__ImgContainer />
      <GiftCarouselItem__GiftName numberOfLines={1}>
        {item.giftName}
      </GiftCarouselItem__GiftName>
      <GiftCarouselItem__Recipient>1명</GiftCarouselItem__Recipient>
    </GiftCarouselItem__Container>
  );
}

const styles = StyleSheet.create({
  carousel__container: {},
  carousel__contentContainer: {
    paddingHorizontal: 12,
  },
});

const Container = styled.View``;

const GiftCarouselItem__Container = styled.View`
  width: 140px;
  margin: 0px 6px;
`;

const GiftCarouselItem__ImgContainer = styled.View`
  height: 100px;
  background-color: gray;
  border-radius: 10px;
  margin-bottom: 8px;
`;

const GiftCarouselItem__GiftName = styled(H3)`
  color: black;
  font-weight: bold;
  margin-bottom: 4px;
`;

const GiftCarouselItem__Recipient = styled(BodyText)``;
