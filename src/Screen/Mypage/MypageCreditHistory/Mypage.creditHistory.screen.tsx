import React from "react";
import styled from "styled-components/native";
import { MypageCreditHistoryHeader } from "./Mypage.creditHistory.header";
import { MypageCreditHistoryList } from "./Mypage.creditHistory.list";
import { MypageCreditHistoryServiceGettingReadyModal } from "src/Modal";

export type MypageCreditHistoryScreenProps = {};

/**
 * 마이페이지 크레딧 사용내역 페이지
 * @author 현웅
 */
export function MypageCreditHistoryScreen() {
  return (
    <Container>
      <MypageCreditHistoryHeader />
      <MypageCreditHistoryList />
      <MypageCreditHistoryServiceGettingReadyModal />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.color.grey.white};
`;
