import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { ResearchListItem } from "@Component/Research";
import { Carousel } from "@Component/FlatList";
import { SectionHeaderTitle } from "@Component/Text";
import { SectionHeaderMoreContainer } from "@Component/StyledComponents";
import { useResearchStore } from "@Zustand/index";
import { globalStyles } from "../../../Style";

/**
 * 리서치 랜딩 페이지 신규 리서치 섹션
 * @author 현웅
 */
export function ResearchMainNew() {
  return (
    <Container>
      <SectionHeader />
      <ResearchTypeCarousel />
      <RecentResearches />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeaderMoreContainer>
      <SectionHeaderTitle title="신규 리서치" />
    </SectionHeaderMoreContainer>
  );
}

function ResearchTypeCarousel() {
  const tags = [
    { tagName: "전체", selected: true },
    { tagName: "설문조사", selected: false },
    { tagName: "인터뷰", selected: false },
    { tagName: "실험참여", selected: false },
    { tagName: "UIUX 리서치", selected: false },
  ];

  return (
    <Carousel
      style={styles.carousel__container}
      contentContainerStyle={styles.carousel__contentContainer}
      data={tags}
      RenderItem={ResearchTypeCarouselItem}
    />
  );
}

type ResearchTypeProps = {
  tagName: string;
  selected: boolean;
};

function ResearchTypeCarouselItem({ item }: { item: ResearchTypeProps }) {
  //TODO: selected 여부에 따라 PillButton으로 변경
  return (
    <CarouselItem__Container
      style={item.selected && styles.typeButton__Container}
      selected={item.selected}>
      <CarouselItem__Text selected={item.selected}>
        {item.tagName}
      </CarouselItem__Text>
    </CarouselItem__Container>
  );
}

function RecentResearches() {
  const exampleResearches = useResearchStore(state => state.exampleResearches);

  return (
    <RecentResearches__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      {exampleResearches.map(research => {
        return <ResearchListItem key={research.title} research={research} />;
      })}
    </RecentResearches__Container>
  );
}

const styles = StyleSheet.create({
  carousel__container: {
    marginBottom: 8,
  },

  carousel__contentContainer: {
    paddingHorizontal: 10,
  },

  typeButton__Container: {
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
});

const Container = styled.View``;

// ResearchTypeCarouselItem()
const CarouselItem__Container = styled.View<{ selected: boolean }>`
  margin: 0px 8px;
  background-color: ${({ selected }) => selected && "#444444"};
  border-radius: 100px;
`;

const CarouselItem__Text = styled.Text<{ selected: boolean }>`
  color: ${({ selected, theme }) =>
    selected ? "white" : theme.color.text_color_999};
`;

// RecentResearches()
const RecentResearches__Container = styled.View``;
