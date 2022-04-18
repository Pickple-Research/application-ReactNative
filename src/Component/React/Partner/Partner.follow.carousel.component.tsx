import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Carousel } from "@Component/React";
import { PartnerProps } from "@Object/Type";

/**
 * 유저가 팔로우하는 파트너 캐러샐입니다.
 * @author 현웅
 */
export function FollowingPartnerCarousel({
  followingPartners,
}: {
  followingPartners: PartnerProps[];
}) {
  return (
    <Carousel
      style={styles.carousel__container}
      contentContainerStyle={styles.carousel__contentContainer}
      data={followingPartners}
      PageComponent={PartnerCarouselComponent}
    />
  );
}

const styles = StyleSheet.create({
  carousel__container: {},
  carousel__contentContainer: { paddingHorizontal: 15 },
});

/**
 * 팔로우하는 파트너 캐러샐에 사용되는 컴포넌트입니다.
 * @author 현웅
 */
export function PartnerCarouselComponent({ item }: { item: PartnerProps }) {
  return (
    <Container>
      <Icon__Container>
        <Notification__Container>
          <Notification__Text>2</Notification__Text>
        </Notification__Container>
      </Icon__Container>
      <PartnerName>{item.name}</PartnerName>
    </Container>
  );
}

// PartnerButton()
const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
`;

const Icon__Container = styled.View`
  position: relative;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 25px;
`;

const Notification__Container = styled.View`
  position: absolute;
  top: -2px;
  right: -2px;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.color.main_purple};
  border-radius: 100px;
`;

const Notification__Text = styled.Text`
  color: white;
  font-size: 9px;
`;

const PartnerName = styled.Text`
  color: ${({ theme }) => theme.color.text_color_666};
  font-size: 12px;
  font-weight: bold;
`;
