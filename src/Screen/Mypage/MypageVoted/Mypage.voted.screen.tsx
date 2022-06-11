import React from "react";
import styled from "styled-components/native";
import { MypageVotedFilter } from "./Mypage.voted.filter";
import { VoteVotedItem } from "src/Component/Vote";
import { useVoteStore } from "src/Zustand";
import { VoteSchema } from "src/Schema";
import { globalStyles } from "src/Style/globalStyles";

export type MypageVotedScreenProps = {};

/**
 * 마이페이지 '투표한 글' 페이지
 * @author 현웅
 */
export function MypageVotedScreen() {
  const votes = useVoteStore(state => state.votes);

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <VotedItemsList<React.ElementType>
        data={votes}
        renderItem={({ item }: { item: VoteSchema }) => (
          <VoteVotedItem vote={item} style={{ marginVertical: 4 }} />
        )}
        showsVerticalScrollIndicator={false}
      />
      {/*
        보다 나중에 정의된 컴포넌트가 위로 올라오므로
        투표 리스트 코드보다 아래에 있어야 합니다.
       */}
      <MypageVotedFilter />
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  align-items: center;
  flex: 1;
  background-color: white;
`;

const VotedItemsList = styled.FlatList`
  width: 100%;
  //? MypageVotedFilter의 높이와 같거나 커야합니다.
  padding-top: 40px;
`;
