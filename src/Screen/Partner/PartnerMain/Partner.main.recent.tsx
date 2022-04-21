import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { SectionHeaderContainer } from "@Component/StyledComponents";
import { SectionHeaderTitle } from "@Component/React";
import { Carousel } from "@Component/React";
import { PartnerListItem } from "@Component/React/Partner";
import { globalStyles } from "../../../Style";
import { usePartnerStore } from "@Zustand/index";

/**
 * 파트너 랜딩 페이지 최신 파트너 섹션
 * @author 현웅
 */
export function PartnerMainRecent() {
  return (
    <Container>
      <SectionHeader />
      <PartnerTypeCarousel />
      <RecentPartners />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeaderContainer>
      <SectionHeaderTitle title="최신" />
    </SectionHeaderContainer>
  );
}

function PartnerTypeCarousel() {
  const data = [
    { title: "스타트업", selected: true },
    { title: "학회", selected: true },
    { title: "랩실", selected: false },
  ];

  return (
    <Carousel
      data={data}
      RenderItem={PartnerTypeCarouselItem}
      style={styles.carousel}
      contentContainerStyle={{ ...globalStyles.screen__horizontalPadding }}
    />
  );
}

function PartnerTypeCarouselItem({
  item,
}: {
  item: { title: string; selected: boolean };
}) {
  return (
    <CarouselItem__Container selected={item.selected}>
      <CarouselItem__Text selected={item.selected}>
        {item.title}
      </CarouselItem__Text>
    </CarouselItem__Container>
  );
}

function RecentPartners() {
  const examplePartner = usePartnerStore(state => state.examplePartner);

  return (
    <RecentPartners__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      <PartnerListItem partner={examplePartner} />
    </RecentPartners__Container>
  );
}

const styles = StyleSheet.create({
  carousel: {
    marginBottom: 15,
  },
});

const Container = styled.View``;

const CarouselItem__Container = styled.TouchableOpacity<{ selected: boolean }>`
  background-color: ${({ selected, theme }) =>
    selected ? theme.color.pastel_skyblue : theme.color.inactive_button_gray};
  padding: 8px 15px;
  margin-right: 8px;
  border-radius: 6px;
`;

const CarouselItem__Text = styled.Text<{ selected: boolean }>`
  color: ${({ selected, theme }) =>
    selected ? theme.color.text_skyblue : theme.color.text_color_bbb};
  font-weight: bold;
`;

// RecentPartners()
const RecentPartners__Container = styled.View``;
