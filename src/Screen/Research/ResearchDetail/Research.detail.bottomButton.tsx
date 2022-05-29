import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { H2 } from "src/StyledComponents/Text";
import { useModalStore } from "src/Zustand";

/**
 * 리서치 상세정보 페이지 하단 버튼
 * @author 현웅
 */
export function ResearchDetailBottomButton() {
  const setResearchPullupModalVisible = useModalStore(
    state => state.setResearchPullupModalVisible,
  );

  return (
    <Container>
      <CloseButton>
        <ButtonText>마감하기</ButtonText>
      </CloseButton>
      <PullupButton
        onPress={() => {
          setResearchPullupModalVisible(true);
        }}>
        <ButtonText>끌올하기</ButtonText>
      </PullupButton>
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  bottom: 0px;
  flex-direction: row;
  width: ${`${Dimensions.get("screen").width}px`};
  //* ResearchDetailScreen의 padding-bottom과 같은 값으로 유지해야 합니다.
  height: 60px;
`;

const CloseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 3;
  background-color: #555555;
`;

const PullupButton = styled(CloseButton)`
  flex: 5;
  background-color: ${({ theme }) => theme.color.main_skyblue};
`;

const ButtonText = styled(H2)`
  color: white;
  font-weight: bold;
`;
