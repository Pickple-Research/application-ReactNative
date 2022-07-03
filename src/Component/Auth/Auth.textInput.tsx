import React from "react";
import { StyleProp, TextStyle, TextInputProps } from "react-native";
import styled from "styled-components/native";

/**
 * Auth Screen들에서 사용하는 TextInput입니다.
 * @reference src/Component/TextInput/RoundTextInput.tsx
 * @author 현웅
 */
export function AuthTextInput({
  style,
  props,
}: {
  style?: StyleProp<TextStyle>;
  props?: Partial<TextInputProps>;
}) {
  return (
    <Input<React.ElementType> style={style} spellCheck={false} {...props} />
  );
}

const Input = styled.TextInput`
  font-size: ${({ theme }) => theme.size.header3};
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.color.purple.text};
  border-radius: 10px;
`;
