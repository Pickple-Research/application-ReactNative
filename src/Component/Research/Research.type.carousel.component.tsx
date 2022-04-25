import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Carousel } from "@Component/FlatList";
import { Chip } from "@Component/Text";
import { ResearchType } from "@Object/Enum";
import { allResearchTypes } from "../../Object/Enum";
import { H3 } from "../../StyledComponents/Text";

/**
 * 리서치 타입을 보여주고 선택할 수 있는 캐러샐입니다.
 * 선택된 리서치 타입 상태와 리서치 타입 상태 선택 함수는
 * 이 캐러샐을 호출하는 함수에서 정의하고 넘겨주어야 합니다.
 *
 * @example
 * import React, { useState } from "react"
 * import { ResearchTypeCarousel } from "@Component/Research"
 * import { ResearchType } from "@Object/Enum"
 *
 * function ResearchTypes(){
 *  const [selectedType, setSelectedType] = useState<ResearchType>(ResearchType.ALL)
 *
 *  return(
 *    <ResearchTypeCarousel
 *      selectedType={selectedType}
 *      setSelectedType={setSelectedType}
 *    />
 *  )
 * }
 *
 * @author 현웅
 */
export function ResearchTypeCarousel({
  selectedType,
  setSelectedType,
}: {
  selectedType: ResearchType;
  setSelectedType: (type: ResearchType) => void;
}) {
  /**
   * 리서치 타입 캐러샐 컴포넌트입니다.
   * ResearchTypeCarousel()가 인자로 받아온 selectedType을 공유하기 위해
   * ResearchTypeCarousel() 안쪽에 정의되어 있습니다.
   * @author 현웅
   */
  function ResearchTypeCarouselItem({ item }: { item: ResearchType }) {
    if (item === selectedType) {
      return <Chip content={item} type={"RESEARCH_TYPE"} />;
    }
    return (
      <Type__Text
        onPress={() => {
          setSelectedType(item);
        }}>
        {item}
      </Type__Text>
    );
  }

  return (
    <Carousel
      style={styles.carousel__container}
      contentContainerStyle={styles.carousel__contentContainer}
      data={allResearchTypes}
      RenderItem={ResearchTypeCarouselItem}
    />
  );
}

const styles = StyleSheet.create({
  carousel__container: {},
  carousel__contentContainer: {
    paddingHorizontal: 15,
  },
});

const Type__Text = styled(H3)`
  padding: 0px 12px;
`;
