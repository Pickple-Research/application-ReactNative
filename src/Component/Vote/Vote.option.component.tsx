import React from "react";
import styled from "styled-components/native";
import { CheckIcon } from "src/Component/Svg";
import { VoteOptionProps } from "src/Object/Type";
import { H3 } from "src/StyledComponents/Text";

/**
 * 투표 선택 선택지 줄입니다.
 * @author 현웅
 */
export function VoteOption({
  voteOption,
  selected,
  onPress,
}: {
  voteOption: VoteOptionProps;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Container activeOpacity={1} selected={selected} onPress={onPress}>
      <OptionContent>{voteOption.content}</OptionContent>
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

// 해당 디자인에 변화가 생기면 Vote.option.result.component 도 같이 바꿔야 합니다.
const Container = styled.TouchableOpacity<{ selected: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  margin: 2px 0px;
  border: 1px solid //TODO: #DESIGN-SYSTEM
    ${({ selected, theme }) =>
      selected ? theme.color.purple.main : "#dddddd"};
  border-radius: 100px;
`;

const OptionContent = styled(H3)`
  flex: 1;
  padding-right: 8px;
`;

const SelectedIcon__Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.purple.text};
  border-radius: 100px;
`;
