import React, { useState } from "react";
import styled from "styled-components/native";
import { PartnerTypeCarousel, PartnerListItem } from "@Component/Partner";
import { SectionHeaderTitle } from "@Component/Text";
import { SectionHeader__Container } from "../../../StyledComponents/View";
import { PartnerType } from "../../../Object/Enum";
import { usePartnerStore } from "@Zustand/index";
import { globalStyles } from "../../../Style";

/**
 * 파트너 랜딩 페이지 최신 파트너 섹션
 * @author 현웅
 */
export function PartnerMainRecent() {
  // PartnerTypeCarousel에서 사용할 상태와 함수 정의
  const [selectedTypes, setSelectedTypes] = useState<PartnerType[]>([]);

  return (
    <Container>
      <SectionHeader />
      <PartnerTypeCarousel
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
      />
      <RecentPartners />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderTitle title="최신" />
    </SectionHeader__Container>
  );
}

function RecentPartners() {
  const examplePartner = usePartnerStore(state => state.examplePartner);

  return (
    <RecentPartners__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      <PartnerListItem partner={examplePartner} />
    </RecentPartners__Container>
  );
}

const Container = styled.View``;

// RecentPartners()
const RecentPartners__Container = styled.View``;
