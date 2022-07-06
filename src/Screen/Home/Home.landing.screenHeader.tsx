import React from "react";
import { StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import styled from "styled-components/native";
import { ScreenHeader__Container } from "src/StyledComponents/View";
import shallow from "zustand/shallow";
import { useAppStore, useUserStore } from "src/Zustand";
import SearchBigIcon from "src/Resource/svg/search-big-icon.svg";
import AlarmIcon from "src/Resource/svg/alarm-icon.svg";

/**
 * 홈 랜딩 페이지의 스크린 헤더
 * @author 현웅
 */
export function HomeLandingScreenHeader() {
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

  function onPressAlarm() {
    if (user._id === "") {
      setRequireLoginModleText("ALARM");
      setRequireLoginModalVisible(true);
      return;
    }
    navigation.navigate("MypageAlarmScreen", {});
  }

  return (
    <Container>
      <Text__Container>
        <PickpleResearchText>픽플리</PickpleResearchText>
      </Text__Container>
      <Icons__Container>
        <SearchBigIcon style={{ ...styles.icon__margin }} />
        <AlarmIcon onPress={onPressAlarm} />
      </Icons__Container>
    </Container>
  );
}

const styles = StyleSheet.create({
  icon__margin: { marginRight: 15 },
});

const Container = styled(ScreenHeader__Container)`
  justify-content: space-between;
`;

const Text__Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
`;

const PickpleResearchText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

const Icons__Container = styled(Text__Container)`
  justify-content: flex-end;
`;
