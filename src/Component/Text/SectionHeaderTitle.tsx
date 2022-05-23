import React from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { H2 } from "src/StyledComponents/Text";

/**
 * 섹션 헤더의 타이틀 텍스트입니다.
 * ex. 홈 랜딩 페이지에서 '리서치', 'HOT 투표', '파트너' 에 해당하는 단어 스타일
 * @author 현웅
 */
export function SectionHeaderTitle({
  title,
  style,
}: {
  title: string;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <SectionHeaderTitle__Text style={style}>{title}</SectionHeaderTitle__Text>
  );
}

const SectionHeaderTitle__Text = styled(H2)`
  color: black;
  font-weight: bold;
`;
