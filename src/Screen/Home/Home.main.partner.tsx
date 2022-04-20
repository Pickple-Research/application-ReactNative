import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Home.main.screen";
import { SectionHeaderTitle, MoreText } from "@Component/React";
import { PartnerAdCarousel } from "@Component/React/Partner";
import { examplePartnersList } from "../../Object/Type";

export function HomeMainPartner() {
  return (
    <Container>
      <SectionHeader />
      <PartnerAdCarousel partners={examplePartnersList} />
    </Container>
  );
}

function SectionHeader() {
  return (
    <Header__Container
      style={{ ...screenStyles.padding, ...screenStyles.header__margin }}>
      <SectionHeaderTitle title="파트너" />
      <MoreText />
    </Header__Container>
  );
}

const Container = styled.View``;

const Header__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
