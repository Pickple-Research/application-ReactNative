import React from "react";
import styled from "styled-components/native";
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from "react-native-popup-menu";
import { BackButtonAndFunctionScreenHeader } from "src/Component/View";
import { PopupMenuOption } from "src/Component/Popup";
import { useUserStore, useResearchDetailScreenStore } from "src/Zustand";
import { popupStyles } from "src/Style";
import ShareIcon from "src/Resource/svg/share-icon.svg";
import VerticalDotsIcon from "src/Resource/svg/vertical-dots-icon.svg";
import PencilBlankIcon from "src/Resource/svg/pencil-blank-icon.svg";
import TrashBinBlankIcon from "src/Resource/svg/trashbin-blank-icon.svg";
import BellHangingIcon from "src/Resource/svg/bell-hanging-icon.svg";

/**
 * 리서치 상세정보 페이지 스크린 헤더
 * @author 현웅
 */
export function ResearchDetailScreenHeader() {
  return (
    <BackButtonAndFunctionScreenHeader rightComponents={<RightComponents />} />
  );
}

function RightComponents() {
  return (
    <RightComponents__Container>
      <ShareButton />
      <DotsButton />
    </RightComponents__Container>
  );
}

/**
 * 공유 아이콘
 * @author 현웅
 */
function ShareButton() {
  return (
    <ShareButton__Container>
      <PopupMenuTrigger__Container>
        <ShareIcon />
      </PopupMenuTrigger__Container>
    </ShareButton__Container>
  );
}

/**
 * 3점 메뉴
 * @author 현웅
 */
function DotsButton() {
  const user = useUserStore(state => state.user);
  const researchDetail = useResearchDetailScreenStore(
    state => state.researchDetail,
  );

  const isAuthor = user._id === researchDetail.authorId;

  return (
    <DotsButton__Container>
      <Menu>
        <MenuTrigger>
          <PopupMenuTrigger__Container>
            <VerticalDotsIcon />
          </PopupMenuTrigger__Container>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={popupStyles.menuOptionsContainer}>
          {isAuthor ? (
            //* 리서치 작성자인 경우
            <>
              <MenuOption>
                <PopupMenuOption
                  Icon={<PencilBlankIcon />}
                  content="수정하기"
                  onPress={() => {}}
                />
              </MenuOption>
              <MenuOption>
                <PopupMenuOption
                  Icon={<TrashBinBlankIcon />}
                  content="삭제하기"
                  onPress={() => {}}
                />
              </MenuOption>
            </>
          ) : (
            //* 일반 참여자인 경우
            <MenuOption>
              <PopupMenuOption
                Icon={<BellHangingIcon />}
                content="신고하기"
                onPress={() => {}}
              />
            </MenuOption>
          )}
        </MenuOptions>
      </Menu>
    </DotsButton__Container>
  );
}

const RightComponents__Container = styled.View`
  flex-direction: row;
`;

const ShareButton__Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const DotsButton__Container = styled(ShareButton__Container)`
  margin-left: 12px;
`;

const PopupMenuTrigger__Container = styled(ShareButton__Container)`
  width: 24px;
`;
