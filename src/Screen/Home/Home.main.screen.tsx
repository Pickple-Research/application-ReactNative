import React from "react";
import { FlatList, LogBox, StyleSheet, Text, View } from "react-native";
import { LinearGradeintContainer } from "@Component/React/index";
import { FullView } from "@Component/StyledComponents";
import { theme } from "@Theme/index";
import styled from "styled-components/native";
import { viewTheme } from "@Theme/Component";
import { VoteListItem } from "@Component/React/Home/Vote.listitem.component";
import { HotVoteListItem } from "@Component/React/Home/HotVote.listitem.component";
import { ResearchListItem } from "@Component/React/Home/Research.listitem.component";
import { Carousel } from "@Component/React/Carousel.component";
import { vw } from "@Theme/Value";

export function HomeMainScreen() {
  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ])
  const toy_data = {
    data_research: [
      {index: 1, title: "안 사요 안사"},
      {index: 2, title: "안 사요 안사"},
      {index: 3, title: "안 사요 안사"},
    ],
    data_hot_vote: [
      {index: 11, title: "사요 사"},
      {index: 12, title: "사요 사"},
      {index: 13, title: "사요 사"},
    ],
    data_vote: [
      {index: 21, title: "살까말까"},
      {index: 22, title: "살까말까"},
      {index: 23, title: "살까말까"},
      {index: 24, title: "살까말까"},
      {index: 21, title: "살까말까"},
      {index: 22, title: "살까말까"},
      {index: 23, title: "살까말까"},
      {index: 24, title: "살까말까"},
      {index: 21, title: "살까말까"},
      {index: 22, title: "살까말까"},
      {index: 23, title: "살까말까"},
      {index: 24, title: "살까말까"},
      {index: 21, title: "살까말까"},
      {index: 22, title: "살까말까"},
      {index: 23, title: "살까말까"},
      {index: 24, title: "살까말까"},
      {index: 21, title: "살까말까"},
      {index: 22, title: "살까말까"},
      {index: 23, title: "살까말까"},
      {index: 24, title: "살까말까"},
    ],
  }
  const data = [
    { partnerName: "스타트업1", color: "red" },
    { partnerName: "스타트업2", color: "orange" },
    { partnerName: "스타트업3", color: "yellow" },
    { partnerName: "스타트업4", color: "green" },
    { partnerName: "스타트업5", color: "blue" },
    { partnerName: "스타트업6", color: "navy" },
    { partnerName: "스타트업7", color: "purple" },
  ];
  return (
    <WholeContainer>
      <View style={{ flex: 1 }}>
        <ResearchView>
          <HeaderView>
            <HeaderLeftText>리서치</HeaderLeftText>
            <HeaderRightText>more</HeaderRightText>
          </HeaderView>
          
          <FlatList
            scrollEnabled={false}
            data = {toy_data.data_research}
            renderItem = {
              ({ index, item }) => (
                <ResearchListItem index item />
              )
            }
          />
        </ResearchView>
        <HotVoteView>
          <HeaderView>
            <HeaderLeftText>HOT 투포</HeaderLeftText>
            <HeaderRightText>more</HeaderRightText>
          </HeaderView>
          <FlatList
            scrollEnabled={false}
            data={toy_data.data_hot_vote}
            renderItem = {
              ({ index, item }) => (
                <HotVoteListItem index item/>
              )
            }
          />
        </HotVoteView>
        <VoteView>
          <View
          style = {{
            paddingStart: 5 * vw,
            paddingEnd: 5 * vw,
            backgroundColor: "white",
          }}>
            <FlatList
              scrollEnabled={false}
              data={toy_data.data_vote}
              renderItem = {
                ({ index, item }) => (
                  <VoteListItem index item />
                )
              }
            />
          </View>
          
        </VoteView>

      </View>
    </WholeContainer>
  );
}





const WholeContainer = styled.ScrollView`
  width: 100%;
  background-color: ${viewTheme.home_main_background};
`

const HeaderView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  padding-top: 30px;
`
const HeaderLeftText = styled.Text`
  color: black;
  margin-left: ${6*vw}px;
  font-size: 15px ;
  font-weight: 500;
  line-height: 20px;
`

const HeaderRightText = styled.Text`
  color: purple;
  margin-right: ${6*vw}px;
  font-size: 13px;
  font-weight: 500;
`





const ResearchView = styled.View`
  margin-bottom: 10px;
`


const HotVoteView = styled.View`

`

const VoteView = styled.View`
  margin-bottom: 10px;
`