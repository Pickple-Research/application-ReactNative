import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, TitleModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useMypageSettingScreenStore } from "src/Zustand";

/**
 * 마이페이지 설정 화면 - 회원탈퇴 모달입니다.
 * @author 현웅
 */
export function MypageSettingResignModal() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "MypageSettingScreen">>();

  const { resign, resigning, resignModalVisible, setResignModalVisible } =
    useMypageSettingScreenStore(
      state => ({
        resign: state.resign,
        resigning: state.resigning,
        resignModalVisible: state.resignModalVisible,
        setResignModalVisible: state.setResignModalVisible,
      }),
      shallow,
    );

  /** 회원탈퇴 후 회원탈퇴 모달을 닫고 홈 메인 페이지로 돌아갑니다 */
  async function resignAndExitToHome() {
    await resign();
    setResignModalVisible(false);
    navigation.reset({
      routes: [{ name: "LandingBottomTabNavigator", params: {} }],
    });
  }

  return (
    <BlackBackgroundModal
      modalVisible={resignModalVisible}
      setModalVisible={setResignModalVisible}>
      <TitleModal
        title={"탈퇴 하시겠습니까?"}
        buttonSymmetric={true}
        LeftButton={
          <RadiusButton
            text="아니오"
            type="PURPLE_CONFIRM"
            onPress={() => {
              setResignModalVisible(false);
            }}
          />
        }
        RightButton={
          <RadiusButton
            text="예"
            type="PURPLE_CANCEL"
            onPress={resignAndExitToHome}
          />
        }
      />
    </BlackBackgroundModal>
  );
}
