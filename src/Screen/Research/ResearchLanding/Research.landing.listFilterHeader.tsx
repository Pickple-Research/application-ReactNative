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
import { useResearchStore } from "src/Zustand";
import { BodyText } from "src/StyledComponents/Text";
import { globalStyles, popupStyles } from "src/Style";
import SortArrowIcon from "src/Resource/svg/sort-arrow-icon.svg";

/**
 * 리서치 랜딩 페이지의 리서치 리스트의 필터 헤더입니다.
 * @author 현웅
 */
export function ResearchLandingListFilterHeader() {
  const { selectedType, setSelectedType } = useResearchStore(
    state => ({
      selectedType: state.selectedType,
      setSelectedType: state.setSelectedType,
    }),
    shallow,
  );

  return (
    <Container>
      <SortBy />
      <ResearchTypeCarousel
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
    </Container>
  );
}

function SortBy() {
  return (
    <SortBy__Container style={globalStyles.screen__horizontalPadding}>
      <Menu>
        <MenuTrigger>
          <PopupMenuTrigger__Container>
            <SortBy__Text>최신순</SortBy__Text>
            <SortArrowIcon />
          </PopupMenuTrigger__Container>
        </MenuTrigger>

        <MenuOptions optionsContainerStyle={popupStyles.menuOptionsContainer}>
          <MenuOption>
            <PopupMenuOption
              content="최신순"
              onPress={() => {}}
              selected={true}
            />
          </MenuOption>
          <MenuOption>
            <PopupMenuOption content="경품 많은 순" onPress={() => {}} />
          </MenuOption>
          <MenuOption>
            <PopupMenuOption content="참여자 많은 순" onPress={() => {}} />
          </MenuOption>
          <MenuOption>
            <PopupMenuOption content="마감 임박순" onPress={() => {}} />
          </MenuOption>
          <MenuOption>
            <PopupMenuOption content="크레딧순" onPress={() => {}} />
          </MenuOption>
        </MenuOptions>
      </Menu>
    </SortBy__Container>
  );
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.grey.white};
  padding-bottom: 8px;
  /* border: 1px solid black; */
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
