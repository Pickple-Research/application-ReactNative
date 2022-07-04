import React from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";

/**
 * 마이페이지 설정 페이지의 하위 페이지 제목에 사용되는 보라색 22px 텍스트입니다.
 * @author 현웅
 */
export function MypageFunctionText({
  text,
  style,
}: {
  text: string;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={style}>{text}</Text>;
}

const Text = styled.Text`
  color: ${({ theme }) => theme.color.purple.deep};
  font-size: 22px;
  font-weight: bold;
`;
