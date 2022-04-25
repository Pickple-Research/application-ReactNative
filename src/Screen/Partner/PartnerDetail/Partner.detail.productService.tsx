import React from "react";
import styled from "styled-components/native";
import { PartnerProductServiceCarousel } from "@Component/Partner";
import { RadiusButton } from "@Component/Button";
import { SectionHeaderTitle } from "@Component/Text";
import { SectionHeader__Container } from "../../../StyledComponents/View";
import { usePartnerStore } from "@Zustand/partner.zustand";
import { globalStyles } from "../../../Style";
import { H2 } from "../../../StyledComponents/Text";

/**
 * 파트너 상세정보 페이지 제품/서비스 섹션
 * @author 현웅
 */
export function PartnerDetailProductService() {
  return (
    <Container>
      <SectionHeader />
      <ProductServices />
      <MoreButton />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeader__TitleContainer>
        <SectionHeaderTitle title="제품/서비스" style={{ marginRight: 6 }} />
        <SectionHeader__TitleNum>3</SectionHeader__TitleNum>
      </SectionHeader__TitleContainer>
    </SectionHeader__Container>
  );
}

function ProductServices() {
  const productServices = usePartnerStore(
    state => state.exampleProductServices,
  );

  return (
    <ProductServices__Container>
      <PartnerProductServiceCarousel productServices={productServices} />
    </ProductServices__Container>
  );
}

function MoreButton() {
  return (
    <MoreButton__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      <RadiusButton content="서비스 더보기" type="SHOW_MORE" />
    </MoreButton__Container>
  );
}

const Container = styled.View`
  margin-bottom: 30px;
`;

const SectionHeader__TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionHeader__TitleNum = styled(H2)`
  color: ${({ theme }) => theme.color.main_skyblue};
  font-weight: bold;
`;

const ProductServices__Container = styled.View`
  margin-bottom: 20px; ;
`;

const MoreButton__Container = styled.View``;
