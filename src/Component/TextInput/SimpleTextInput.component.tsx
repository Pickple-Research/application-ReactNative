import React, { useState } from "react";
import {
  StyleProp,
  ImageStyle,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from "react-native";
import styled from "styled-components/native";

type LinedTextInputType = {
  props?: Partial<TextInputProps>;
};

/**
 * 밑줄이 쳐져 있는 TextInput입니다.
 * TODO Image를 어떻게 받을 것인가? SVG? PNG? URI?
 *
 * @author 정원제
 * @modify 현웅
 */
export function LinedTextInput({ props }: LinedTextInputType) {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <TextInput<React.ElementType>
      focused={focused}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      underlineColorAndroid="transparent"
      {...props}
    />
  );
}

const TextInput = styled.TextInput<{ focused: boolean }>`
  flex: 1;
  border-bottom-color: ${({ focused }) => (focused ? "#8BBFF5" : "gray")};
  border-bottom-width: 2px;
`;
