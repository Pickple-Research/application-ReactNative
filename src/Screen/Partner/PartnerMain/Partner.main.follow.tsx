import React from "react";
import styled from "styled-components/native";
import { SectionHeaderMoreContainer } from "@Component/StyledComponents";
import { SectionHeaderTitle, MoreText } from "@Component/React";
import { FollowingPartnerCarousel } from "@Component/React/Partner";
import { usePartnerStore } from "@Zustand/index";

/**
 * 파트너 랜딩 페이지 팔로우 섹션
 * @author 현웅
 */
export function PartnerMainFollow() {
  const examplePartners = usePartnerStore(state => state.examplePartners);

  return (
    <Container>
      <SectionHeader />
      <FollowingPartnerCarousel partners={examplePartners} />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeaderMoreContainer>
      <SectionHeaderTitle title="팔로우" />
      <MoreText />
    </SectionHeaderMoreContainer>
  );
}

const Container = styled.View`
  margin-bottom: 45px;
`;
