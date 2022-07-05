import React from "react";
import styled from "styled-components/native";
import { AuthFunnelInflux } from "./Auth.funnel.influx";

export function AuthFunnelInfluxScreen() {
  return (
    <Container>
      <AuthFunnelInflux />
    </Container>
  );
}

const Container = styled.View``;
