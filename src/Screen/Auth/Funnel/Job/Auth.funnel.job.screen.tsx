import React from "react";
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
  padding-top: 30px;
  padding-bottom: 30px;
`;
