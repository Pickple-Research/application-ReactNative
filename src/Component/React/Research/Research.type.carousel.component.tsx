import React, { useState } from "react";
import styled from "styled-components/native";
import { Carousel } from "../Carousel.component";
import { Chip } from "../Text.component";
import { ResearchType } from "@Object/Enum";
import { allResearchTypes } from "../../../Object/Enum";

/**
 * 리서치 타입 선택 캐러샐입니다.
 * @author 현웅
 */
export function ResearchTypeCarousel() {
  return null;
}

type ResearchTypeCarouselItemProp = {
  type: ResearchType;
  selectedType: ResearchType;
  onPressEnd: (type: ResearchType) => void; //? 눌렀을 때 동작시킬 setState 함수
};

// function ResearchTypeCarouselItem({
//     item,

// }: {
//     item: ResearchType;
// }) {
//     if (item === selectedType) {
//         return <Chip content={item.type} />;
//     }
//     return <Type__Text>{item.type}</Type__Text>;
// }

// const Type__Text = styled.Text`
//   padding: 0px 12px;
// `;
