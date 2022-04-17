import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { TagGeneral } from "./TagGeneral.component";
import { Dimensions } from "react-native";
import { textTheme } from "@Theme/Component";
import { vw } from "@Theme/Value";
import { HorizontalView } from "@Component/StyledComponents";

export function ResearchListItem({ index, item }: any) {
  return (
    <ContainerView>
      <View>
        <MainImage source={require("@Resource/search.png")} />
      </View>
      <TextView>
        <TagGeneral
          data={["마케팅", "스타트업"]}
          separator={"  "}
          prefix={"#"}
          maxNumberOfTag={3}
          prefixStyle={{ color: textTheme.home_main_research_category_tag }}
          tagStyle={{ color: textTheme.home_main_research_category_tag }}
        />

        <TitleText>{item.title}</TitleText>

        <TagGeneral
          data={["여성", "20대", "30대"]}
          separator={" · "}
          maxNumberOfTag={100}
          prefixStyle={{ color: "black" }}
        />
      </TextView>
      <RightView style={{ flexDirection: "row" }}>
        <GiftImage source={require("@Resource/square.png")} />
        <RightText>+10</RightText>
      </RightView>
    </ContainerView>
  );
}

const ContainerView = styled.View`
  width: ${100 * vw}px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-self: baseline;
  flex-direction: row;
  background-color: white;
`;
const TextView = styled.View`
  width: ${100 * vw - 150}px;
  background-color: aliceblue;
`;
const RightView = styled.View`
  ${HorizontalView};
  width: 70px;
  justify-items: center;
`;
const RightText = styled.Text`
  color: red;
`;
const MainImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-left: 23px;
`;
const GiftImage = styled.Image`
  width: 25px;
  height: 25px;
`;
const TitleText = styled.Text`
  height: 40px;
  font-size: 12px;
  line-height: 17px;
  color: red;
`;
