import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Profile.main.screen";
import WalletIcon from "@Resource/svg/wallet-icon.svg";

/**
 * 프로필 랜딩 페이지 크레딧 확인 섹션
 * @author 현웅
 */
export function ProfileMainCredit() {
  return (
    <Container style={{ ...screenStyles.padding, ...screenStyles.border }}>
      <Credit__Container>
        <Credit__IconContainer>
          <WalletIcon />
        </Credit__IconContainer>
        <Credit__Text>500C</Credit__Text>
        <Credit__UseHistoryText>{`사용내역 >`}</Credit__UseHistoryText>
      </Credit__Container>
    </Container>
  );
}

const Container = styled.View`
  padding-bottom: 30px;
  margin-bottom: 30px;
`;

const Credit__Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background_purple};
  padding: 15px;
  border-radius: 100px;
`;

const Credit__IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.color.main_purple};
  border-radius: 100px;
`;

const Credit__Text = styled.Text`
  flex: 1;
  color: black;
  padding: 0px 15px;
`;

const Credit__UseHistoryText = styled.Text``;
