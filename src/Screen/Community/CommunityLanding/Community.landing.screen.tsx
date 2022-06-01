import React from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackProps } from "src/Navigator";
import { CommunityLandingSearch } from "./Community.landing.search";
import { CommunityLandingInterest } from "./Community.landing.interest";
import { CommunityLandingHotVote } from "./Community.landing.hotVote";
import { CommunityLandingPopular } from "./Community.landing.popular";
import { CommunityLandingRecent } from "./Community.landing.recent";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import { CreateIcon } from "src/Component/Icon";

export type CommunityLandingScreenProps = {};

type AppStackCommunityLandingScreenProps = NativeStackScreenProps<
  AppStackProps,
  "LandingBottomTabNavigator"
>;

/**
 * 커뮤니티 랜딩 페이지
 * @author 현웅
 */
export function CommunityLandingScreen({
  route,
  navigation,
}: AppStackCommunityLandingScreenProps) {
  return (
    <Container>
      <WhiteBackgroundScrollView>
        <CommunityLandingSearch />
        <CommunityLandingInterest />
        <CommunityLandingHotVote />
        <CommunityLandingPopular />
        <CommunityLandingRecent />
      </WhiteBackgroundScrollView>
      <CreateIcon
        onPress={() => {
          navigation.navigate("CommunityVoteUploadScreen", {});
        }}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  position: relative;
`;
