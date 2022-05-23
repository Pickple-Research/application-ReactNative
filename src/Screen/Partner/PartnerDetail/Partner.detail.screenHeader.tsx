import React from "react";
import styled from "styled-components/native";
import { ScreenHeader__Container } from "src/StyledComponents/View";
import CaretLeftIcon from "@Resource/svg/caret-left-icon.svg";

export function PartnerDetailScreenHeader() {
  return (
    <ScreenHeader__Container>
      <CaretLeftIcon />
      <Icons__Container />
    </ScreenHeader__Container>
  );
}

const Icons__Container = styled.View``;
