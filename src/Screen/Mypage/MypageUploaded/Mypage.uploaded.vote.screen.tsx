import React from "react";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { VoteMypageListItem } from "src/Component/Vote";
import { RadiusButton } from "src/Component/Button";
import { H1 } from "src/StyledComponents/Text";
import { VoteSchema } from "src/Schema";
import shallow from "zustand/shallow";
import { useMypageStore, useMypageUploadedScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

export type MypageUploadedVoteScreenProps = {};

/**
 * 마이페이지 내가 업로드한 투표 페이지입니다
 * @author 현웅
 */
export function MypageUploadedVoteScreen() {
  const uploadedVotes = useMypageStore(state => state.uploadedVotes);

  if (uploadedVotes.length === 0) {
    return (
      <Container>
        <FlatListHeader style={globalStyles.screen__horizontalPadding} />
        <EmptyScreen />
      </Container>
    );
  }

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <UploadedVoteList<React.ElementType>
        data={uploadedVotes}
        contentContainerStyle={{ paddingBottom: 40 }}
        ListHeaderComponent={FlatListHeader}
        stickyHeaderIndices={[0]}
        renderItem={({ item }: { item: VoteSchema }) => (
          <FilteredVoteItem vote={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

/**
 * 업로드한 투표에 대해 전체 | 진행중 | 마감 필터를 적용하는 리스트 헤더입니다.
 * @author 현웅
 */
function FlatListHeader({ style }: { style?: StyleProp<ViewStyle> }) {
  const { voteFilter, setVoteFilter } = useMypageUploadedScreenStore(
    state => ({
      voteFilter: state.voteFilter,
      setVoteFilter: state.setVoteFilter,
    }),
    shallow,
  );

  return (
    <FlatListHeader__Container style={style}>
      <RadiusButton
        text={`전체`}
        type={
          voteFilter === "ALL" ? "PURPLE_SMALL_FILL" : "PURPLE_SMALL_HOLLOW"
        }
        onPress={() => {
          setVoteFilter("ALL");
        }}
        style={styles.filterButton}
      />
      <RadiusButton
        text={`진행중`}
        type={
          voteFilter === "OPENED" ? "PURPLE_SMALL_FILL" : "PURPLE_SMALL_HOLLOW"
        }
        onPress={() => {
          setVoteFilter("OPENED");
        }}
        style={styles.filterButton}
      />
      <RadiusButton
        text={`마감`}
        type={
          voteFilter === "CLOSED" ? "PURPLE_SMALL_FILL" : "PURPLE_SMALL_HOLLOW"
        }
        onPress={() => {
          setVoteFilter("CLOSED");
        }}
        style={styles.filterButton}
      />
    </FlatListHeader__Container>
  );
}

/**
 * 업로드한 투표를 선택한 필터에 따라 나누어 보여줍니다.
 * @author 현웅
 */
function FilteredVoteItem({ vote }: { vote: VoteSchema }) {
  const voteFilter = useMypageUploadedScreenStore(state => state.voteFilter);

  if (voteFilter === "OPENED") {
    if (vote.closed) return null;
    return <VoteMypageListItem vote={vote} />;
  }
  if (voteFilter === "CLOSED") {
    if (!vote.closed) return null;
    return <VoteMypageListItem vote={vote} />;
  }
  return <VoteMypageListItem vote={vote} />;
}

/**
 * 업로드한 투표가 없을 때 보여지는 화면입니다.
 * @author 현웅
 */
function EmptyScreen() {
  return (
    <EmptyScreen__Container>
      <EmptyScreen__Text>게시된 글이 없습니다</EmptyScreen__Text>
    </EmptyScreen__Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.color.grey.white};
`;

const UploadedVoteList = styled.FlatList``;

const FlatListHeader__Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.grey.white};
  padding-top: 8px;
  padding-bottom: 8px;
`;

const styles = StyleSheet.create({
  filterButton: { marginRight: 4 },
});

const EmptyScreen__Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.purple.mild};
`;

const EmptyScreen__Text = styled(H1)`
  color: ${({ theme }) => theme.color.grey.mild};
  font-weight: bold;
  margin-bottom: 40px;
`;
