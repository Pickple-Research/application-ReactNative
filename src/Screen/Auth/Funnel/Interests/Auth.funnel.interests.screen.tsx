import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { AuthFunnelInterests } from "./Auth.funnel.interests";

export function AuthFunnelInterestsScreen() {
  return (
    <Container>
      <AuthFunnelInterests />
    </Container>
  );
}

const Container = styled.View`
  padding: 30px 12px;
`;
