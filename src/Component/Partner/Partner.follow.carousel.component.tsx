import React from "react";
import { StyleSheet, FlatList } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { Carousel } from "@Component/FlatList";
import { PartnerProps } from "@Object/Type";
import { DetailText } from "src/StyledComponents/Text";

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
    // <Carousel
    //   style={styles.carousel__container}
    //   contentContainerStyle={styles.carousel__contentContainer}
    //   data={followingPartners}
    //   RenderItem={PartnerCarouselItem}
    // />
    <FlatList
      data={followingPartners}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <PartnerCarouselItem partner={item} />}
    />
  );
}

const styles = StyleSheet.create({
  carousel__container: {},
  carousel__contentContainer: { paddingHorizontal: 12 },
});

/**
 * 팔로우하는 파트너 캐러샐에 사용되는 컴포넌트입니다.
 * @author 현웅
 */
export function PartnerCarouselItem({ partner }: { partner: PartnerProps }) {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <Container
      activeOpacity={1}
      onPress={() => {
        navigation.navigate("PartnerDetailScreen", { partnerId: partner.id });
      }}>
      <Icon__Container>
        <Notification__Container>
          <Notification__Text>2</Notification__Text>
        </Notification__Container>
      </Icon__Container>
      <PartnerName>{partner.name}</PartnerName>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  //? notification 컴포넌트가 position: absolute 를 통해 2px만큼 솟아있기 때문에
  //? padding-top을 주지 않으면 notification 컴포넌트가 잘림.
  padding-top: 2px;
  margin: 0px 12px;
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

const Notification__Text = styled(DetailText)`
  color: white;
  font-weight: bold;
  padding-bottom: 2px;
`;

const PartnerName = styled(DetailText)`
  color: ${({ theme }) => theme.color.text_color_666};
`;
