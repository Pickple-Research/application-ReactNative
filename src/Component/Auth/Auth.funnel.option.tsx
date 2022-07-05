import React from "react";
import styled from "styled-components/native";

/**
 * 회원가입 후 유입경로 조사 페이지에서 사용되는 선택항목 디자인입니다.
 * @author 현웅
 */
export function AuthFunnelOption({
  text,
  selected,
  onPress,
}: {
  text: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Container selected={selected} onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  );
}

const Container = styled.TouchableOpacity<{ selected: boolean }>`
  background-color: ${({ selected, theme }) =>
    selected ? theme.color.purple.pastel : theme.color.grey.white};
  padding: 9px;
  border: 1px solid ${({ theme }) => theme.color.purple.main};
  margin-bottom: 6px;
`;

const Text = styled.Text`
  //TODO: #DESIGN-SYSTEM
  color: #594e96;
`;
