import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, TitleContentModal } from "src/Component/Modal";
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
      <TitleContentModal
        title={`로그인이 필요합니다`}
        content={`로그인이 필요한 서비스입니다.\n지금 로그인하고 ${modalContent()}`}
        head={false}
        alignCenter={false}
        buttonSymmetric={false}
        LeftButton={
          <RadiusButton
            text="취소"
            type={buttonColor() === "BLUE" ? "BLUE_CANCEL" : "PURPLE_CANCEL"}
            styleType="NARROW"
            onPress={() => {
              setRequireLoginModalVisible(false);
            }}
          />
        }
        RightButton={
          <RadiusButton
            text="로그인하러 가기"
            type={buttonColor() === "BLUE" ? "BLUE_CONFIRM" : "PURPLE_CONFIRM"}
            styleType="NARROW"
            onPress={() => {
              setRequireLoginModalVisible(false);
              navigation.navigate("LoginScreen", {});
            }}
          />
        }
      />
    </BlackBackgroundModal>
  );
}
