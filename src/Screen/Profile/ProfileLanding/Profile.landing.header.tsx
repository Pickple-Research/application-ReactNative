import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { screenStyles } from "./Profile.landing.screen";
import SettingIcon from "@Resource/svg/setting-icon.svg";
import SendIcon from "@Resource/svg/send-icon.svg";
import AlarmIcon from "@Resource/svg/alarm-icon.svg";

/**
 * 마이페이지 랜딩 페이지 최상단 헤더 섹션
 * @author 현웅
 */
export function ProfileLandingHeader() {
  return (
    <Container style={{ ...screenStyles.padding }}>
      <MYText>MY</MYText>
      <Icons />
    </Container>
  );
}

function Icons() {
  return (
    <Icons__Container>
      <SettingIcon style={styles.icon__margin} />
      <SendIcon style={styles.icon__margin} />
      <AlarmIcon />
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
