import React from "react";
import styled from "styled-components/native";
import { H4 } from "src/StyledComponents/Text";

/**
 * 결과를 표시하는 투표 옵션 줄입니다.
 * @author 현웅
 */
export function VoteOptionResult() {
  return <Container></Container>;
}

const Container = styled.View``;

const Ratio = styled(H4)`
  color: ${({ theme }) => theme.color.grey.mild};
`;
