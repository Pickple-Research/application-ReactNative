import React from "react";
import styled from "styled-components/native";
import { FollowingPartnerCarousel } from "@Component/Partner";
import { SectionHeaderTitle, MoreText } from "@Component/Text";
import { SectionHeaderMoreContainer } from "@Component/StyledComponents";
import { usePartnerStore } from "@Zustand/index";

/**
 * 마이페이지 랜딩 페이지 팔로우 스타트업 섹션
 * @author 현웅
 */
export function ProfileMainFollow() {
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
  margin-bottom: 30px;
`;
