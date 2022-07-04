import React from "react";
import styled from "styled-components/native";

export type MypageSettingAlarmScreenProps = {};

export function MypageSettingAlarmScreen() {
  return (
    <Container>
      <Container />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.color.grey.white};
`;
