import React from "react";
import { TextProps } from "react-native";
import styled from "styled-components/native";

/**
 * 섹션 타이틀 텍스트입니다.
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

/**
 * more 텍스트입니다.
 * ...props를 추가한 이유는 more 버튼을 눌렀을 때 추가 기능을 수행하기 위함입니다.
 * @author 현웅
 */
export function MoreText({ ...props }: { props?: TextProps }) {
  return <More__Text {...props}>more</More__Text>;
}

const More__Text = styled.Text`
  color: ${({ theme }) => theme.color.text_purple};
  font-size: 13px;
`;
