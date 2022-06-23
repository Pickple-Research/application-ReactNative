import React from "react";
import { StyleProp, ViewStyle, ViewProps } from "react-native";
import styled from "styled-components/native";

/**
 * 핫투표, 인기투표, 최신투표 등
 * 투표 리스트 콘텐츠를 감쌀 때 사용되는,
 * 그림자 이펙트가 있는 Container입니다.
 * @author 현웅
 */
export function VoteListContainer({
  children,
  style,
  props,
}: {
  //TODO: (children 타입에 any를 주지 않는 경우)
  //TODO: .map()을 이용하여 랜더링한 컴포넌트를 VotesContainer의
  //TODO: 직접 자손으로 줄 경우 (해석이 잘 안 되는) 에러가 발생합니다.
  //TODO: 당분간 any를 줘야하겠습니다.
  children: JSX.Element | JSX.Element[] | any;
  style?: StyleProp<ViewStyle>;
  props?: ViewProps;
}) {
  return (
    <Container<React.ElementType> style={style} {...props}>
      {children}
    </Container>
  );
}

const Container = styled.View`
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid ${({ theme }) => theme.color.purple.mild};
  border-radius: 10px;
`;
