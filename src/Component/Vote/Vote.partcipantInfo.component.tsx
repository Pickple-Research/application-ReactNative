import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { DetailText } from "src/StyledComponents/Text";
import CheckIcon from "@Resource/svg/check-icon.svg";
import CommentIcon from "@Resource/svg/comment-icon.svg";

/**
 * 투표 참여 인원, 댓글 수 정보를 보여주는 컴포넌트입니다.
 * @author 현웅
 */
export function VoteParticipantInfo() {
  return (
    <Container>
      <CheckIcon__Container>
        <CheckIcon />
      </CheckIcon__Container>
      <InfoText style={styles.margin}>100</InfoText>
      <CommentIcon style={styles.margin} />
      <InfoText>100</InfoText>
    </Container>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginRight: 8,
  },
});

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckIcon__Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  //TODO: #DESIGN-SYSTEM
  background-color: #dddddd;
  margin-right: 8px;
  border-radius: 100px;
`;

const InfoText = styled(DetailText)``;
