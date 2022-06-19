import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import {
  BottomButton__Container,
  BottomButton__ButtonContainer,
} from "src/StyledComponents/View";
import { H3, DetailText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useUserStore, useResearchDetailScreenStore } from "src/Zustand";
import { ScrapIcon } from "src/Component/Svg";

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
  const {
    researchDetail,
    setResearchPullupModalVisible,
    scrapping,
    scrapResearch,
    unscrapResearch,
  } = useResearchDetailScreenStore(
    state => ({
      researchDetail: state.researchDetail,
      setResearchPullupModalVisible: state.setResearchPullupModalVisible,
      scrapping: state.scrapping,
      scrapResearch: state.scrapResearch,
      unscrapResearch: state.unscrapResearch,
    }),
    shallow,
  );

  const isAuthor = user._id === researchDetail.authorId;

  const participated = userActivity.participatedResearchInfos.some(
    researchInfo => {
      return researchInfo.researchId === researchDetail._id;
    },
  );

  const scrapped = userActivity.scrappedResearchIds.some(researchId => {
    return researchId === researchDetail._id;
  });

  //* 리서치 작성자 본인인 경우
  if (isAuthor) {
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

  //* 참여 대상이 아닌 경우
  //TODO

  //* 참여 가능한 대상인 경우
  return (
    <Container>
      {scrapped ? (
        //* 이미 스크랩 한 경우
        <ScrapButton
          activeOpacity={0.8}
          onPress={scrapping ? undefined : unscrapResearch}>
          <ScrapIcon scrapped={scrapped} />
          <ScrapText>
            {scrapping ? `취소 중..` : researchDetail.scrapsNum}
          </ScrapText>
        </ScrapButton>
      ) : (
        //* 스크랩하지 않은 경우
        <ScrapButton
          activeOpacity={0.8}
          onPress={scrapping ? undefined : scrapResearch}>
          <ScrapIcon scrapped={scrapped} />
          <ScrapText>
            {scrapping ? `스크랩 중..` : researchDetail.scrapsNum}
          </ScrapText>
        </ScrapButton>
      )}

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
    </Container>
  );
}

const Container = styled(BottomButton__Container)`
  flex-direction: row;
`;

const ScrapButton = styled(BottomButton__ButtonContainer)`
  flex: 1;
  background-color: ${({ theme }) => theme.color.grey.main};
`;

const ScrapText = styled(DetailText)`
  color: ${({ theme }) => theme.color.grey.white};
  margin-top: 2px;
`;

const ParticipateButton = styled(BottomButton__ButtonContainer)`
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
