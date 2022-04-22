import React from "react";
import styled from "styled-components/native";
import { PartnerAdCarousel } from "@Component/Partner";
import { SectionHeaderTitle, MoreText } from "@Component/Text";
import { SectionHeader__Container } from "../../StyledComponents/View";
import { usePartnerStore } from "@Zustand/index";

/**
 * 홈 랜딩 페이지의 파트너 섹션
 * @author 현웅
 */
export function HomeMainPartner() {
  const examplePartners = usePartnerStore(state => state.examplePartners);

  return (
    <Container>
      <SectionHeader />
      <PartnerAdCarousel partners={examplePartners} />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderTitle title="파트너" />
      <MoreText />
    </SectionHeader__Container>
  );
}

const Container = styled.View``;
