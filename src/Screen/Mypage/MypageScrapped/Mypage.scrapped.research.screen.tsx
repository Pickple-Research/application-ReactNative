import React from "react";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { ResearchMypageListItem } from "src/Component/Research";
import { RadiusButton } from "src/Component/Button";
import { H1 } from "src/StyledComponents/Text";
import { ResearchSchema } from "src/Schema";
import shallow from "zustand/shallow";
import { useMypageScrappedScreenStore } from "src/Zustand";
import { didDatePassed } from "src/Util";
import { globalStyles } from "src/Style/globalStyles";

export type MypageScrappedResearchScreenProps = {};

/**
 * 마이페이지 - 나의 스크랩 - 리서치 페이지입니다
 * @author 원제
 */
export function MypageScrappedResearchScreen() {
  const scrappedResearches = useMypageScrappedScreenStore(
    state => state.scrappedResearches,
  );

  if (scrappedResearches.length === 0) {
    return (
      <Container>
        <FlatListHeader style={globalStyles.screen__horizontalPadding} />
        <EmptyScreen />
      </Container>
    );
  }

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <ScrappedResearchList<React.ElementType>
        data={scrappedResearches}
        contentContainerStyle={{ paddingBottom: 40 }}
        ListHeaderComponent={FlatListHeader}
        stickyHeaderIndices={[0]}
        renderItem={({ item }: { item: ResearchSchema }) => (
          <FilteredResearchItem research={item} />
        )}
        ItemSeparatorComponent={FlatlistItemSeparator}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

/**
 * 스크랩한 리서치에 대해 전체 | 진행중 | 마감 필터를 적용하는 리스트 헤더입니다.
 * @author 현웅
 */
function FlatListHeader({ style }: { style?: StyleProp<ViewStyle> }) {
  const { researchFilter, setResearchFilter } = useMypageScrappedScreenStore(
    state => ({
      researchFilter: state.researchFilter,
      setResearchFilter: state.setResearchFilter,
    }),
    shallow,
  );

  return (
    <FlatListHeader__Container style={style}>
      <RadiusButton
        text={`전체`}
        type={
          researchFilter === "ALL" ? "BLUE_SMALL_FILL" : "BLUE_SMALL_HOLLOW"
        }
        onPress={() => {
          setResearchFilter("ALL");
        }}
        style={styles.filterButton}
      />
      <RadiusButton
        text={`진행중`}
        type={
          researchFilter === "OPEN" ? "BLUE_SMALL_FILL" : "BLUE_SMALL_HOLLOW"
        }
        onPress={() => {
          setResearchFilter("OPEN");
        }}
        style={styles.filterButton}
      />
      <RadiusButton
        text={`마감`}
        type={
          researchFilter === "CLOSED" ? "BLUE_SMALL_FILL" : "BLUE_SMALL_HOLLOW"
        }
        onPress={() => {
          setResearchFilter("CLOSED");
        }}
        style={styles.filterButton}
      />
    </FlatListHeader__Container>
  );
}

/**
 * 스크랩한 리서치를 선택한 필터에 따라 나누어 보여줍니다.
 * @author 현웅
 */
function FilteredResearchItem({ research }: { research: ResearchSchema }) {
  const researchFilter = useMypageScrappedScreenStore(
    state => state.researchFilter,
  );

  if (researchFilter === "OPEN") {
    if (research.closed || didDatePassed(research.deadline)) return null;
    return <ResearchMypageListItem research={research} />;
  }
  if (researchFilter === "CLOSED") {
    if (!research.closed && !didDatePassed(research.deadline)) return null;
    return <ResearchMypageListItem research={research} />;
  }
  return <ResearchMypageListItem research={research} />;
}

function FlatlistItemSeparator() {
  return <FlatlistItemSeparator__Container />;
}

/**
 * 스크랩한 리서치가 없을 때 보여지는 화면입니다.
 * @author 현웅
 */
function EmptyScreen() {
  return (
    <EmptyScreen__Container>
      <EmptyScreen__Text>스크랩한 리서치가 없습니다</EmptyScreen__Text>
    </EmptyScreen__Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.color.grey.white};
`;

const ScrappedResearchList = styled.FlatList``;

const FlatListHeader__Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.grey.white};
  padding-top: 8px;
  padding-bottom: 8px;
`;

const styles = StyleSheet.create({
  filterButton: { marginRight: 4 },
});

const FlatlistItemSeparator__Container = styled.View`
  height: 8px;
`;

const EmptyScreen__Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.blue.mild};
`;

const EmptyScreen__Text = styled(H1)`
  color: ${({ theme }) => theme.color.grey.mild};
  font-weight: bold;
  margin-bottom: 40px;
`;
