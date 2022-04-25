import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Carousel } from "@Component/FlatList";
import { Category } from "@Object/Enum";
import { DetailText } from "../../StyledComponents/Text";
import CategoryIcon01 from "@Resource/svg/category-icon01.svg";

/**
 * 관심 카테고리 캐러샐입니다.
 * @author 현웅
 */
export function InterestCategoryCarousel({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <Carousel
      style={styles.carousel__container}
      contentContainerStyle={styles.carousel__contentContainer}
      data={categories}
      RenderItem={InterestCategoryCarouselItem}
    />
  );
}

const styles = StyleSheet.create({
  carousel__container: {},
  carousel__contentContainer: {
    paddingHorizontal: 10,
  },
});

/**
 * 관심 카테고리 캐러샐에 사용되는 컴포넌트입니다.
 * @author 현웅
 */
export function InterestCategoryCarouselItem({ item }: { item: Category }) {
  return (
    <Container>
      <CategoryIcon01 />
      <Category__Text>{item}</Category__Text>
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
  padding: 0px 16px;
`;

const Category__Text = styled(DetailText)`
  margin-top: 10px;
`;
