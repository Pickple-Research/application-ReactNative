import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { AuthFunnelOccupation } from "./Auth.funnel.occupation";

export function AuthFunnelOccupationScreen() {
  return (
    <Container>
      <AuthFunnelOccupation />
    </Container>
  );
}

const Container = styled.View`
  padding: 30px 12px;
`;
