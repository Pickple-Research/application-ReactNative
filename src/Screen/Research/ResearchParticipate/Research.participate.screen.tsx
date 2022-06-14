import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackProps } from "src/Navigator";
import { ResearchParticipateWebView } from "./Research.participate.webView";
import {
  ResearchParticipateLoadingModal,
  ResearchParticipateBlockExitModal,
  ResearchParticipateCompleteModal,
} from "src/Modal";
import { useResearchParticipateStore } from "src/Zustand";

export type ResearchParticipateScreenProps = { link: string };

/**
 * 리서치 참여 페이지입니다. 내부적으로 WebView를 사용합니다.
 * @author 현웅
 */
export function ResearchParticipateScreen({
  route,
}: NativeStackScreenProps<AppStackProps, "ResearchParticipateScreen">) {
  const { setBlockExitModalVisible, clearInputs } = useResearchParticipateStore(
    state => ({
      setBlockExitModalVisible: state.setBlockExitModalVisible,
      clearInputs: state.clearInputs,
    }),
  );

  function showBlockExitModal() {
    setBlockExitModalVisible(true);
    return true;
  }

  useEffect(() => {
    //* 리서치 참여 중 뒤로가기 버튼을 눌렀을 때 재확인 모달을 띄우도록 이벤트 리스너를 추가합니다.
    BackHandler.addEventListener("hardwareBackPress", showBlockExitModal);

    //* 리서치 참여 페이지를 벗어나면 이벤트 리스너를 삭제하고 모든 상태값을 초기화합니다.
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", showBlockExitModal);
      clearInputs();
    };
  }, []);

  return (
    <Container>
      <ResearchParticipateWebView link={route.params.link} />
      <ResearchParticipateLoadingModal />
      <ResearchParticipateBlockExitModal />
      <ResearchParticipateCompleteModal />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.color.grey.white};
`;
