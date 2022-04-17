import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Profile.main.screen";

export function ProfileMainAbout() {
  return (
    <Container style={{ ...screenStyles.padding, ...screenStyles.border }}>
      <Container />
    </Container>
  );
}

const Container = styled.View`
  padding-top: 20px;
`;
