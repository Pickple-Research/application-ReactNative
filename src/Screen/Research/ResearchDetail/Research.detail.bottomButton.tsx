import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { H3 } from "src/StyledComponents/Text";
import { useModalStore } from "src/Zustand";

/**
 * 리서치 상세정보 페이지 하단 버튼
 * @author 현웅
 */
export function ResearchDetailBottomButton() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "ResearchDetailScreen">>();

  const setResearchPullupModalVisible = useModalStore(
    state => state.setResearchPullupModalVisible,
  );

  return (
    <Container>
      <ScrapButton>
        <ButtonText>스크랩</ButtonText>
      </ScrapButton>
      <ParticipateButton
        onPress={() => {
          navigation.navigate("ResearchParticipateScreen", {});
        }}>
        <ButtonText>참여하기</ButtonText>
      </ParticipateButton>

      {/* <CloseButton>
        <ButtonText>마감하기</ButtonText>
      </CloseButton>
      <PullupButton
        onPress={() => {
          setResearchPullupModalVisible(true);
        }}>
        <ButtonText>끌올하기</ButtonText>
      </PullupButton> */}
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

const ScrapButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({ theme }) => theme.color.grey.main};
`;

const ParticipateButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 5;
  background-color: ${({ theme }) => theme.color.blue.main};
`;

const CloseButton = styled(ScrapButton)`
  flex: 3;
`;

const PullupButton = styled(ParticipateButton)``;

const ButtonText = styled(H3)`
  color: white;
  font-weight: bold;
`;
