import React from "react";
import styled from "styled-components/native";
import { H4 } from "src/StyledComponents/Text";
import { useUserStore, useMypageCreditHistoryScreenStore } from "src/Zustand";

/**
 * 마이페이지 - 크레딧 사용내역 페이지 - 크레딧 총액을 보여주는 헤더 컴포넌트입니다.
 * @author 현웅
 */
export function MypageCreditHistoryHeader() {
  const user = useUserStore(state => state.user);
  const setServiceGettingReadyModalVisible = useMypageCreditHistoryScreenStore(
    state => state.setServiceGettingReadyModalVisible,
  );

  return (
    <Container>
      <CreditText>{`${user.credit} C`}</CreditText>
      <ButtonsRow__Container>
        <CreditUseButton
          onPress={() => {
            setServiceGettingReadyModalVisible(true);
          }}
        />
        <Button__Splitter />
        <CreditChargeButton
          onPress={() => {
            setServiceGettingReadyModalVisible(true);
          }}
        />
      </ButtonsRow__Container>
    </Container>
  );
}

function CreditUseButton({ onPress }: { onPress: () => void }) {
  return (
    <ButtonContainer activeOpacity={1} onPress={onPress}>
      <ButtonText>사용하기</ButtonText>
    </ButtonContainer>
  );
}

function CreditChargeButton({ onPress }: { onPress: () => void }) {
  return (
    <ButtonContainer activeOpacity={1} onPress={onPress}>
      <ButtonText>충전하기</ButtonText>
    </ButtonContainer>
  );
}

const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.color.purple.pastel};
  padding-top: 40px;
  padding-bottom: 28px;
`;

const CreditText = styled.Text`
  font-size: 20px;
  //TODO: #DESIGN-SYSTEM
  color: #625c84;
  font-weight: bold;
  margin-bottom: 36px;
`;

const ButtonsRow__Container = styled.View`
  flex-direction: row;
`;

const Button__Splitter = styled.View`
  width: 21px;
`;

const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.purple.mild};
  padding: 8px 36px;
  border-radius: 5px;
`;

const ButtonText = styled(H4)`
  color: ${({ theme }) => theme.color.purple.deep};
`;
