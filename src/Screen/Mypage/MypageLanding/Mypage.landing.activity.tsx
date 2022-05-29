import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { screenStyles } from "./Mypage.landing.screen";
import { H2 } from "src/StyledComponents/Text";
import ScrabIcon from "@Resource/svg/scrab-icon.svg";
import MarkedIcon from "@Resource/svg/marked-icon.svg";
import PenIcon from "@Resource/svg/pen-icon.svg";
import BlankCommentIcon from "@Resource/svg/blank-comment-icon.svg";

/**
 * 마이페이지 랜딩 페이지 유저 활동 정보 섹션
 * (스크랩/투표한 글/올린 글/내 댓글)
 * @author 현웅
 */
export function MypageLandingActivity() {
  return (
    <Container style={{ ...screenStyles.padding }}>
      <ScrabButton />
      <ParticipationButton />
      <MyUploadButton />
      <MyCommentButton />
    </Container>
  );
}

function ScrabButton() {
  return (
    <Icon__Container>
      <ScrabIcon style={styles.icon__margin} />
      <Icon__Text>스크랩</Icon__Text>
    </Icon__Container>
  );
}

function ParticipationButton() {
  return (
    <Icon__Container>
      <MarkedIcon style={styles.icon__margin} />
      <Icon__Text>투표한 글</Icon__Text>
    </Icon__Container>
  );
}

function MyUploadButton() {
  return (
    <Icon__Container>
      <PenIcon style={styles.icon__margin} />
      <Icon__Text>올린 글</Icon__Text>
    </Icon__Container>
  );
}

function MyCommentButton() {
  return (
    <Icon__Container>
      <BlankCommentIcon style={styles.icon__margin} />
      <Icon__Text>내 댓글</Icon__Text>
    </Icon__Container>
  );
}

const styles = StyleSheet.create({
  icon__margin: { marginBottom: 10 },
});

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
`;

const Icon__Container = styled.View`
  align-items: center;
`;

const Icon__Text = styled(H2)`
  color: ${({ theme }) => theme.color.text_color_666};
`;
