import React from "react";
import styled from "styled-components/native";
import { CheckIcon } from "src/Component/Svg";
import { VoteOptionProps } from "src/Object/Type";
import { H3 } from "src/StyledComponents/Text";

/**
 * 투표 선택 옵션 줄입니다.
 * @author 현웅
 */
export function VoteOption({
  voteOption,
  selected,
}: {
  voteOption: VoteOptionProps;
  selected: boolean;
}) {
  return (
    <Container activeOpacity={1} selected={selected}>
      <Content>{voteOption.content}</Content>
      <SelectedIcon />
    </Container>
  );
}

function SelectedIcon() {
  return (
    <SelectedIcon__Container>
      <CheckIcon width="12" height="8" color="white" />
    </SelectedIcon__Container>
  );
}

const Container = styled.TouchableOpacity<{ selected: boolean }>`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  margin: 2px 0px;
  border: 1px solid //TODO: #DESIGN-SYSTEM
    ${({ selected, theme }) =>
      selected ? theme.color.purple.main : "#dddddd"};
  border-radius: 100px;
`;

const Content = styled(H3)``;

const SelectedIcon__Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.purple.text};
  border-radius: 100px;
`;
