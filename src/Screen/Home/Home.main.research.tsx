import React from "react";
import { screenStyles } from "./Home.main.screen";
import styled from "styled-components/native";
import { SectionHeaderTitle, MoreText } from "@Component/React";
import { ResearchListItem } from "@Component/React/Research";

export function HomeMainResearch() {
  return (
    <Container style={{ ...screenStyles.padding, ...screenStyles.border }}>
      <SectionHeader />
      {/* <FlatList
        data={[1, 2, 3]}
        renderItem={ResearchListItem}
        scrollEnabled={false}
      /> */}
      <ResearchListItem />
    </Container>
  );
}

function SectionHeader() {
  return (
    <Header__Container style={{ ...screenStyles.header__margin }}>
      <SectionHeaderTitle title={"리서치"} />
      <MoreText />
    </Header__Container>
  );
}

const Container = styled.View`
  padding-bottom: 40px;
  margin-bottom: 30px;
`;

const Header__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
