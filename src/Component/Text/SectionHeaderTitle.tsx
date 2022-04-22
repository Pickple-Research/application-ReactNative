import React from "react";
import styled from "styled-components/native";

/**
 * 섹션 헤더의 타이틀 텍스트입니다.
 * ex. 홈 랜딩 페이지에서 '리서치', 'HOT 투표', '파트너' 에 해당하는 단어 스타일
 * @author 현웅
 */
export function SectionHeaderTitle({ title }: { title: string }) {
  return <SectionHeaderTitle__Text>{title}</SectionHeaderTitle__Text>;
}

const SectionHeaderTitle__Text = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;
