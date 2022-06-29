import React from "react";
import styled from "styled-components/native";
import { CreditHistoryListItemComponent } from "src/Component/Mypage";
import { CreditHistorySchema } from "src/Schema";
import shallow from "zustand/shallow";
import { useMypageCreditHistoryScreenStore } from "src/Zustand";

/**
 * 마이페이지 - 크레딧 사용내역 - 사용내역 리스트입니다.
 * @author 현웅
 */
export function MypageCreditHistoryList() {
  const { creditHistories } = useMypageCreditHistoryScreenStore(
    state => ({
      creditHistories: state.creditHistories,
    }),
    shallow,
  );

  return (
    <CreditHistoryList<React.ElementType>
      data={creditHistories}
      contentContainerStyle={{ paddingBottom: 40 }}
      ListHeaderComponent={FlatListHeader}
      stickyHeaderIndices={[0]}
      renderItem={({ item }: { item: CreditHistorySchema }) => (
        <FilteredCreditHitoryItem creditHistory={item} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

/**
 * 크레딧 사용내역에 대해 전체 | 사용한 크레딧 | 받은 크레딧 필터를 적용하는 리스트 헤더입니다.
 * @author 현웅
 */
function FlatListHeader() {
  return (
    <FlatListHeader__Container>
      <FlatListHeader__Text>최신순</FlatListHeader__Text>
    </FlatListHeader__Container>
  );
}

/**
 * 크레딧 사용내역을 선택한 필터에 따라 나누어 보여줍니다.
 * @author 현웅
 */
function FilteredCreditHitoryItem({
  creditHistory,
}: {
  creditHistory: CreditHistorySchema;
}) {
  const creditHistoryFilter = useMypageCreditHistoryScreenStore(
    state => state.creditHistoryFilter,
  );

  if (creditHistoryFilter === "INCOME") {
    if (creditHistory.scale < 0) return null;
    <CreditHistoryListItemComponent creditHistory={creditHistory} />;
  }
  if (creditHistoryFilter === "EXPENDITURE") {
    if (creditHistory.scale >= 0) return null;
    <CreditHistoryListItemComponent creditHistory={creditHistory} />;
  }
  return <CreditHistoryListItemComponent creditHistory={creditHistory} />;
}

const CreditHistoryList = styled.FlatList``;

const FlatListHeader__Container = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.color.purple.mild};
  padding: 6px 20px;
`;

const FlatListHeader__Text = styled.Text`
  color: ${({ theme }) => theme.color.grey.icon};
`;
