import React from "react";
import { StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import styled from "styled-components/native";
import shallow from "zustand/shallow";
import { useAppStore, useUserStore } from "src/Zustand";
import { globalStyles } from "src/Style";
import SettingIcon from "src/Resource/svg/setting-icon.svg";
import SendIcon from "src/Resource/svg/send-icon.svg";
import AlarmIcon from "src/Resource/svg/alarm-icon.svg";

/**
 * 마이페이지 랜딩 페이지 최상단 헤더 섹션
 * @author 현웅
 */
export function MypageLandingHeader() {
  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <MYText>MY</MYText>
      <Icons />
    </Container>
  );
}

function Icons() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  const { setRequireLoginModalVisible, setRequireLoginModleText } = useAppStore(
    state => ({
      setRequireLoginModalVisible: state.setRequireLoginModalVisible,
      setRequireLoginModleText: state.setRequireLoginModleText,
    }),
    shallow,
  );

  const user = useUserStore(state => state.user);

  function onPressSetting() {
    if (user._id === "") {
      setRequireLoginModleText("MYPAGE");
      setRequireLoginModalVisible(true);
      return;
    }
    navigation.navigate("MypageSettingScreen", {});
  }

  function onPressAlarm() {
    if (user._id === "") {
      setRequireLoginModleText("ALARM");
      setRequireLoginModalVisible(true);
      return;
    }
    navigation.navigate("MypageAlarmScreen", {});
  }

  return (
    <Icons__Container>
      <SettingIcon style={styles.icon__margin} onPress={onPressSetting} />
      <SendIcon
        style={styles.icon__margin}
        onPress={() => {
          navigation.navigate("AuthFunnelScreen", {});
        }}
      />
      <AlarmIcon onPress={onPressAlarm} />
    </Icons__Container>
  );
}

const styles = StyleSheet.create({
  icon__margin: {
    marginRight: 12,
  },
});

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const MYText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

const Icons__Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
