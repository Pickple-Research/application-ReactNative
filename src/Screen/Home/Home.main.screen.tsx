import React from "react";
import { Text, View } from "react-native";
import { LinearGradeintContainer } from "@Component/React/index";
import { FullView } from "@Component/StyledComponents";
import { theme } from "@Theme/index";
import { ResearchFlatList } from "@Component/React/ResearchFlatList.component";
import styled from "styled-components/native";
import { viewTheme } from "@Theme/Component";

export function HomeMainScreen() {
  return (
    <WholeContainer>
      <LinearGradeintContainer colors={theme.color.purple_blue_gradient}>
        <Text>Home Main Screen - This is gradient test</Text>
      </LinearGradeintContainer>
      <View style={{flex: 1}}>
        <ResearchFlatList />

      </View>
    </WholeContainer>
  );
}

export type HomeMainScreenProps = {};

const WholeContainer = styled.ScrollView`
  width: 100%;
  background-color: ${viewTheme.home_main_background};
`