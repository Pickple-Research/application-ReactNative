import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Carousel } from "@Component/FlatList";
import { Chip } from "@Component/Text";
import { PartnerProductServiceProps } from "@Object/Type";
import { H4 } from "src/StyledComponents/Text";

/**
 * 파트너 제품/서비스 캐러샐입니다.
 * @author 현웅
 */
export function PartnerProductServiceCarousel({
  productServices,
}: {
  productServices: PartnerProductServiceProps[];
}) {
  return (
    <Carousel
      style={styles.carousel__container}
      contentContainerStyle={styles.carousel__contentContainer}
      data={productServices}
      RenderItem={PartnerProductServiceCarouselItem}
    />
  );
}

export function PartnerProductServiceCarouselItem({
  item,
}: {
  item: PartnerProductServiceProps;
}) {
  return (
    <Container>
      <ImageContainer />
      <ProductServiceName__Container>
        <ProductServiceName numberOfLines={2}>{item.name}</ProductServiceName>
      </ProductServiceName__Container>
      <Chip
        content="100C"
        type="PARTNER_TYPE"
        style={{ alignSelf: "flex-start" }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  carousel__container: {},
  carousel__contentContainer: { paddingHorizontal: 12 },
});

const Container = styled.View`
  width: 120px;
  margin: 0px 4px;
`;

const ImageContainer = styled.View`
  width: 120px;
  height: 120px;
  background-color: gray;
  margin-bottom: 12px;
  border-radius: 12px;
`;

const ProductServiceName__Container = styled.View`
  justify-content: center;
  height: 28px;
  margin-bottom: 12px;
`;

const ProductServiceName = styled(H4)`
  font-weight: bold;
  line-height: 14px;
`;
