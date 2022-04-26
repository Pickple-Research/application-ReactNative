import React from "react";
import styled from "styled-components/native";
import { Carousel } from "@Component/FlatList";
import { ResearchTarget, ResearchGiftIcons } from "@Component/Research";
import { Chip, HashTags } from "@Component/Text";
import { ResearchProps } from "@Object/Type";
import { H2 } from "../../StyledComponents/Text";

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
        <Chip content="기업" type="PARTNER_TYPE" />
        <ResearchGiftIcons />
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

const CarouselItem__ResearchTitle = styled(H2)`
  width: 85%;
  height: 28px;
  color: black;
  font-weight: bold;
  line-height: 14px;
  margin-bottom: 10px;
`;
