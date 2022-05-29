import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { PartnerAdCarousel } from "@Component/Partner";
import { SectionHeaderText, MoreText } from "@Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { usePartnerStore } from "src/Zustand";

/**
 * 홈 랜딩 페이지의 파트너 섹션
 * @author 현웅
 */
export function HomeLandingPartner() {
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
      <SectionHeaderText title="파트너" />
      <MoreText
        onPress={() => {
          navigation.navigate("PartnerCategoryScreen", {});
        }}
      />
    </SectionHeader__Container>
  );
}

const Container = styled.View``;
