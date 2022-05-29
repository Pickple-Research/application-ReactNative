import React from "react";
import styled from "styled-components/native";
import { FollowingPartnerCarousel } from "@Component/Partner";
import { SectionHeaderText, MoreText } from "@Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { usePartnerStore } from "src/Zustand";

/**
 * 마이페이지 랜딩 페이지 팔로우 스타트업 섹션
 * @author 현웅
 */
export function MypageLandingFollow() {
  const examplePartners = usePartnerStore(state => state.examplePartners);

  return (
    <Container>
      <SectionHeader />
      <FollowingPartnerCarousel followingPartners={examplePartners} />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderText title="팔로우" />
      <MoreText />
    </SectionHeader__Container>
  );
}

const Container = styled.View`
  margin-bottom: 30px;
`;
