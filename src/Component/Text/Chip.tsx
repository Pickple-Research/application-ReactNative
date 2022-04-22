import React from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { ThemeColors } from "@Object/Type";

/**
 * 클릭할 수 없는, 둥근 좌우 모서리 디자인을 가진 텍스트입니다.
 * 클릭 기능이 필요한 경우 ./Button.component.tsx#PillButton 을 활용하세요.
 * @author 현웅
 */
export function Chip({
  content,
  type = "RESEARCHER_TYPE",
  style,
}: {
  content: string;
  type?: ChipType;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Chip__Text type={type} style={style}>
      {content}
    </Chip__Text>
  );
}

const Chip__Text = styled.Text<{ type: ChipType }>`
  color: ${({ type, theme }) => chipTextColor(type, theme.color)};
  background-color: ${({ type, theme }) =>
    chipBackgroundColor(type, theme.color)};
  font-size: 13px;
  font-weight: bold;
  /* padding: 3px 10px; */
  padding: ${({ type }) => chipPadding(type)};
  border-radius: 100px;
`;

/**
 * Chip의 디자인 종류
 * TODO:
 */
type ChipType = "RESEARCHER_TYPE" | "RESEARCH_TYPE";

const chipTextColor = (type: ChipType, color: ThemeColors) => {
  switch (type) {
    case "RESEARCHER_TYPE":
      return color.text_purple;
    default:
      return "white";
  }
};

const chipBackgroundColor = (type: ChipType, color: ThemeColors) => {
  switch (type) {
    case "RESEARCHER_TYPE":
      return color.pastel_purple;
    default:
      return "#444444";
  }
};

const chipPadding = (type: ChipType) => {
  switch (type) {
    case "RESEARCHER_TYPE":
      return "3px 10px";
    default:
      return "10px 15px";
  }
};
