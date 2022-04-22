import React from "react";
import styled from "styled-components/native";
import { PartnerAdCarousel } from "@Component/Partner";
import { SectionHeaderTitle, MoreText } from "@Component/Text";
import { SectionHeaderMoreContainer } from "@Component/StyledComponents";
import { usePartnerStore } from "@Zustand/index";

/**
 * 파트너 랜딩 페이지 광고 섹션
 * @author 현웅
 */
export function PartnerMainAd() {
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
      <SectionHeaderTitle title="광고" />
      <MoreText />
    </SectionHeaderMoreContainer>
  );
}

const Container = styled.View`
  margin-bottom: 45px;
`;
