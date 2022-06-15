import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { H3 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useUserStore, useResearchDetailScreenStore } from "src/Zustand";

/**
 * 리서치 상세정보 페이지 하단 버튼
 * @author 현웅
 */
export function ResearchDetailBottomButton() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "ResearchDetailScreen">>();

  const { user, userActivity } = useUserStore(state => ({
    user: state.user,
    userActivity: state.userActivity,
  }));
  const { researchDetail, setResearchPullupModalVisible } =
    useResearchDetailScreenStore(
      state => ({
        researchDetail: state.researchDetail,
        setResearchPullupModalVisible: state.setResearchPullupModalVisible,
      }),
      shallow,
    );

  const participated = userActivity.participatedResearchInfos.some(
    researchInfo => {
      return researchInfo.researchId === researchDetail._id;
    },
  );

  return (
    <Container>
      {user._id === researchDetail.authorId ? (
        //* 리서치 작성자 본인인 경우
        <>
          <CloseButton>
            <ButtonText>마감하기</ButtonText>
          </CloseButton>
          <PullupButton
            onPress={() => {
              setResearchPullupModalVisible(true);
            }}>
            <ButtonText>끌올하기</ButtonText>
          </PullupButton>
        </>
      ) : (
        //* 작성자가 아닌 경우
        <>
          <ScrapButton>
            <ButtonText>스크랩</ButtonText>
          </ScrapButton>
          {participated ? (
            //* 참여한 경우
            <UnavailableButton activeOpacity={1}>
              <ButtonText>참여 완료!</ButtonText>
            </UnavailableButton>
          ) : (
            //* 참여하지 않은 경우
            <ParticipateButton
              onPress={() => {
                navigation.navigate("ResearchParticipateScreen", {
                  link: researchDetail.link,
                });
              }}>
              <ButtonText>참여하기</ButtonText>
            </ParticipateButton>
          )}
        </>
      )}
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

const UnavailableButton = styled(ParticipateButton)`
  background-color: ${({ theme }) => theme.color.grey.mild};
`;

const CloseButton = styled(ScrapButton)`
  flex: 3;
`;

const PullupButton = styled(ParticipateButton)``;

const ButtonText = styled(H3)`
  color: white;
  font-weight: bold;
`;
