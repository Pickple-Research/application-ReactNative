import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { screenStyles } from "./Profile.landing.screen";
import { Carousel } from "@Component/FlatList";
import { globalStyles } from "src/Style";
import { H3, DetailText } from "src/StyledComponents/Text";

/**
 * 마이페이지 랜딩 페이지 이벤트 섹션
 * @author 현웅
 */
export function ProfileLandingEvent() {
  return (
    <Container style={{ ...screenStyles.border }}>
      <SectionHeader />
      <EventCarousel />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container
      style={{
        ...globalStyles.screen__horizontalPadding,
        ...screenStyles.header__margin,
      }}>
      <SectionHeader__Title>이벤트</SectionHeader__Title>
    </SectionHeader__Container>
  );
}

function EventCarousel() {
  const events: EventProps[] = [
    { title: "황금을 찾아라!", deadline: "~04.08" },
    { title: "팬케이크를 찾아라!", deadline: "~04.08" },
    { title: "뭐든 찾아라!", deadline: "~04.08" },
  ];

  return (
    <Carousel
      contentContainerStyle={styles.carousel__contentContainer}
      data={events}
      RenderItem={EventCarouselItem}
    />
  );
}

type EventProps = {
  title: string;
  deadline: string;
};

function EventCarouselItem({ item }: { item: EventProps }) {
  return (
    <EventButton__Container>
      <EventButton__ImgContainer></EventButton__ImgContainer>
      <EventButton__TitleText>{item.title}</EventButton__TitleText>
      <EventButton__DeadlineText>{item.deadline}</EventButton__DeadlineText>
    </EventButton__Container>
  );
}

const styles = StyleSheet.create({
  carousel__contentContainer: {
    paddingHorizontal: 10,
  },
});

const Container = styled.View`
  padding-bottom: 35px;
  margin-bottom: 15px;
`;

const SectionHeader__Container = styled.View``;

const SectionHeader__Title = styled(H3)``;

// EventButton()
const EventButton__Container = styled.View`
  margin: 0px 8px;
`;

const EventButton__ImgContainer = styled.View`
  width: 160px;
  height: 160px;
  background-color: gray;
  border-radius: 10px;
  margin-bottom: 12px;
`;

const EventButton__TitleText = styled(H3)`
  color: ${({ theme }) => theme.color.text_color_333};
  margin-bottom: 8px;
`;

const EventButton__DeadlineText = styled(DetailText)`
  color: ${({ theme }) => theme.color.text_color_999};
`;
