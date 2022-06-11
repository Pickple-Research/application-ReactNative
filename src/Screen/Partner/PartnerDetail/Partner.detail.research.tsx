import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { SectionHeaderText, MoreText } from "src/Component/Text";
import { ResearchListItem } from "src/Component/Research";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { useResearchStore } from "src/Zustand";
import { globalStyles } from "src/Style";
import { H3 } from "src/StyledComponents/Text";

/**
 * 파트너 상세정보 페이지 파트너가 진행중인 리서치 섹션
 * @author 현웅
 */
export function PartnerDetailResearch() {
  return (
    <Container>
      <SectionHeader />
      <Researches />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeader__TitleContainer>
        <SectionHeaderText title="새 리서치" style={{ marginRight: 6 }} />
        <SectionHeader__TitleNum>3</SectionHeader__TitleNum>
      </SectionHeader__TitleContainer>
      <MoreText />
    </SectionHeader__Container>
  );
}

function Researches() {
  const researches = useResearchStore(state => state.researches);

  const navigation =
    useNavigation<NavigationProp<AppStackProps, "PartnerDetailScreen">>();

  return (
    <Researches__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      <ResearchListItem
        research={researches[0]}
        onPress={() => {
          navigation.navigate("ResearchDetailScreen", {
            research: researches[0],
          });
        }}
      />
    </Researches__Container>
  );
}

const Container = styled.View`
  margin-bottom: 50px;
`;

const SectionHeader__TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionHeader__TitleNum = styled(H3)`
  color: ${({ theme }) => theme.color.blue.main};
  font-weight: bold;
`;

const Researches__Container = styled.View``;
