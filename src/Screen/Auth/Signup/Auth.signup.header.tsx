import React from "react";
import styled from "styled-components/native";
import { globalStyles } from "src/Style/globalStyles";

export function SignupHeader() {
  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <Text>회원가입</Text>
    </Container>
  );
}

const Container = styled.View``;

const Text = styled.Text`
  font-size: 29px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.purple.deep};
  margin-bottom: 32px;
`;
