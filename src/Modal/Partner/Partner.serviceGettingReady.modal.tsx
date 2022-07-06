import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LandingBottomTabProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import {
  BlackBackgroundModal,
  ModalContentContainer,
} from "src/Component/Modal";
import { H2 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { usePartnerLandingScreenStore } from "src/Zustand";

/**
 * 파트너 서비스 준비중 모달
 * @author 현웅
 */
export function PartnerServiceGettingReadyModal() {
  const navigation =
    useNavigation<
      NavigationProp<LandingBottomTabProps, "PartnerLandingScreen">
    >();

  const {
    serviceGettingReadyModalVisible,
    setServiceGettingReadyModalVisible,
  } = usePartnerLandingScreenStore(
    state => ({
      serviceGettingReadyModalVisible: state.serviceGettingReadyModalVisible,
      setServiceGettingReadyModalVisible:
        state.setServiceGettingReadyModalVisible,
    }),
    shallow,
  );

  return (
    <BlackBackgroundModal
      modalVisible={serviceGettingReadyModalVisible}
      setModalVisible={setServiceGettingReadyModalVisible}
      allowIgnore={false}>
      <ModalContentContainer>
        <ModalTitleContentContainer>
          <ModalTitleText>준비중인 페이지입니다</ModalTitleText>
          <ModalContentText>
            {`예비/초기 창업팀과 스타트업을\n가장 먼저 만나볼 수 있는 공간!\n리서치에 참여함으로써 내 의견이 반영된\n제품과 서비스를 만날 수 있어요.`}
          </ModalContentText>
        </ModalTitleContentContainer>
        <RadiusButton
          text="홈으로 돌아가기"
          type="BLUE_CONFIRM"
          onPress={() => {
            setServiceGettingReadyModalVisible(false);
            navigation.navigate("HomeLandingScreen", {});
          }}
        />
      </ModalContentContainer>
    </BlackBackgroundModal>
  );
}

const ModalTitleContentContainer = styled.View`
  padding: 0px 10px;
  margin-top: 12px;
  margin-bottom: 24px;
`;

const ModalTitleText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.color.grey.deep};
  font-weight: bold;
  margin-bottom: 20px;
`;

const ModalContentText = styled(H2)`
  color: ${({ theme }) => theme.color.grey.main};
  line-height: 20px;
`;
