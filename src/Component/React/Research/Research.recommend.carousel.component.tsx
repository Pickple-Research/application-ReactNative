import React from "react";
import styled from "styled-components/native";
import { Carousel } from "../Carousel.component";
import { HashTags } from "../Text.component";
import { ResearchGift } from "./Research.gift.component";
import { ResearchTarget } from "./Research.target.component";
import { Chip } from "../Text.component";
import { ResearchProps } from "@Object/Type";

/**
 * 추천 리서치 캐러샐입니다.
 * @author 현웅
 */
export function ResearchRecommendCarousel({
  researches,
}: {
  researches: ResearchProps[];
}) {
  return (
    <Carousel data={researches} RenderItem={ResearchRecommendCarouselItem} />
  );
}

export function ResearchRecommendCarouselItem({
  item,
}: {
  item: ResearchProps;
}) {
  return (
    <CarouselItem__Container>
      <CarouselItem__TagGiftContainer>
        <Chip content="기업" />
        <ResearchGift />
      </CarouselItem__TagGiftContainer>
      <HashTags tags={item.tags} style={{ marginBottom: 3 }} />
      <CarouselItem__ResearchTitle numberOfLines={2}>
        {item.title}
      </CarouselItem__ResearchTitle>
      <ResearchTarget targets={item.targets} />
    </CarouselItem__Container>
  );
}

const CarouselItem__Container = styled.View`
  width: 270px;
  padding: 10px 14px 18px 16px;
  border: 1px solid ${({ theme }) => theme.color.background_purple};
  border-radius: 12px;
  margin: 0px 6px;
`;

const CarouselItem__TagGiftContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
`;

const CarouselItem__ResearchTitle = styled.Text`
  width: 85%;
  height: 42px;
  color: black;
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 10px;
`;
