import React from "react";
import styled from "styled-components/native";
import { VoteOptionProps } from "src/Object/Type";
import { H3, H4 } from "src/StyledComponents/Text";
import { theme } from "src/Theme";
import { CheckIcon } from "src/Component/Svg";

/**
 * 결과를 표시하는 투표 선택지 줄입니다.
 * @param voteOption 투표 선택지 정보
 * @param selected 유저가 해당 선택지를 선택했는지 여부
 * @param ratio 해당 선택지 점유율
 * @param won 해당 선택지가 1위인지 여부
 * @author 현웅
 */
export function VoteOptionResult({
  voteOption,
  selected,
  ratio,
  won,
}: {
  voteOption: VoteOptionProps;
  selected: boolean;
  ratio: number;
  won: boolean;
}) {
  return (
    <Container selected={selected} won={won}>
      <OptionFiller__Container ratio={ratio}>
        <OptionFiller won={won} />
      </OptionFiller__Container>
      <ContentsContainer>
        {selected && (
          <CheckIcon width="18" height="12" color={theme.color.purple.text} />
        )}
        <OptionContent won={true}>{voteOption.content}</OptionContent>
        <Ratio won={true}>{`${ratio}%`}</Ratio>
      </ContentsContainer>
    </Container>
  );
}

// 해당 디자인에 변화가 생기면 Vote.option.component 도 같이 바꿔야 합니다.
const Container = styled.View<{
  selected: boolean;
  won: boolean;
}>`
  /* position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px; */
  margin: 2px 0px;
  border: 1px solid ${({ theme }) => theme.color.purple.main};
  border-radius: 100px;
  overflow: hidden;
`;

const OptionFiller__Container = styled.View<{ ratio: number }>`
  position: absolute;
  left: 0;
  flex: 1;
  width: ${({ ratio }) => `${ratio}%`};
  height: 100%;
`;

const OptionFiller = styled.View<{ won: boolean }>`
  flex: 1;
  //TODO: #DESIGN-SYSTEM
  background-color: ${({ won, theme }) =>
    won ? theme.color.purple.pastel : "#EEEEEE"};
`;

const ContentsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
`;

const OptionContent = styled(H3)<{ won: boolean }>`
  flex: 1;
  justify-content: flex-start;
  color: ${({ won, theme }) =>
    won ? theme.color.purple.deep : theme.color.grey.icon};
  padding-left: 4px;
  padding-right: 8px;
`;

const Ratio = styled(H4)<{ won: boolean }>`
  color: ${({ won, theme }) =>
    won ? theme.color.purple.deep : theme.color.grey.mild};
  font-weight: ${({ won }) => (won ? "bold" : "normal")};
`;
