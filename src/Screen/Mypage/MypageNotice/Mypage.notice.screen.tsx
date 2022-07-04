import React from "react";
import styled from "styled-components/native";

export type MypageNoticeScreenProps = {};

export function MypageNoticeScreen() {
  return (
    <Container>
      <Container />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.color.purple.mild};
`;
