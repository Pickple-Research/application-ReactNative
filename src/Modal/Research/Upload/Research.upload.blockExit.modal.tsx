import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useResearchUploadStore } from "src/Zustand";

/**
 * 리서치 작성 중 뒤로가기 버튼을 눌렀을 때 나타나는 모달입니다.
 * @author 현웅
 */
export function ResearchUploadBlockExitModal() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "ResearchUploadScreen">>();

  const { blockExitModalVisible, setBlockExitModalVisible } =
    useResearchUploadStore(
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

const Container = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.color.grey.white};
`;
