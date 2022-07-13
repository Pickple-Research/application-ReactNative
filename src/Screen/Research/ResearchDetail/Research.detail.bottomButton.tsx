import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import {
  BottomButton__Container,
  BottomButton__ButtonContainer,
} from "src/StyledComponents/View";
import { H3, DetailText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import {
  useAppStore,
  useUserStore,
  useResearchDetailScreenStore,
} from "src/Zustand";
import { ScrapIcon } from "src/Component/Svg";

/**
 * 리서치 상세정보 페이지 하단 버튼
 * @author 현웅
 */
export function ResearchDetailBottomButton() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "ResearchDetailScreen">>();

  const { setRequireLoginModalVisible, setRequireLoginModleText } = useAppStore(
    state => ({
      setRequireLoginModalVisible: state.setRequireLoginModalVisible,
      setRequireLoginModleText: state.setRequireLoginModleText,
    }),
    shallow,
  );

  const { user, userResearch } = useUserStore(state => ({
    user: state.user,
    userResearch: state.userResearch,
  }));
  const {
    researchDetail,
    setResearchPullupModalVisible,
    setResearchUnscrapModalVisible,
    scrapping,
    scrapResearch,
  } = useResearchDetailScreenStore(
    state => ({
      researchDetail: state.researchDetail,
      setResearchPullupModalVisible: state.setResearchPullupModalVisible,
      setResearchUnscrapModalVisible: state.setResearchUnscrapModalVisible,
      scrapping: state.scrapping,
      scrapResearch: state.scrapResearch,
    }),
    shallow,
  );

  /** (대)댓글 입력을 위해 키보드가 나타났을 때 버튼 표시 여부 */
  const [showBottomButton, setShowBottomButton] = useState(true);

  /** 키보드가 나타나는 이벤트에 이벤트 리스너를 설정합니다. */
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setShowBottomButton(false);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setShowBottomButton(true);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  /** 리서치 참여하기 버튼을 눌렀을 때 행동 지정 */
  function onPressParticipate() {
    if (user._id === "") {
      setRequireLoginModleText("RESEARCH_PARTICIPATE");
      setRequireLoginModalVisible(true);
      return;
    }
    navigation.navigate("ResearchParticipateScreen", {
      link: researchDetail.link,
    });
  }

  const isAuthor = user._id === researchDetail.authorId;

  const participated = userResearch.participatedResearchInfos.some(
    researchInfo => {
      return researchInfo.researchId === researchDetail._id;
    },
  );

  const scrapped = userResearch.scrappedResearchIds.some(researchId => {
    return researchId === researchDetail._id;
  });

  //* (대)댓글 작성을 위해 키보드가 나타나있는 경우
  if (!showBottomButton) return null;

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
  //TODO: 리서치 참여 대상이 아닌 경우

  //* 참여 가능한 대상인 경우
  return (
    <Container>
      {scrapped ? (
        //* 이미 스크랩 한 경우
        <ScrapButton
          activeOpacity={0.8}
          onPress={() => {
            setResearchUnscrapModalVisible(true);
          }}>
          <ScrapIcon scrapped={scrapped} />
          <ScrapText>{researchDetail.scrapsNum}</ScrapText>
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
        <ParticipateButton onPress={onPressParticipate}>
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
