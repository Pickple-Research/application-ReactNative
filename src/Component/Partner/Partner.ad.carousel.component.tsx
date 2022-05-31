import React from "react";
import { StyleSheet, FlatList } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { Carousel } from "@Component/FlatList";
import { PillButton } from "@Component/Button";
import { HashTags } from "@Component/Text";
import { PartnerProps } from "@Object/Type";
import { H3 } from "src/StyledComponents/Text";

/**
 * 파트너 광고 캐러샐입니다.
 * @author 현웅
 */
export function PartnerAdCarousel({ partners }: { partners: PartnerProps[] }) {
  return (
    // <Carousel
    //   style={styles.carousel__container}
    //   contentContainerStyle={styles.carousel__contentContainer}
    //   data={partners}
    //   RenderItem={PartnerAdCarouselComponent}
    // />
    <FlatList
      data={partners}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <PartnerAdCarouselComponent partner={item} />}
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
export function PartnerAdCarouselComponent({
  partner,
}: {
  partner: PartnerProps;
}) {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <Container
      activeOpacity={1}
      onPress={() => {
        navigation.navigate("PartnerDetailScreen", { partnerId: partner.id });
      }}>
      <ImageContainer />
      <BottomContainer>
        <IconContainer>
          <Icon />
        </IconContainer>
        <NameTag__Container>
          <PartnerName>{partner.name}</PartnerName>
          <HashTags tags={partner.tags} />
        </NameTag__Container>
        <PillButton content="팔로우" type="FOLLOW" />
      </BottomContainer>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
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

const NameTag__Container = styled.View`
  justify-content: space-between;
  width: 120px;
`;

const PartnerName = styled(H3)`
  font-weight: bold;
  margin-bottom: 4px;
`;
