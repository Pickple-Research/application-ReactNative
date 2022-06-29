import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { DetailText } from "src/StyledComponents/Text";
import { CheckIcon } from "src/Component/Svg";
import CommentIcon from "src/Resource/svg/comment-icon.svg";

/**
 * 투표 참여 인원, 댓글 수 정보를 보여주는 컴포넌트입니다.
 * @author 현웅
 */
export function VoteParticipationInfo({
  participated,
  participantsNum,
  commentsNum,
}: {
  participated: boolean;
  participantsNum: number;
  commentsNum: number;
}) {
  return (
    <Container>
      <CheckIcon__Container participated={participated}>
        <CheckIcon color={participated ? undefined : "white"} />
      </CheckIcon__Container>
      <InfoText>{participantsNum}</InfoText>
      <Icon__Splitter />
      <CommentIcon style={styles.iconMargin} />
      <InfoText>{commentsNum}</InfoText>
    </Container>
  );
}

const styles = StyleSheet.create({
  iconMargin: {
    marginRight: 4,
  },
});

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Icon__Splitter = styled.View`
  width: 10px;
`;

const CheckIcon__Container = styled.View<{ participated: boolean }>`
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  //TODO: #DESIGN-SYSTEM
  background-color: ${({ participated }) =>
    participated ? "#dddddd" : "#D1CAFA"};
  margin-right: 8px;
  border-radius: 100px;
`;

const InfoText = styled(DetailText)``;
