import React from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { BodyText } from "src/StyledComponents/Text";

/**
 * Auth Screen들에서 사용하는 경고 텍스트입니다.
 * visible 은 기본적으로 false 로, 보이지 않습니다.
 * @reference src/Component/TextInput/RoundTextInput.tsx
 * @author 현웅
 */
export function AuthCautionText({
  text,
  visible = false,
  color = "RED",
  style,
}: {
  text: string;
  visible?: boolean;
  color?: "RED" | "BLUE";
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text<React.ElementType>
      style={[{ opacity: visible ? 1 : 0 }, style]}
      color={color}>
      {text}
    </Text>
  );
}

const Text = styled(BodyText)<{ color: "RED" | "BLUE" }>`
  color: ${({ color, theme }) => {
    switch (color) {
      case "RED":
        return theme.color.red.warning;
      case "BLUE":
        return theme.color.purple.deep;
    }
  }};
  margin-top: 4px;
`;
