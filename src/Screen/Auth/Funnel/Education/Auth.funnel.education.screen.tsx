import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { AuthFunnelEducation } from "./Auth.funnel.education";

export function AuthFunnelEducationScreen() {
  return (
    <Container>
      <AuthFunnelEducation />
    </Container>
  );
}

const Container = styled.View`
  padding: 30px 12px;
`;
