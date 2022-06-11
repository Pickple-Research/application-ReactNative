import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LandingBottomTabProps } from "src/Navigator";
import { screenStyles } from "./Home.landing.screen";
import { ResearchListItem } from "src/Component/Research";
import { SectionHeaderText, MoreText } from "src/Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { useResearchStore } from "src/Zustand";
import { globalStyles } from "src/Style";

/**
 * 홈 랜딩 페이지의 리서치 섹션
 * @author 현웅
 */
export function HomeLandingResearch() {
  return (
    <Container style={{ ...screenStyles.boundary }}>
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
  const researches = useResearchStore(state => state.researches);

  return (
    <Researches__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      {/*
        recentResearches.map...
         */}
      <ResearchListItem research={researches[0]} />
    </Researches__Container>
  );
}

const Container = styled.View`
  padding-bottom: 40px;
  margin-bottom: 30px;
`;

const Researches__Container = styled.View``;
