import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import styled from "styled-components/native";
import { CommunityVoteUploadInput } from "./Community.vote.upload.input";
import { CommunityVoteUploadBottomButton } from "./Community.vote.upload.bottomButton";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import { VoteUploadBlockExitModal } from "src/Modal";
import shallow from "zustand/shallow";
import { useVoteUploadScreenStore } from "src/Zustand";

export type CommunityVoteUploadScreenProps = {};

/**
 * 투표 업로드 페이지입니다.
 * @author 현웅
 */
export function CommunityVoteUploadScreen() {
  const { clearInput, setBlockExitModalVisible } = useVoteUploadScreenStore(
    state => ({
      clearInput: state.clearInput,
      setBlockExitModalVisible: state.setBlockExitModalVisible,
    }),
    shallow,
  );

  function showBlockExitModal() {
    setBlockExitModalVisible(true);
    return true;
  }

  useEffect(() => {
    //* 투표 작성 중 뒤로가기 버튼을 눌렀을 때 재확인 모달을 띄우도록 이벤트 리스너를 추가합니다.
    BackHandler.addEventListener("hardwareBackPress", showBlockExitModal);

    return () => {
      //* 창을 벗어나면 모든 입력값을 초기화하고 BackButton 이벤트 리스너를 제거합니다.
      clearInput();
      BackHandler.removeEventListener("hardwareBackPress", showBlockExitModal);
    };
  }, []);

  return (
    <Container>
      <WhiteBackgroundScrollView>
        <CommunityVoteUploadInput />
      </WhiteBackgroundScrollView>
      <CommunityVoteUploadBottomButton />
      <VoteUploadBlockExitModal />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  position: relative;
  flex: 1;
  background-color: white;
  //* CommunityVoteUploadBottomButton의 height값과 같은 값으로 유지해야 합니다.
  padding-bottom: 60px;
`;
