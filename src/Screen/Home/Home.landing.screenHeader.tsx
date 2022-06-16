import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { ScreenHeader__Container } from "src/StyledComponents/View";
import SearchBigIcon from "src/Resource/svg/search-big-icon.svg";
import AlarmIcon from "src/Resource/svg/alarm-icon.svg";

/**
 * 홈 랜딩 페이지의 스크린 헤더
 * @author 현웅
 */
export function HomeLandingScreenHeader() {
  return (
    <Container>
      <Text__Container>
        <PickpleResearchText>픽플리</PickpleResearchText>
      </Text__Container>
      <Icons__Container>
        <SearchBigIcon
          style={{ ...styles.icon__margin }}
          width={28}
          height={28}
        />
        <AlarmIcon width={28} height={28} />
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
