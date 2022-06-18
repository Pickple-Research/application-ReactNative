import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { BlackBackgroundModal } from "src/Component/Modal";
import { H4 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useResearchParticipateScreenStore } from "src/Zustand";

/**
 * 리서치 외부 폼이 로딩 중일 때 나타나는 모달입니다.
 * @author 현웅
 */
export function ResearchParticipateFormLoadingModal() {
  const { formLoadingModalVisible, setFormLoadingModalVisible } =
    useResearchParticipateScreenStore(
      state => ({
        formLoadingModalVisible: state.formLoadingModalVisible,
        setFormLoadingModalVisible: state.setFormLoadingModalVisible,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={formLoadingModalVisible}
      setModalVisible={setFormLoadingModalVisible}
      style={{ backgroundColor: "rgba(237, 245, 253, 0.92)" }}>
      <Loading__Text>외부 폼으로 이동 중입니다.</Loading__Text>
      <ReturnToPickply />
    </BlackBackgroundModal>
  );
}

function ReturnToPickply() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "ResearchParticipateScreen">>();

  return (
    <ReturnToPickply__Container>
      <ReturnToPickply__TextContainer
        activeOpacity={1}
        onPress={() => {
          navigation.goBack();
        }}
        style={{ borderBottomWidth: 0.6, borderColor: "#999999" }}>
        <ReturnToPickply__BlueText>픽플리</ReturnToPickply__BlueText>
        <ReturnToPickply__Text>로 돌아가기</ReturnToPickply__Text>
      </ReturnToPickply__TextContainer>
    </ReturnToPickply__Container>
  );
}

const Loading__Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.blue.text};
  margin-bottom: 120px;
`;

const ReturnToPickply__Container = styled.View`
  position: absolute;
  bottom: 56px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

const ReturnToPickply__TextContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding-bottom: 3px;
`;

const ReturnToPickply__BlueText = styled(H4)`
  color: ${({ theme }) => theme.color.blue.text};
  font-weight: bold;
`;

const ReturnToPickply__Text = styled(H4)`
  color: ${({ theme }) => theme.color.grey.mild};
`;
