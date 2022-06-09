import React from "react";
import styled from "styled-components/native";
import { PartnerProductServiceCarousel } from "src/Component/Partner";
import { RadiusButton } from "src/Component/Button";
import { SectionHeaderText } from "src/Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { usePartnerStore } from "src/Zustand";
import { globalStyles } from "src/Style";
import { H3 } from "src/StyledComponents/Text";

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
        <SectionHeaderText title="제품/서비스" style={{ marginRight: 6 }} />
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

const SectionHeader__TitleNum = styled(H3)`
  color: ${({ theme }) => theme.color.blue.main};
  font-weight: bold;
`;

const ProductServices__Container = styled.View`
  margin-bottom: 20px; ;
`;

const MoreButton__Container = styled.View``;
