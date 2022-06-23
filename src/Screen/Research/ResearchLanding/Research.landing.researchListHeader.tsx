import React from "react";
import styled from "styled-components/native";
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from "react-native-popup-menu";
import { ResearchTypeCarousel } from "src/Component/Research";
import { PopupMenuOption } from "src/Component/Popup";
import shallow from "zustand/shallow";
import {
  useResearchLandingScreenStore,
  ResearchSortStandard,
} from "src/Zustand";
import { BodyText } from "src/StyledComponents/Text";
import { globalStyles, popupStyles } from "src/Style";
import SortArrowIcon from "src/Resource/svg/sort-arrow-icon.svg";

/**
 * 리서치 랜딩 페이지 리서치 리스트의 필터 헤더입니다.
 * @author 현웅
 */
export function ResearchLandingResearchListHeader() {
  const {
    researchSortStandard,
    setResearchSortStandard,
    selectedResearchType,
    setSelectedResearchType,
  } = useResearchLandingScreenStore(
    state => ({
      researchSortStandard: state.researchSortStandard,
      setResearchSortStandard: state.setResearchSortStandard,
      selectedResearchType: state.selectedResearchType,
      setSelectedResearchType: state.setSelectedResearchType,
    }),
    shallow,
  );

  return (
    <Container>
      <SortBy
        researchSortStandard={researchSortStandard}
        setResearchSortStandard={setResearchSortStandard}
      />
      <ResearchTypeCarousel
        selectedResearchType={selectedResearchType}
        setSelectedResearchType={setSelectedResearchType}
      />
    </Container>
  );
}

/**
 * 리서치 정렬 기준 선택 팝업 메뉴
 * @author 현웅
 */
function SortBy({
  researchSortStandard,
  setResearchSortStandard,
}: {
  researchSortStandard: ResearchSortStandard;
  setResearchSortStandard: (standard: ResearchSortStandard) => void;
}) {
  const popupMenuTriggerText = (standard: ResearchSortStandard) => {
    switch (standard) {
      case "RECENT":
        return "최신순";
      case "GIFT":
        return "경품 많은 순";
      case "PARTICIPANT":
        return "참여자 많은 순";
      case "CLOSE":
        return "마감 임박순";
      case "CREDIT":
        return "크레딧순";
    }
  };

  return (
    <SortBy__Container style={globalStyles.screen__horizontalPadding}>
      <Menu>
        <MenuTrigger>
          <PopupMenuTrigger__Container>
            <SortBy__Text>
              {popupMenuTriggerText(researchSortStandard)}
            </SortBy__Text>
            <SortArrowIcon />
          </PopupMenuTrigger__Container>
        </MenuTrigger>

        <MenuOptions optionsContainerStyle={popupStyles.menuOptionsContainer}>
          <MenuOption>
            <PopupMenuOption
              content="최신순"
              onPress={() => {
                setResearchSortStandard("RECENT");
              }}
              // selected={researchSortStandard === "RECENT"}
            />
          </MenuOption>
          <MenuOption>
            <PopupMenuOption
              content="경품 많은 순"
              onPress={() => {
                setResearchSortStandard("GIFT");
              }}
              // selected={researchSortStandard === "GIFT"}
            />
          </MenuOption>
          <MenuOption>
            <PopupMenuOption
              content="참여자 많은 순"
              onPress={() => {
                setResearchSortStandard("PARTICIPANT");
              }}
              // selected={researchSortStandard === "PARTICIPANT"}
            />
          </MenuOption>
          <MenuOption>
            <PopupMenuOption
              content="마감 임박순"
              onPress={() => {
                setResearchSortStandard("CLOSE");
              }}
              // selected={researchSortStandard === "CLOSE"}
            />
          </MenuOption>
          <MenuOption>
            <PopupMenuOption
              content="크레딧순"
              onPress={() => {
                setResearchSortStandard("CREDIT");
              }}
              // selected={researchSortStandard === "CREDIT"}
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
