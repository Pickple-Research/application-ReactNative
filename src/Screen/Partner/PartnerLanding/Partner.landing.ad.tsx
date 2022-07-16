import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { PartnerAdCarousel } from "src/Component/Partner";
import { SectionHeaderText, MoreText } from "src/Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { usePartnerStore } from "src/Zustand";

/**
 * 파트너 랜딩 페이지 광고 섹션
 * @author 현웅
 */
export function PartnerLandingAd() {
  const examplePartners = usePartnerStore(state => state.examplePartners);

  return (
    <Container>
      <SectionHeader />
      <PartnerAdCarousel partners={examplePartners} />
    </Container>
  );
}

function SectionHeader() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <SectionHeader__Container>
      <SectionHeaderText title="광고" />
      <MoreText
        onPress={() => {
          navigation.navigate("PartnerCategoryScreen", {});
        }}
      />
    </SectionHeader__Container>
  );
}

const Container = styled.View`
  margin-bottom: 45px;
`;
