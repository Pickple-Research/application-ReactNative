import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { useVoteDetailScreenStore } from "src/Zustand";
import {
  H2,
  H3,
  BodyText,
  DetailText,
  SmallText,
} from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useUserStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";
import { ScrapSmallIcon } from "src/Component/Svg";

/**
 * 투표 상세 화면 카테고리/투표제목/작성자/스크랩 버튼/투표내용 항목입니다.
 * @author 현웅
 */
export function CommunityVoteDetailTitle() {
  const { userVote } = useUserStore(
    state => ({ userVote: state.userVote }),
    shallow,
  );

  const { voteDetail, scrapping, scrapVote, setVoteUnscrapModalVisible } =
    useVoteDetailScreenStore(
      state => ({
        voteDetail: state.voteDetail,
        scrapping: state.scrapping,
        scrapVote: state.scrapVote,
        setVoteUnscrapModalVisible: state.setVoteUnscrapModalVisible,
      }),
      shallow,
    );

  const scrapped = userVote.scrappedVoteIds.some(voteId => {
    return voteId === voteDetail._id;
  });

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <TitleScrapContainer>
        <TitleContainer>
          <VoteCategory>{`voteDetail.category`}</VoteCategory>
          <VoteTitle>{voteDetail.title}</VoteTitle>
          <VoteAuthor>{`by. ${
            voteDetail.author?.nickname ? voteDetail.author.nickname : `익명`
          }`}</VoteAuthor>
        </TitleContainer>

        <ScrapContainer>
          {scrapping ? (
            <ScrapButtonContainer activeOpacity={1}>
              <ScrapSmallIcon scrapped={scrapped} />
              <ScrapNumContainer>
                <ActivityIndicator size="small" color="#fff" />
              </ScrapNumContainer>
            </ScrapButtonContainer>
          ) : (
            <ScrapButtonContainer
              activeOpacity={0.8}
              onPress={
                scrapped
                  ? () => {
                      setVoteUnscrapModalVisible(true);
                    }
                  : scrapVote
              }>
              <ScrapSmallIcon scrapped={scrapped} />
              <ScrapNumContainer>
                <ScrapNum>{voteDetail.scrapsNum}</ScrapNum>
              </ScrapNumContainer>
            </ScrapButtonContainer>
          )}
        </ScrapContainer>
      </TitleScrapContainer>

      <VoteContentText>{voteDetail.content}</VoteContentText>
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 24px;
`;

const TitleScrapContainer = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

const TitleContainer = styled.View`
  flex: 1;
  margin-right: 30px;
`;

const VoteCategory = styled(BodyText)`
  color: ${({ theme }) => theme.color.grey.mild};
  margin-bottom: 8px;
`;

const VoteTitle = styled(H2)`
  color: ${({ theme }) => theme.color.grey.deep};
  font-weight: bold;
  margin-bottom: 4px;
`;

const VoteAuthor = styled(DetailText)`
  color: ${({ theme }) => theme.color.grey.mild};
`;

const ScrapContainer = styled.View`
  padding-top: 20px;
`;

const ScrapButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 42px;
  //TODO: #DESIGN-SYSTEM
  background-color: #eeeeee;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 4px;
  border-radius: 6px;
`;

const ScrapNumContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 20px;
`;

const ScrapNum = styled(SmallText)`
  color: ${({ theme }) => theme.color.grey.icon};
  font-weight: bold;
`;

const VoteContentText = styled(H3)`
  color: ${({ theme }) => theme.color.grey.deep};
  line-height: 18px;
`;
