import React from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { ThemeColors } from "@Object/Type";

/**
 * 클릭할 수 없는, 둥근 좌우 모서리 디자인을 가진 텍스트입니다.
 * 클릭이 필요한 경우 ./Button.component.tsx#PillButton 을 참고하세요.
 * @author 현웅
 */
export function Chip({
  content,
  type = "PRIMARY",
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
  font-size: 12px;
  font-weight: bold;
  padding: 3px 10px;
  border-radius: 100px;
`;

/**
 * Chip의 디자인 종류
 */
type ChipType = "PRIMARY" | "GRAY";

const chipTextColor = (type: ChipType, color: ThemeColors) => {
  switch (type) {
    case "PRIMARY":
      return color.text_purple;
    default:
      return "#EEEEEE";
  }
};

const chipBackgroundColor = (type: ChipType, color: ThemeColors) => {
  switch (type) {
    case "PRIMARY":
      return color.pastel_purple;
    default:
      return "#8F8F8F";
  }
};
