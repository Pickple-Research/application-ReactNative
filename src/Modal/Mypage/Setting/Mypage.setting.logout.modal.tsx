import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, TitleModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useUserStore, useMypageSettingScreenStore } from "src/Zustand";

/**
 * 마이페이지 설정 화면 - 로그아웃 모달입니다.
 * @author 현웅
 */
export function MypageSettingLogoutModal() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "MypageSettingScreen">>();

  const logout = useUserStore(state => state.logout);
  const { logoutModalVisible, setLogoutModalVisible } =
    useMypageSettingScreenStore(
      state => ({
        logoutModalVisible: state.logoutModalVisible,
        setLogoutModalVisible: state.setLogoutModalVisible,
      }),
      shallow,
    );

  /** 로그아웃한 후 로그아웃 모달을 닫고 홈 메인 페이지로 돌아갑니다 */
  async function logoutAndExitToHome() {
    await logout();
    setLogoutModalVisible(false);
    navigation.reset({
      routes: [{ name: "LandingBottomTabNavigator", params: {} }],
    });
  }

  return (
    <BlackBackgroundModal
      modalVisible={logoutModalVisible}
      setModalVisible={setLogoutModalVisible}>
      <TitleModal
        title={"로그아웃 하시겠습니까?"}
        buttonSymmetric={true}
        LeftButton={
          <RadiusButton
            text="아니오"
            type="PURPLE_CONFIRM"
            onPress={() => {
              setLogoutModalVisible(false);
            }}
          />
        }
        RightButton={
          <RadiusButton
            text="예"
            type="PURPLE_CANCEL"
            onPress={logoutAndExitToHome}
          />
        }
      />
    </BlackBackgroundModal>
  );
}
