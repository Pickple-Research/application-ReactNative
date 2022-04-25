import React from "react";
import { StyleProp, ViewStyle, TextStyle, ViewProps } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { H3 } from "../../StyledComponents/Text";

//TODO: 종류 명시
export type PillButtonType = "FOLLOW"; // 파트너 팔로우 버튼

/**
 * 알약 형태의 둥근 버튼입니다.
 * @author 현웅
 */
export function PillButton({
  content,
  type,
  style,
  fontStyle,
  ...props
}: {
  content: string;
  type: PillButtonType;
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

const pillButtonTextColor = (type: PillButtonType, theme: DefaultTheme) => {
  switch (type) {
    case "FOLLOW":
      return "white";
    default:
  }
};

const pillButtonBackgroundColor = (
  type: PillButtonType,
  theme: DefaultTheme,
) => {
  switch (type) {
    case "FOLLOW":
      return theme.color.main_skyblue;
    default:
  }
};

const PillButton__Container = styled.TouchableOpacity<{ type: PillButtonType }>`
  background-color: ${({ type, theme }) =>
    pillButtonBackgroundColor(type, theme)};
  padding: 6px 24px;
  border-radius: 100px;
`;

const PillButton__Content = styled(H3)<{ type: PillButtonType }>`
  color: ${({ type, theme }) => pillButtonTextColor(type, theme)};
`;
