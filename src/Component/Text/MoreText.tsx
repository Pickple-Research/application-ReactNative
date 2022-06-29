import React from "react";
import { TextProps } from "react-native";
import styled from "styled-components/native";
import { H3 } from "src/StyledComponents/Text";

/**
 * 섹션 헤더의 more 텍스트입니다.
 * onPress에는 Navigator를 이용한 이동 방식을 정의하여 넘겨주어야 합니다.
 * @author 현웅
 */
export function MoreText({
  onPress,
  props,
}: {
  onPress?: () => void;
  props?: TextProps;
}) {
  return (
    <More__Text<React.ElementType> onPress={onPress} {...props}>
      MORE
    </More__Text>
  );
}

const More__Text = styled(H3)`
  color: ${({ theme }) => theme.color.purple.text};
`;
