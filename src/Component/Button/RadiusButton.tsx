import React from "react";
import { StyleProp, TextStyle, ViewProps, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { ThemeColors } from "@Object/Type";

/**
 * 모서리가 둥근 버튼입니다.
 * @author 현웅
 */
export function RadiusButton({
  content,
  type = "SHOW_MORE",
  style,
  fontStyle,
  ...props
}: {
  content: string;
  type?: RadiusButtonType;
  style?: StyleProp<ViewStyle>;
  fontStyle?: StyleProp<TextStyle>;
  props?: ViewProps;
}) {
  return (
    <Button__Container {...props} style={style} type={type}>
      <Button__Content style={fontStyle} type={type}>
        {content}
      </Button__Content>
    </Button__Container>
  );
}

export type RadiusButtonType = "SHOW_MORE"; // '~ 더보기' 버튼

function radiusButtonTextColor(type: RadiusButtonType, color: ThemeColors) {
  switch (type) {
    case "SHOW_MORE":
      return color.main_skyblue;
    default:
  }
}

function radiusButtonBackgroundColor(
  type: RadiusButtonType,
  color: ThemeColors,
) {
  switch (type) {
    case "SHOW_MORE":
      return color.textfield_skyblue;
    default:
  }
}

const Button__Container = styled.TouchableOpacity<{ type: RadiusButtonType }>`
  justify-content: center;
  align-items: center;
  background-color: ${({ type, theme }) =>
    radiusButtonBackgroundColor(type, theme.color)};
  padding: 12px;
  border-radius: 12px;
`;

const Button__Content = styled.Text<{ type: RadiusButtonType }>`
  color: ${({ type, theme }) => radiusButtonTextColor(type, theme.color)};
`;
