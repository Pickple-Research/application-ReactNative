import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useResearchParticipateStore } from "src/Zustand";

/**
 * 리서치 참여를 완료하고 (구글 폼 기준) 제출 버튼을 눌렀을 때 나타나는 모달입니다.
 * @author 현웅
 */
export function ResearchParticipateCompleteModal() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "ResearchParticipateScreen">>();

  const { completeModalVisible, setCompleteModalVisible } =
    useResearchParticipateStore(
      state => ({
        completeModalVisible: state.completeModalVisible,
        setCompleteModalVisible: state.setCompleteModalVisible,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={completeModalVisible}
      setModalVisible={setCompleteModalVisible}>
      <Container>
        <RadiusButton
          content="완료!"
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
