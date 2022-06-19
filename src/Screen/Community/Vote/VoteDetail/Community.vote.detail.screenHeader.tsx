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
import shallow from "zustand/shallow";
import { useUserStore, useVoteDetailScreenStore } from "src/Zustand";
import { popupStyles } from "src/Style";
import ShareIcon from "src/Resource/svg/share-icon.svg";
import VerticalDotsIcon from "src/Resource/svg/vertical-dots-icon.svg";
import PencilBlankIcon from "src/Resource/svg/pencil-blank-icon.svg";
import TrashBinBlankIcon from "src/Resource/svg/trashbin-blank-icon.svg";
import BellHangingIcon from "src/Resource/svg/bell-hanging-icon.svg";

/**
 * 투표 상세 페이지 스크린 헤더입니다.
 * @author 현웅
 */
export function CommunityVoteDetailScreenHeader() {
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
  const { voteDetail, setVoteDeleteModalVisible, setVoteReportModalVisible } =
    useVoteDetailScreenStore(
      state => ({
        voteDetail: state.voteDetail,
        setVoteDeleteModalVisible: state.setVoteDeleteModalVisible,
        setVoteReportModalVisible: state.setVoteReportModalVisible,
      }),
      shallow,
    );

  const isAuthor = user._id === voteDetail.authorId;

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
            //* 투표 작성자인 경우
            <>
              <MenuOption>
                <PopupMenuOption
                  Icon={<PencilBlankIcon />}
                  content="수정하기"
                  onPress={() => {}}
                />
              </MenuOption>
              {voteDetail.participantsNum < 10 && (
                //* 참여자가 10명 미만인 경우에만 삭제 메뉴 표시
                <MenuOption>
                  <PopupMenuOption
                    Icon={<TrashBinBlankIcon />}
                    content="삭제하기"
                    onPress={() => {
                      setVoteDeleteModalVisible(true);
                    }}
                  />
                </MenuOption>
              )}
            </>
          ) : (
            //* 일반 참여자인 경우
            <MenuOption>
              <PopupMenuOption
                Icon={<BellHangingIcon />}
                content="신고하기"
                onPress={() => {
                  setVoteReportModalVisible(true);
                }}
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
