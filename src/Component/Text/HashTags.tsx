import React from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { DetailText } from "../../StyledComponents/Text";

/**
 * 파트너, 혹은 리서치의 태그 목록을 받아
 * '#디자인 #기획' 과 같은 형태로 만들어 반환합니다.
 * 추가적인 스타일이 필요한 경우 style 변수에 값을 전달합니다.
 * @author 현웅
 */
export function HashTags({
  tags,
  style,
}: {
  tags: string[];
  style?: StyleProp<TextStyle>;
}) {
  return (
    <HashTags__Text style={style}>
      {tags
        .map(tag => {
          return `#${tag}`;
        })
        .join(`  `)}
    </HashTags__Text>
  );
}

const HashTags__Text = styled(DetailText)`
  color: ${({ theme }) => theme.color.main_skyblue};
  font-weight: bold;
`;
