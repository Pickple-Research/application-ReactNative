import React, { useState } from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { PartnerTypeCarousel } from "@Component/Partner";
import { Chip, HashTags } from "@Component/Text";
import { PartnerProps } from "@Object/Type";
import { PartnerType } from "@Object/Enum";
import { usePartnerStore } from "src/Zustand";
import { globalStyles } from "src/Style";
import { H4, BodyText } from "src/StyledComponents/Text";
import SortIcon from "@Resource/svg/sort-icon.svg";

/**
 * 카테고리별 파트너 페이지 파트너 목록 섹션
 * @author 현웅
 */
export function PartnerCategoryPartners() {
  return (
    <>
      <Filter />
      <PartnersList />
    </>
  );
}

function Filter() {
  //TODO: 나중에 Screen 단위에서 상태관리 할 수 있도록 바꿔야 합니다.
  const [selectedTypes, setSelectedTypes] = useState<PartnerType[]>([]);

  return (
    <Filter__Container>
      <PartnerTypeCarousel
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
      />
      {/* <FilterHeader__Filter> */}
      <SortIcon />
      {/* </FilterHeader__Filter> */}
    </Filter__Container>
  );
}

function PartnersList() {
  const examplePartners: PartnerProps[] = usePartnerStore(
    state => state.examplePartners,
  );

  /**
   * #TYPE #TYPESCRIPT #STYLED-COMPONENTS
   * styled-components로 정의된 React 컴포넌트에 기본 props를 넘겨줘야 하는 경우
   * <React.ElementType> 타입을 지정해줍니다.
   * (왜인지 이유는 저도 아직 확실히 이해하진 못했습니다. styled-components에 제네릭을 정의해줄 수 있는 걸 보긴 했는데..)
   * @see https://stackoverflow.com/questions/64460114/rn-flatlist-with-typescript-and-styled-components#
   * @author 현웅
   */
  return (
    <PartnersList__Container<React.ElementType>
      data={examplePartners}
      renderItem={({ item }: { item: PartnerProps }) => (
        <Partner partner={item} />
      )}
      contentContainerStyle={{
        ...globalStyles.screen__horizontalPadding,
        paddingTop: 10,
        paddingBottom: 40,
      }}
    />
  );
}

function Partner({ partner }: { partner: PartnerProps }) {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "PartnerCategoryScreen">>();

  return (
    <Partner__Container
      activeOpacity={1}
      onPress={() => {
        navigation.navigate("PartnerDetailScreen", { partnerId: partner.id });
      }}>
      <Partner__ThumbnailInfoContainer>
        <Partner__Thumbnail />
        <Partner__InfoContainer>
          <Partner__NameTypeContainer>
            <Partner__Name>{partner.name}</Partner__Name>
            <Partner__Type>{partner.type}</Partner__Type>
          </Partner__NameTypeContainer>
          <HashTags tags={partner.tags} style={{ marginBottom: 6 }} />
          <Partner__Description>스타트업 한줄 소개</Partner__Description>
        </Partner__InfoContainer>
      </Partner__ThumbnailInfoContainer>
      <Partner__NewResearchContainer>
        <Chip
          content="3건의 새 리서치"
          type="PARTNER_NEW_RESEARCH"
          style={{ marginRight: 8 }}
        />
        <Partner__NewResearchTitle numberOfLines={1}>
          아날로그와 디자인 제품 사용에 대한 선호도 조사
        </Partner__NewResearchTitle>
      </Partner__NewResearchContainer>
    </Partner__Container>
  );
}

const Filter__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 0px;
  padding-right: 20px;
`;

const FilterHeader__Filter = styled.View``;

const PartnersList__Container = styled.FlatList`
  background-color: ${({ theme }) => theme.color.purple.mild};
`;

// Partner()
const Partner__Container = styled.TouchableOpacity`
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1px;
`;

const Partner__Name = styled(H4)`
  font-weight: bold;
`;

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

const Partner__NewResearchTitle = styled(H4)`
  flex: 1;
`;
