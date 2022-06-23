import React from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { CommunityLandingVoteListHeader } from "./Community.landing.voteListHeader";
import { VoteListItem } from "src/Component/Vote";
import { VoteSchema } from "src/Schema";
import shallow from "zustand/shallow";
import {
  useUserStore,
  useVoteStore,
  useCommunityLandingScreenStore,
} from "src/Zustand";
import { themeColors } from "src/Theme";
import { globalStyles } from "src/Style";

/**
 * 커뮤니티 랜딩 페이지 투표 리스트 섹션
 * @author 현웅
 */
export function CommunityLandingVoteList({
  recommendSectionHeight,
  onScroll,
}: {
  recommendSectionHeight: number;
  onScroll: (event: any) => void;
}) {
  const userActivity = useUserStore(state => state.userActivity);
  const votes = useVoteStore(state => state.votes);
  const { loading, getOlderVotes } = useCommunityLandingScreenStore(
    state => ({
      loading: state.loading,
      getOlderVotes: state.getOlderVotes,
    }),
    shallow,
  );

  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <Container>
      <VoteList<React.ElementType>
        data={votes}
        renderItem={({ item }: { item: VoteSchema }) => {
          return (
            <VoteListItem
              key={item._id}
              participated={userActivity.participatedVoteInfos.some(
                voteInfo => {
                  return voteInfo.voteId === item._id;
                },
              )}
              vote={item}
              onPress={() => {
                navigation.navigate("CommunityVoteDetailScreen", {
                  vote: item,
                });
              }}
            />
          );
        }}
        contentContainerStyle={{
          paddingTop: recommendSectionHeight,
          // marginLeft: 20,
          // marginRight: 20,
          paddingHorizontal: 14,
          paddingBottom: 40,
          // borderWidth: 1,
          // borderColor: themeColors().purple.mild,
          // borderRadius: 10,
        }}
        onScroll={onScroll}
        //? 스크롤 이벤트를 일으키는 간극을 조정합니다. iOS에서 버벅이는 현상을 방지합니다.
        scrollEventThrottle={16}
        ListHeaderComponent={CommunityLandingVoteListHeader}
        stickyHeaderIndices={[0]}
        onEndReached={getOlderVotes}
      />
    </Container>
  );
}

const Container = styled.View``;

const VoteList = styled(Animated.FlatList)``;
