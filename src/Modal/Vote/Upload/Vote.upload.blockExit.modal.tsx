import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useVoteUploadStore } from "src/Zustand";

/**
 * 투표 작성 중 뒤로가기 버튼을 눌렀을 때 나타나는 모달입니다.
 * @author 현웅
 */
export function VoteUploadBlockExitModal() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "CommunityVoteUploadScreen">>();

  const { blockExitModalVisible, setBlockExitModalVisible } =
    useVoteUploadStore(
      state => ({
        blockExitModalVisible: state.blockExitModalVisible,
        setBlockExitModalVisible: state.setBlockExitModalVisible,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={blockExitModalVisible}
      setModalVisible={setBlockExitModalVisible}>
      <Container>
        <RadiusButton
          content="확인"
          type="ADD_GIFT"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Container>
    </BlackBackgroundModal>
  );
}

const Container = styled.View``;
