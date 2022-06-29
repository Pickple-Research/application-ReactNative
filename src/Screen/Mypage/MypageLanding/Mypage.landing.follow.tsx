import React from "react";
import styled from "styled-components/native";
import { FollowingPartnerCarousel } from "src/Component/Partner";
import { SectionHeaderText, MoreText } from "src/Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { H4 } from "src/StyledComponents/Text";
import { useUserStore, usePartnerStore } from "src/Zustand";

/**
 * 마이페이지 랜딩 페이지 팔로우 스타트업 섹션
 * @author 현웅
 */
export function MypageLandingFollow() {
  const user = useUserStore(state => state.user);
  const examplePartners = usePartnerStore(state => state.examplePartners);

  const loggedIn = user._id !== "";

  return (
    <Container>
      <SectionHeader />
      {loggedIn ? (
        <FollowingPartnerCarousel followingPartners={examplePartners} />
      ) : (
        <RequireLoginContainer>
          <RequireLoginText>로그인이 필요한 서비스입니다.</RequireLoginText>
        </RequireLoginContainer>
      )}
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderText title="팔로우 스타트업" />
      <MoreText />
    </SectionHeader__Container>
  );
}

const Container = styled.View`
  margin-bottom: 30px;
`;

const RequireLoginContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const RequireLoginText = styled(H4)`
  color: ${({ theme }) => theme.color.grey.unselected};
`;
