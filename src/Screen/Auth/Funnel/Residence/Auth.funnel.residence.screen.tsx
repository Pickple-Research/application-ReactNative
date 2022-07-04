import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { AuthFunnelResidence } from "./Auth.funnel.residence";

export function AuthFunnelResidenceScreen() {
  return (
    <Container>
      <AuthFunnelResidence />
    </Container>
  );
}

const Container = styled.View`
  padding: 30px 12px;
`;
