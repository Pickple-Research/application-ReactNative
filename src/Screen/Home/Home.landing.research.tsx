import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps, LandingBottomTabProps } from "src/Navigator";
import { screenStyles } from "./Home.landing.screen";
import { ResearchListItem } from "@Component/Research";
import { SectionHeaderText, MoreText } from "@Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { useResearchStore } from "src/Zustand";
import { globalStyles } from "src/Style";

/**
 * 홈 랜딩 페이지의 리서치 섹션
 * @author 현웅
 */
export function HomeLandingResearch() {
  return (
    <Container style={{ ...screenStyles.border }}>
      <SectionHeader />
      <Researches />
    </Container>
  );
}

function SectionHeader() {
  const navigation =
    useNavigation<NavigationProp<LandingBottomTabProps, "HomeLandingScreen">>();

  return (
    <SectionHeader__Container>
      <SectionHeaderText title={"리서치"} />
      <MoreText
        onPress={() => {
          navigation.navigate("ResearchLandingScreen", {});
        }}
      />
    </SectionHeader__Container>
  );
}

function Researches() {
  const exampleResearch = useResearchStore(state => state.exampleResearch);

  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <Researches__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      <ResearchListItem
        research={exampleResearch}
        onPress={() => {
          navigation.navigate("ResearchDetailScreen", {
            researchId: exampleResearch.id,
          });
        }}
      />
    </Researches__Container>
  );
}

const Container = styled.View`
  padding-bottom: 40px;
  margin-bottom: 30px;
`;

const Researches__Container = styled.View``;
