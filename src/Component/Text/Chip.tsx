import React from "react";
import { StyleProp, TextStyle } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { DetailText } from "src/StyledComponents/Text";

/**
 * Chip 종류
 * @author 현웅
 */
type ChipType =
  | "PARTNER_TYPE"
  | "RESEARCH_TYPE" // 리서치 타입 선택된 경우 사용되는 스타입 (용처: Research.type.carousel.tsx)
  | "PARTNER_NEW_RESEARCH" // 파트너 새 리서치 (용처: Partner.category.partners.tsx)
  | "CREDIT_AVAILABLE" // 참여가능한 리서치 크레딧
  | "CREDIT_UNAVAILABLE"; // 참여했거나 만료된 리서치 크레딧

/**
 * 클릭할 수 없는, 알약 형태의 디자인을 가진 텍스트입니다.
 * 클릭 기능이 필요한 경우 ./Button.component.tsx#PillButton 을 활용하세요.
 * @author 현웅
 */
export function Chip({
  content,
  type,
  style,
}: {
  content: string;
  type: ChipType;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Chip__Text type={type} style={style}>
      {content}
    </Chip__Text>
  );
}

const Chip__Text = styled(DetailText)<{ type: ChipType }>`
  color: ${({ type, theme }) => chipTextColor(type, theme)};
  background-color: ${({ type, theme }) => chipBackgroundColor(type, theme)};
  font-weight: bold;
  padding: ${({ type }) => chipPadding(type)};
  border-radius: 100px;
`;

//TODO: 스타일별로 나누지 말고 타입 별로 나누는 게 좋을 것 같습니다
const chipTextColor = (type: ChipType, theme: DefaultTheme) => {
  switch (type) {
    case "PARTNER_TYPE":
      return theme.color.text_skyblue;

    case "RESEARCH_TYPE":
      return "white";

    case "PARTNER_NEW_RESEARCH":
    case "CREDIT_AVAILABLE":
      return theme.color.text_skyblue;

    case "CREDIT_UNAVAILABLE":
      return theme.color.text_purple;

    default:
      return theme.color.text_skyblue;
  }
};

const chipBackgroundColor = (type: ChipType, theme: DefaultTheme) => {
  switch (type) {
    case "PARTNER_TYPE":
      return theme.color.pastel_skyblue;

    case "RESEARCH_TYPE":
      return "#444444";

    case "PARTNER_NEW_RESEARCH":
    case "CREDIT_AVAILABLE":
      return theme.color.pastel_skyblue;

    case "CREDIT_UNAVAILABLE":
      return "#444444";

    default:
      return theme.color.pastel_skyblue;
  }
};

const chipPadding = (type: ChipType) => {
  switch (type) {
    case "PARTNER_TYPE":
      return "3px 10px";

    case "RESEARCH_TYPE":
      return "10px 15px";

    case "PARTNER_NEW_RESEARCH":
      return "8px 12px";

    case "CREDIT_AVAILABLE":
    case "CREDIT_UNAVAILABLE":
      return "3px 10px";

    default:
      return "3px 10px";
  }
};
