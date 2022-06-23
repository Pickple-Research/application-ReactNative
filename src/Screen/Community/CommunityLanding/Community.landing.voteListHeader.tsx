import React from "react";
import styled from "styled-components/native";
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from "react-native-popup-menu";
import { PopupMenuOption } from "src/Component/Popup";
import shallow from "zustand/shallow";
import { useCommunityLandingScreenStore, VoteSortStandard } from "src/Zustand";
import { BodyText } from "src/StyledComponents/Text";
import { globalStyles, popupStyles } from "src/Style";
import SortArrowIcon from "src/Resource/svg/sort-arrow-icon.svg";

/**
 * 커뮤니티 랜딩 페이지 투표 리스트의 필터 헤더입니다.
 * @author 현웅
 */
export function CommunityLandingVoteListHeader() {
  const {
    voteSortStandard,
    setVoteSortStandard,
    //  selectedType,
    //  setSelectedType
  } = useCommunityLandingScreenStore(
    state => ({
      voteSortStandard: state.voteSortStandard,
      setVoteSortStandard: state.setVoteSortStandard,
      //   selectedType: state.selectedType,
      //   setSelectedType: state.setSelectedType,
    }),
    shallow,
  );

  return (
    <Container>
      <SortBy
        voteSortStandard={voteSortStandard}
        setVoteSortStandard={setVoteSortStandard}
      />
    </Container>
  );
}

/**
 * 투표 정렬 기준 선택 팝업 메뉴
 * @author 현웅
 */
function SortBy({
  voteSortStandard,
  setVoteSortStandard,
}: {
  voteSortStandard: VoteSortStandard;
  setVoteSortStandard: (standard: VoteSortStandard) => void;
}) {
  const popupMenuTriggerText = (standard: VoteSortStandard) => {
    switch (standard) {
      case "RECENT":
        return "최신순";
    }
  };

  return (
    <SortBy__Container style={globalStyles.screen__horizontalPadding}>
      <Menu>
        <MenuTrigger>
          <PopupMenuTrigger__Container>
            <SortBy__Text>
              {popupMenuTriggerText(voteSortStandard)}
            </SortBy__Text>
            <SortArrowIcon />
          </PopupMenuTrigger__Container>
        </MenuTrigger>

        <MenuOptions optionsContainerStyle={popupStyles.menuOptionsContainer}>
          <MenuOption>
            <PopupMenuOption
              content="최신순"
              onPress={() => {
                setVoteSortStandard("RECENT");
              }}
              // selected={voteSortStandard === "RECENT"}
            />
          </MenuOption>
        </MenuOptions>
      </Menu>
    </SortBy__Container>
  );
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.grey.white};
  padding-bottom: 8px;
`;

const SortBy__Container = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 5px;
`;

const PopupMenuTrigger__Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 24px;
`;

const SortBy__Text = styled(BodyText)`
  color: ${({ theme }) => theme.color.grey.icon};
  margin-right: 10px;
`;
