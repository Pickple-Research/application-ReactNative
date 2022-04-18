import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Carousel } from "@Component/React";
import { PartnerProps } from "@Object/Type";

/**
 * 파트너 광고 캐러샐입니다.
 * @author 현웅
 */
export function PartnerAdCarousel({ partners }: { partners: PartnerProps[] }) {
  return (
    <Carousel
      style={styles.carousel__container}
      contentContainerStyle={styles.carousel__contentContainer}
      data={partners}
      PageComponent={PartnerAdCarouselComponent}
    />
  );
}

const styles = StyleSheet.create({
  carousel__container: {},
  carousel__contentContainer: { paddingHorizontal: 15 },
});

/**
 * 파트너 광고 캐러샐에 사용되는 컴포넌트입니다.
 * @author 현웅
 */
export function PartnerAdCarouselComponent({ item }: { item: PartnerProps }) {
  return (
    <Container>
      <ImageContainer />
      <BottomContainer>
        <IconContainer>
          <Icon />
        </IconContainer>
        <NameTagContainer>
          <NameText>{item.name}</NameText>
          <TagContainer>
            {item.tags.splice(0, 2).map(tag => {
              return <TagText key={tag}>{`#${tag} `}</TagText>;
            })}
          </TagContainer>
        </NameTagContainer>
        {/* <FollowButton /> */}
      </BottomContainer>
    </Container>
  );
}

const Container = styled.View`
  padding: 0px 5px;
`;

const ImageContainer = styled.View`
  height: 105px;
  background-color: gray;
  border-radius: 6px;
  margin-bottom: 8px;
`;

const BottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.View`
  padding: 5px;
  margin-right: 10px;
`;

const Icon = styled.View`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  background-color: gray;
`;

const NameTagContainer = styled.View`
  justify-content: space-between;
  width: 120px;
`;

const NameText = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 6px;
`;

const TagContainer = styled.View`
  flex-direction: row;
`;

const TagText = styled.Text`
  color: ${({ theme }) => theme.color.text_skyblue};
  font-size: 12px;
  padding-right: 3px;
`;
