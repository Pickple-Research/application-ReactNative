import React, { useState } from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";

/**
 * 밑줄이 쳐져 있는 TextInput입니다.
 * TODO Image를 어떻게 받을 것인가? SVG? PNG? URI?
 *
 * @author 정원제
 * @modify 현웅
 */
export function LinedTextInput({ props }: { props?: Partial<TextInputProps> }) {
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
  padding-top: 0px;
  padding-bottom: 5px;
  //TODO: DESIGN-SYSTEM
  border-bottom-color: ${({ focused }) => (focused ? "#8BBFF5" : "gray")};
  border-bottom-width: 1.5px;
`;
