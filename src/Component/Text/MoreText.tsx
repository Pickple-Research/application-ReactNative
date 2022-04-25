import React from "react";
import { TextProps } from "react-native";
import styled from "styled-components/native";
import { H2 } from "../../StyledComponents/Text";

/**
 * 섹션 헤더의 more 텍스트입니다.
 * 눌렀을 때의 동작을 지정하려면 다음과 같이 설정합니다:
 * ```
 * <MoreText props={{ onPress:()=>{navigation.navigate("...")} }} />
 * ```
 * @author 현웅
 */
export function MoreText({ ...props }: { props?: TextProps }) {
  return <More__Text {...props}>more</More__Text>;
}

const More__Text = styled(H2)`
  color: ${({ theme }) => theme.color.text_purple};
`;
