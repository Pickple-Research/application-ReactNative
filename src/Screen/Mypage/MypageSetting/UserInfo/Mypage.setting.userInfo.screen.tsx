import React from "react";
import styled from "styled-components/native";
import { MypageSettingLogoutModal, MypageSettingResignModal } from "src/Modal";
import { MypageFunctionText } from "src/Component/Mypage";
import { H2 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useMypageSettingScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

export type MypageSettingUserInfoScreenProps = {};

export function MypageSettingUserInfoScreen() {
  const { setLogoutModalVisible, setResignModalVisible } =
    useMypageSettingScreenStore(
      state => ({
        setLogoutModalVisible: state.setLogoutModalVisible,
        setResignModalVisible: state.setResignModalVisible,
      }),
      shallow,
    );

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <MypageFunctionText
        text={`개인 정보 관리`}
        style={{ marginBottom: 20 }}
      />
      <RowContainer
        activeOpacity={0.8}
        onPress={() => {
          setLogoutModalVisible(true);
        }}>
        <RowText>로그아웃</RowText>
      </RowContainer>
      <RowContainer
        activeOpacity={0.8}
        onPress={() => {
          setResignModalVisible(true);
        }}>
        <RowText>회원탈퇴</RowText>
      </RowContainer>
      <MypageSettingLogoutModal />
      <MypageSettingResignModal />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.color.grey.white};
`;

const RowContainer = styled.TouchableOpacity`
  padding: 10px 0px;
  margin-bottom: 6px;
`;

const RowText = styled(H2)`
  color: ${({ theme }) => theme.color.grey.main};
  font-weight: bold;
`;
