import React from "react";
import { StyleProp } from "react-native";
import styled from "styled-components/native";
import { BodyText } from "src/StyledComponents/Text";

/**
 * @deprecated
 * 리서치 타겟 정보 리스트를 받아
 * '여성 · 20대 · 30대' 와 같은 형태로 반환합니다.
 * 추가적인 스타일 지정이 필요한 경우, style 변수를 넣어주면 됩니다.
 * @param targets 리서치 타겟의 문자열 리스트
 * @param styles 추가적인 스타일 지정
 * @author 현웅
 */
export function ResearchTarget({
  targets,
  style,
}: {
  targets: string[];
  style?: StyleProp<Text>;
}) {
  return (
    <Targets__Text style={style} numberOfLines={1}>
      {targets.join(" · ")}
    </Targets__Text>
  );
}

const Targets__Text = styled(BodyText)`
  //TODO: #DESIGN-SYSTEM
  color: #8f8f8f;
`;
