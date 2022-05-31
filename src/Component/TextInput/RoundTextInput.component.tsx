import React, { useState } from "react";
import { StyleProp, TextStyle, TextInputProps } from "react-native";
import styled from "styled-components/native";

/**
 * 모서리가 둥근 TextInput입니다.
 * TextInputProps에 해당하는 값들을 props 인자에 한 데 모아 지정할 수 있습니다.
 *
 * @example
 * function Example(){
 *  const [titleInput, setTitleInput] = useState<string>("")
 *  function onTextChange(e:){
 *  }
 *
 *  return (
 *    <RoundTextInput
 *      props={{
 *        placeHolder: "제목을 입력해주세요",
 *        value: titleInput,
 *        onChangeText: setTitleInput
 *      }}
 *    />
 *  )
 * }
 *
 * @author 정원제
 * @modify 현웅
 */
export function RoundTextInput({
  style,
  props,
}: {
  style?: StyleProp<TextStyle>;
  props?: Partial<TextInputProps>;
}) {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <RoundTextInput__Container<React.ElementType>
      style={style}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      spellCheck={false}
      focused={focused}
      {...props}
    />
  );
}

const RoundTextInput__Container = styled.TextInput<{ focused: boolean }>`
  flex: 1;
  font-size: ${({ theme }) => theme.size.header3};
  padding: 5px 12px;
  border-radius: 10px;
  border: 1px solid ${({ focused }) => (focused ? "#8BBFF5" : "#CCCCCC")};
`;
