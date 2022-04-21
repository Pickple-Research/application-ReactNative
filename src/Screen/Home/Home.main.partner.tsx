import React from "react";
import styled from "styled-components/native";
import { SectionHeaderMoreContainer } from "@Component/StyledComponents";
import { SectionHeaderTitle, MoreText } from "@Component/React";
import { PartnerAdCarousel } from "@Component/React/Partner";
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
    <SectionHeaderMoreContainer>
      <SectionHeaderTitle title="파트너" />
      <MoreText />
    </SectionHeaderMoreContainer>
  );
}

const Container = styled.View``;
