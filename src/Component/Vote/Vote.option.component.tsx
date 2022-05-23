import React from "react";
import styled from "styled-components/native";
import { VoteOptionProps } from "@Object/Type";
import { H2 } from "src/StyledComponents/Text";

/**
 * 투표 선택 옵션 줄입니다.
 * @author 현웅
 */
export function VoteOption({ voteOption }: { voteOption: VoteOptionProps }) {
  return (
    <Container>
      <Content>{voteOption.content}</Content>
      <Ratio>{`40%`}</Ratio>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  margin: 2px 0px;
  border: 1px solid #dddddd;
  border-radius: 100px;
`;

const Content = styled(H2)``;

const Ratio = styled(Content)`
  font-weight: bold;
`;
