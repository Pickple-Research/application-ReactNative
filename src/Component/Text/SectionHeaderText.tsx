import React from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { H3 } from "src/StyledComponents/Text";

/**
 * 섹션 헤더 텍스트입니다.
 * @param title 헤더 내용
 * @param bold 볼드체 적용 여부. 기본적으로 true입니다.
 * @param style 추가 스타일
 * @author 현웅
 */
export function SectionHeaderText({
  title,
  bold = true,
  style,
}: {
  title: string;
  bold?: boolean;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <SectionHeader__Text style={style} bold={bold}>
      {title}
    </SectionHeader__Text>
  );
}

const SectionHeader__Text = styled(H3)<{ bold: boolean }>`
  color: black;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
`;
