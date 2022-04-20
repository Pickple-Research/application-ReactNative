import React from "react";
import { StyleProp } from "react-native";
import styled from "styled-components/native";

/**
 * 리서치 태그 정보 리스트를 받아
 * '#마케팅 #스타트업' 과 같은 형태로 반환합니다.
 * 추가적인 스타일이 필요한 경우, style 변수를 넣어주면 됩니다.
 * @author 현웅
 */
export function ResearchTag({
  tags,
  style,
}: {
  tags: string[];
  style?: StyleProp<Text>;
}) {
  return (
    <Tags__Text style={style}>
      {tags
        .map(tag => {
          return `#${tag}`;
        })
        .join(" ")}
    </Tags__Text>
  );
}

const Tags__Text = styled.Text`
  color: ${({ theme }) => theme.color.text_purple};
`;
