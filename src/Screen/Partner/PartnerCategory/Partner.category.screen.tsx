import React from "react";
import styled from "styled-components/native";
import { PartnerCategoryPartners } from "./Partner.category.partners";

export type PartnerCategoryScreenProps = {};

/**
 * 카테고리별 파트너 페이지
 * @author 현웅
 */
export function PartnerCategoryScreen({ navigation }: any) {
  return (
    <Container>
      <PartnerCategoryPartners />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;
