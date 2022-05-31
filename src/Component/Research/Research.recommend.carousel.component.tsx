import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { Carousel } from "@Component/FlatList";
import { ResearchTarget, ResearchGiftIcons } from "@Component/Research";
import { Chip, HashTags } from "@Component/Text";
import { ResearchProps } from "@Object/Type";
import { H3 } from "src/StyledComponents/Text";

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
    // <Carousel data={researches} RenderItem={ResearchRecommendCarouselItem} />
    <FlatList
      data={researches}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <ResearchRecommendCarouselItem research={item} />
      )}
    />
  );
}

export function ResearchRecommendCarouselItem({
  research,
}: {
  research: ResearchProps;
}) {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <CarouselItem__Container
      activeOpacity={1}
      onPress={() => {
        navigation.navigate("ResearchDetailScreen", {
          researchId: research.id,
        });
      }}>
      <CarouselItem__TagGiftContainer>
        <Chip content="기업" type="PARTNER_TYPE" />
        <ResearchGiftIcons />
      </CarouselItem__TagGiftContainer>
      <HashTags tags={research.tags} style={{ marginBottom: 3 }} />
      <CarouselItem__ResearchTitle numberOfLines={2}>
        {research.title}
      </CarouselItem__ResearchTitle>
      <ResearchTarget targets={research.targets} />
    </CarouselItem__Container>
  );
}

const CarouselItem__Container = styled.TouchableOpacity`
  width: 270px;
  padding: 10px 14px 18px 16px;
  border: 1px solid ${({ theme }) => theme.color.purple.mild};
  border-radius: 12px;
  margin: 0px 6px;
`;

const CarouselItem__TagGiftContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
`;

const CarouselItem__ResearchTitle = styled(H3)`
  width: 85%;
  height: 28px;
  color: black;
  font-weight: bold;
  line-height: 14px;
  margin-bottom: 10px;
`;
