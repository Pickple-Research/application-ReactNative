import React from "react";
import { StyleProp, ViewStyle, TextStyle, ViewProps } from "react-native";
import styled from "styled-components/native";
import { ThemeColors } from "@Object/Type";

/**
 * 알약 형태의, 모서리가 둥근 버튼입니다.
 * @author 현웅
 */
export function PillButton({
  content,
  type = "FOLLOW",
  style,
  fontStyle,
  ...props
}: {
  content: string;
  type?: PillButtonType;
  style?: StyleProp<ViewStyle>;
  fontStyle?: StyleProp<TextStyle>;
  props?: ViewProps;
}) {
  return (
    <PillButton__Container {...props} style={style} type={type}>
      <PillButton__Content style={fontStyle} type={type}>
        {content}
      </PillButton__Content>
    </PillButton__Container>
  );
}

export type PillButtonType =
  | "FOLLOW" // 팔로우 버튼
  | "GRAY";

function pillButtonTextColor(type: PillButtonType, color: ThemeColors) {
  switch (type) {
    case "FOLLOW":
      return "white";
    default:
  }
}

function pillButtonBackgroundColor(type: PillButtonType, color: ThemeColors) {
  switch (type) {
    case "FOLLOW":
      return color.main_skyblue;
    default:
  }
}

const PillButton__Container = styled.TouchableOpacity<{ type: PillButtonType }>`
  background-color: ${({ type, theme }) =>
    pillButtonBackgroundColor(type, theme.color)};
  padding: 6px 24px;
  border-radius: 100px;
`;

const PillButton__Content = styled.Text<{ type: PillButtonType }>`
  color: ${({ type, theme }) => pillButtonTextColor(type, theme.color)};
`;
