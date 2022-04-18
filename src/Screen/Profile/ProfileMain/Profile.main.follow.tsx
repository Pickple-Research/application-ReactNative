import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Profile.main.screen";
import { FollowingPartnerCarousel } from "@Component/React/Partner";
import { SectionHeaderTitle, MoreText } from "@Component/React";
import { examplePartnersList } from "../../../Object/Type";

/**
 * 프로필 랜딩 페이지 팔로우 스타트업 섹션
 * @author 현웅
 */
export function ProfileMainFollow() {
  return (
    <Container>
      <Header />
      <FollowingPartnerCarousel followingPartners={examplePartnersList} />
    </Container>
  );
}

function Header() {
  return (
    <Header__Container
      style={{ ...screenStyles.header__margin, ...screenStyles.padding }}>
      <SectionHeaderTitle title={"팔로우 스타트업"} />
      <MoreText />
    </Header__Container>
  );
}

const Container = styled.View`
  margin-bottom: 30px;
`;

const Header__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
