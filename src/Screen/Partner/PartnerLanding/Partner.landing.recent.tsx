import React, { useState } from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { PartnerTypeCarousel, PartnerListItem } from "@Component/Partner";
import { SectionHeaderText } from "@Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { PartnerType } from "src/Object/Enum";
import { usePartnerStore } from "src/Zustand";
import { globalStyles } from "src/Style";

/**
 * 파트너 랜딩 페이지 최신 파트너 섹션
 * @author 현웅
 */
export function PartnerLandingRecent() {
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
      <SectionHeaderText title="최신" />
    </SectionHeader__Container>
  );
}

function RecentPartners() {
  const examplePartner = usePartnerStore(state => state.examplePartner);

  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <RecentPartners__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      <PartnerListItem
        partner={examplePartner}
        onPress={() => {
          navigation.navigate("PartnerDetailScreen", {
            partnerId: examplePartner.id,
          });
        }}
      />
    </RecentPartners__Container>
  );
}

const Container = styled.View``;

// RecentPartners()
const RecentPartners__Container = styled.View``;
