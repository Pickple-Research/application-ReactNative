import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { mypageLandingScreenStyles } from "./Mypage.landing.screen";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { Carousel } from "src/Component/FlatList";
import { H4, DetailText } from "src/StyledComponents/Text";

/**
 * 마이페이지 랜딩 페이지 이벤트 섹션
 * @author 현웅
 */
export function MypageLandingEvent() {
  return (
    <Container style={{ ...mypageLandingScreenStyles.boundary }}>
      <SectionHeader />
      <EventCarousel />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeader__Text>이벤트</SectionHeader__Text>
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

const SectionHeader__Text = styled(H4)`
  color: ${({ theme }) => theme.color.grey.mild};
`;

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

const EventButton__TitleText = styled(H4)`
  color: ${({ theme }) => theme.color.grey.deep};
  margin-bottom: 8px;
`;

const EventButton__DeadlineText = styled(DetailText)`
  color: ${({ theme }) => theme.color.grey.mild};
`;
