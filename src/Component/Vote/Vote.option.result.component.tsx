import React from "react";
import styled from "styled-components/native";
import { VoteOptionSchema } from "src/Schema";
import { H3, H4 } from "src/StyledComponents/Text";
import { theme } from "src/Theme";
import { CheckIcon } from "src/Component/Svg";

/**
 * 결과를 표시하는 투표 선택지 한 줄 컴포넌트입니다.
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
  voteOption: VoteOptionSchema;
  selected: boolean;
  ratio: number;
  won: boolean;
}) {
  return (
    <OuterContainer>
      {/* 점유율만큼 색 채우는 곳 */}
      <OptionFiller__Container ratio={ratio}>
        <OptionFiller won={won} />
      </OptionFiller__Container>

      {/* 선택지 내용 표시 */}
      <Container>
        {selected && (
          <CheckIcon width="18" height="12" color={theme.color.purple.text} />
        )}
        <OptionContent won={won}>{voteOption.content}</OptionContent>
        <Ratio won={won}>{`${ratio}%`}</Ratio>
      </Container>
    </OuterContainer>
  );
}

const OuterContainer = styled.View`
  position: relative;
  margin: 2px 0px;
  //TODO: #DESIGN-SYSTEM
  border: 1px solid #dddddd;
  border-radius: 100px;
  overflow: hidden;
`;

//! 해당 디자인에 변화가 생기면 Vote.option.component 도 같이 바꿔야 합니다.
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
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

const OptionContent = styled(H3)<{ won: boolean }>`
  flex: 1;
  justify-content: flex-start;
  min-height: 20px;
  color: ${({ won, theme }) =>
    won ? theme.color.purple.deep : theme.color.grey.icon};
  padding-left: 4px;
  padding-right: 8px;
`;

const Ratio = styled(H4)<{ won: boolean }>`
  color: ${({ won, theme }) =>
    won ? theme.color.purple.deep : theme.color.grey.mild};
  font-weight: bold;
`;
