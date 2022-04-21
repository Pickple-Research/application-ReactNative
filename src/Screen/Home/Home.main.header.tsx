import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import BigSearchIcon from "@Resource/svg/big-search-icon.svg";
import AlarmIcon from "@Resource/svg/alarm-icon.svg";

/**
 * 홈 랜딩 페이지의 헤더
 * @author 현웅
 */
export function HomeMainHeader() {
  return (
    <Container>
      <PickpleResearchText>픽플리</PickpleResearchText>
      <Icon__Container>
        <BigSearchIcon
          style={{ ...styles.icon__margin }}
          width={28}
          height={28}
        />
        <AlarmIcon width={28} height={28} />
      </Icon__Container>
    </Container>
  );
}

const styles = StyleSheet.create({
  icon__margin: { marginRight: 15 },
});

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  margin-bottom: 35px;
`;

const PickpleResearchText = styled.Text`
  color: black;
  font-size: 20px;
`;

const Icon__Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
