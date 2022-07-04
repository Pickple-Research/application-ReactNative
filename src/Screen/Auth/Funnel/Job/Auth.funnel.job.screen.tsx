import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { AuthFunnelJob } from "./Auth.funnel.job";
import { AuthFunnelJobTitle } from "./Auth.funnel.job.title";

export function AuthFunnelJobScreen() {
  return (
    <Container>
      <AuthFunnelJobTitle />
      <AuthFunnelJob />
    </Container>
  );
}

const Container = styled.View`
  padding: 30px 12px;
`;
