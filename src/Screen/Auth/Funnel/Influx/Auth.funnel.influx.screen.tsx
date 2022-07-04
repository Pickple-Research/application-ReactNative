import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { AuthFunnelInflux } from "./Auth.funnel.influx";

export function AuthFunnelInfluxScreen() {
  return (
    <Container>
      <AuthFunnelInflux />
    </Container>
  );
}

const Container = styled.View`
  padding: 30px 12px;
`;
