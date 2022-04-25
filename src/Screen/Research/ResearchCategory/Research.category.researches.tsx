import React, { useState } from "react";
import styled from "styled-components/native";
import { ResearchTypeCarousel, ResearchListItem } from "@Component/Research";
import { ResearchProps } from "@Object/Type";
import { ResearchType } from "../../../Object/Enum";
import { SectionHeaderTitle } from "@Component/Text";
import { SectionHeader__Container } from "../../../StyledComponents/View";
import { useResearchStore } from "@Zustand/research.zustand";
import { globalStyles } from "../../../Style";

/**
 * 카테고리별 리서치 페이지 리서치 목록 섹션
 * @author 현웅
 */
export function ResearchCategoryResearches() {
  return (
    <>
      <SectionHeader />
      <Filter />
      <ResearchesList />
    </>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderTitle title="신규 리서치" />
    </SectionHeader__Container>
  );
}

function Filter() {
  const [selectedType, setSelectedType] = useState<ResearchType>(
    ResearchType.ALL,
  );

  return (
    <Filter__Container>
      <ResearchTypeCarousel
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
    </Filter__Container>
  );
}

function ResearchesList() {
  const exampleResarches = useResearchStore(state => state.exampleResearches);

  /**
   * @reference Partner.category.partners.tsx
   */
  return (
    <ResearchesList__Container<React.ElementType>
      data={exampleResarches}
      renderItem={Research}
      contentContainerStyle={{
        ...globalStyles.screen__horizontalPadding,
      }}
    />
  );
}

function Research({ item }: { item: ResearchProps }) {
  return <ResearchListItem research={item} />;
}

const Filter__Container = styled.View`
  padding-bottom: 16px;
`;

const ResearchesList__Container = styled.FlatList``;
