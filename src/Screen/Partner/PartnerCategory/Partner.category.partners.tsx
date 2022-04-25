import React, { useState } from "react";
import styled from "styled-components/native";
import { PartnerTypeCarousel } from "@Component/Partner";
import { Chip, HashTags } from "@Component/Text";
import { PartnerProps } from "@Object/Type";
import { PartnerType } from "@Object/Enum";
import { usePartnerStore } from "@Zustand/index";
import { globalStyles } from "../../../Style";
import { H3, BodyText } from "../../../StyledComponents/Text";
import SortIcon from "@Resource/svg/sort-icon.svg";

/**
 * 카테고리별 파트너 페이지 파트너 목록 세션
 * @author 현웅
 */
export function PartnerCategoryPartners() {
  return (
    <>
      <FilterHeader />
      <PartnersList />
    </>
  );
}

function FilterHeader() {
  //TODO: 나중에 Screen 단위에서 상태관리 할 수 있도록 바꿔야 합니다.
  const [selectedTypes, setSelectedTypes] = useState<PartnerType[]>([]);

  return (
    <FilterHeader__Container>
      <PartnerTypeCarousel
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
      />
      {/* <FilterHeader__Filter> */}
      <SortIcon />
      {/* </FilterHeader__Filter> */}
    </FilterHeader__Container>
  );
}

function PartnersList() {
  const examplePartners: PartnerProps[] = usePartnerStore(
    state => state.examplePartners,
  );

  /**
   * #TYPE #TYPESCRIPT
   * FlatList를 Typescript와 같이 쓰는 경우:
   * @see https://stackoverflow.com/questions/64460114/rn-flatlist-with-typescript-and-styled-components#
   * @author 현웅
   */
  return (
    <PartnersList__Container<React.ElementType>
      data={examplePartners}
      renderItem={Partner}
      contentContainerStyle={{
        ...globalStyles.screen__horizontalPadding,
        paddingTop: 10,
        paddingBottom: 40,
      }}
    />
  );
}

function Partner({ item }: { item: PartnerProps }) {
  return (
    <Partner__Container>
      <Partner__ThumbnailInfoContainer>
        <Partner__Thumbnail />
        <Partner__InfoContainer>
          <Partner__NameTypeContainer>
            <Partner__Name>{item.name}</Partner__Name>
            <Partner__Type>{item.type}</Partner__Type>
          </Partner__NameTypeContainer>
          <HashTags tags={item.tags} />
          <Partner__Description>스타트업 한줄 소개</Partner__Description>
        </Partner__InfoContainer>
      </Partner__ThumbnailInfoContainer>
      <Partner__NewResearchContainer>
        <Chip
          content="3건의 새 리서치"
          type="RESEARCH_TYPE"
          style={{ marginRight: 8 }}
        />
        <Partner__NewResearchTitle numberOfLines={1}>
          아날로그와 디자인 제품 사용에 대한 선호도 조사
        </Partner__NewResearchTitle>
      </Partner__NewResearchContainer>
    </Partner__Container>
  );
}

const FilterHeader__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 0px;
  padding-right: 20px;
`;

const FilterHeader__Filter = styled.View``;

const PartnersList__Container = styled.FlatList`
  background-color: ${({ theme }) => theme.color.background_purple};
`;

// Partner()
const Partner__Container = styled.View`
  background-color: white;
  padding: 12px;
  border-radius: 12px;
  margin: 5px 0px;
`;

const Partner__ThumbnailInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Partner__Thumbnail = styled.View`
  width: 70px;
  height: 70px;
  background-color: gray;
  margin-right: 15px;
  border-radius: 100px;
`;

const Partner__InfoContainer = styled.View`
  flex: 1;
`;

const Partner__NameTypeContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Partner__Name = styled(H3)``;

const Partner__Type = styled(BodyText)``;

const Partner__Description = styled(BodyText)``;

const Partner__NewResearchContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  //* 파트너별 새 리서치 여부는 optional 하기 때문에
  //* margin 조정을 예외적으로 아래쪽 컴포넌트에서 담당해야 합니다.
  margin-top: 12px;
`;

const Partner__NewResearchTitle = styled(H3)`
  flex: 1;
`;
