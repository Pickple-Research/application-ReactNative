import React from "react";
import styled from "styled-components/native";
import { VoteProps } from "@Object/Type";

/**
 * 투표 리스트의 투표 한 줄 디자인입니다.
 * @author 현웅
 */
export function VoteListItem({ vote }: { vote: VoteProps }) {
  return (
    <Container>
      <TitleTagContainer>
        <TitleText numberOfLines={1}>{vote.title}</TitleText>
        <TagText>{vote.tag}</TagText>
      </TitleTagContainer>
      <NicknameText>익명</NicknameText>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 10px;
`;

const TitleTagContainer = styled.View`
  flex: 1;
  margin-right: 16px;
`;

const TitleText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const TagText = styled.Text`
  color: ${({ theme }) => theme.color.text_color_999};
  font-size: 10px;
`;

const NicknameText = styled.Text`
  font-size: 12px;
`;
