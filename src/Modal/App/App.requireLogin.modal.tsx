import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import {
  BlackBackgroundModal,
  ModalContentContainer,
} from "src/Component/Modal";
import { H2 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useAppStore } from "src/Zustand";

/**
 * 로그인하지 않은 상태에서 로그인이 필요한 기능에 접근할 때 나타나는 모달입니다.
 * 해당 모달을 트리거 시킨 곳에 따라 내용과 버튼 색상이 달라집니다.
 * @author 현웅
 */
export function RequireLoginModal() {
  const navigation = useNavigation<NavigationProp<AppStackProps>>();

  const {
    requireLoginModalVisible,
    setRequireLoginModalVisible,
    requireLoginModleText,
  } = useAppStore(
    state => ({
      requireLoginModalVisible: state.requireLoginModalVisible,
      setRequireLoginModalVisible: state.setRequireLoginModalVisible,
      requireLoginModleText: state.requireLoginModleText,
    }),
    shallow,
  );

  function modalContent() {
    switch (requireLoginModleText) {
      case "ALARM":
        return `나에게 온 알림을 확인해 보세요.`;
      case "RESEARCH_UPLOAD":
        return `리서치를 작성해 보세요.`;
      case "RESEARCH_PARTICIPATE":
        return `리서치에 참여해 보세요.`;
      case "VOTE_UPLOAD":
        return `투표를 작성해 보세요.`;
      case "VOTE_PARTICIPATE":
        return `투표에 참여해 보세요.`;
      case "MYPAGE":
        return `마이페이지를 이용해 보세요.`;
    }
  }

  function buttonColor() {
    switch (requireLoginModleText) {
      case "ALARM":
      case "RESEARCH_UPLOAD":
      case "RESEARCH_PARTICIPATE":
        return "BLUE";
      case "VOTE_UPLOAD":
      case "VOTE_PARTICIPATE":
      case "MYPAGE":
        return "PURPLE";
    }
  }

  return (
    <BlackBackgroundModal
      modalVisible={requireLoginModalVisible}
      setModalVisible={setRequireLoginModalVisible}>
      <ModalContentContainer>
        <TitleContent content={modalContent()} />
        <Buttons
          buttonColor={buttonColor()}
          onLeftButtonPress={() => {
            setRequireLoginModalVisible(false);
          }}
          onRightButtonPress={() => {
            setRequireLoginModalVisible(false);
            navigation.navigate("LoginScreen", {});
          }}
        />
      </ModalContentContainer>
    </BlackBackgroundModal>
  );
}

function TitleContent({ content }: { content: string }) {
  return (
    <TitleContent__Container>
      <TitleText>로그인이 필요합니다</TitleText>
      <ContentText>로그인이 필요한 서비스입니다.</ContentText>
      <ContentText>{`지금 로그인하고 ${content}`}</ContentText>
    </TitleContent__Container>
  );
}

function Buttons({
  buttonColor,
  onLeftButtonPress,
  onRightButtonPress,
}: {
  buttonColor: "BLUE" | "PURPLE";
  onLeftButtonPress: () => void;
  onRightButtonPress: () => void;
}) {
  return (
    <Buttons__Container>
      <LeftButton__Container>
        <RadiusButton
          text="취소"
          type={buttonColor === "BLUE" ? "BLUE_CANCEL" : "PURPLE_CANCEL"}
          styleType="NARROW"
          onPress={onLeftButtonPress}
        />
      </LeftButton__Container>
      <ButtonSplitter />
      <RightButton__Container>
        <RadiusButton
          text="로그인하러 가기"
          type={buttonColor === "BLUE" ? "BLUE_CONFIRM" : "PURPLE_CONFIRM"}
          styleType="NARROW"
          onPress={onRightButtonPress}
        />
      </RightButton__Container>
    </Buttons__Container>
  );
}

// TitleContent()
const TitleContent__Container = styled.View`
  padding: 0px 10px;
  margin-top: 12px;
  margin-bottom: 24px;
`;

const TitleText = styled.Text`
  color: ${({ theme }) => theme.color.grey.deep};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 18px;
`;

const ContentText = styled(H2)`
  color: ${({ theme }) => theme.color.grey.main};
  line-height: 20px;
`;

// Buttons()
const Buttons__Container = styled.View`
  flex-direction: row;
`;

const LeftButton__Container = styled.View`
  flex: 3;
`;
const RightButton__Container = styled.View`
  flex: 8;
`;

const ButtonSplitter = styled.View`
  width: 8px;
`;
