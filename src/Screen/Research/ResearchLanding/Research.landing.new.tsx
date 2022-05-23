import React, { useState } from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { ResearchTypeCarousel, ResearchListItem } from "src/Component/Research";
import { SectionHeaderTitle } from "src/Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { ResearchType } from "src/Object/Enum";
import { useResearchStore } from "src/Zustand";
import { globalStyles } from "src/Style";

/**
 * 리서치 랜딩 페이지 신규 리서치 섹션
 * @author 현웅
 */
export function ResearchLandingNew() {
  const [selectedType, setSelectedType] = useState<ResearchType>(
    ResearchType.ALL,
  );

  return (
    <Container>
      <SectionHeader />
      <ResearchTypeCarousel
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <RecentResearches />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderTitle title="신규 리서치" />
    </SectionHeader__Container>
  );
}

function RecentResearches() {
  const exampleResearches = useResearchStore(state => state.exampleResearches);

  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <RecentResearches__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      {exampleResearches.map(research => {
        return (
          <ResearchListItem
            key={research.id}
            research={research}
            onPress={() => {
              navigation.navigate("ResearchDetailScreen", {
                researchId: research.id,
              });
            }}
          />
        );
      })}
    </RecentResearches__Container>
  );
}

const Container = styled.View``;

// RecentResearches()
const RecentResearches__Container = styled.View``;
