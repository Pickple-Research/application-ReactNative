import React from "react";
import styled from "styled-components/native";
import { useVoteDetailScreenStore } from "src/Zustand";
import {
  H2,
  H3,
  BodyText,
  DetailText,
  SmallText,
} from "src/StyledComponents/Text";
import { globalStyles } from "src/Style/globalStyles";
import { ScrapIcon } from "src/Component/Svg";

/**
 * 투표 상세 화면 카테고리/투표제목/작성자/내용 항목입니다.
 * @author 현웅
 */
export function CommunityVoteDetailTitle() {
  const voteDetail = useVoteDetailScreenStore(state => state.voteDetail);

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
          <ScrapButtonContainer>
            <ScrapIcon scrapped={true} width="12" height="18" />
            <ScrapNum>100</ScrapNum>
          </ScrapButtonContainer>
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
  min-width: 50px;
  //TODO: #DESIGN-SYSTEM
  background-color: #eeeeee;
  padding: 4px 8px;
  border-radius: 6px;
`;

const ScrapNum = styled(SmallText)`
  color: ${({ theme }) => theme.color.grey.icon};
  font-weight: bold;
  margin-left: 8px;
`;

const VoteContentText = styled(H3)`
  color: ${({ theme }) => theme.color.grey.deep};
  line-height: 18px;
`;
