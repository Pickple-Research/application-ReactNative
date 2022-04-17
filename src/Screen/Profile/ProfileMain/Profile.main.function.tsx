import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Profile.main.screen";

/**
 * 프로필 랜딩 페이지 고객기능 섹션
 * @author 현웅
 */
export function ProfileMainFunction() {
  return (
    <Container style={{ ...screenStyles.padding, ...screenStyles.border }}>
      <Container />
    </Container>
  );
}

const Container = styled.View`
  padding-top: 10px;
  margin-bottom: 25px;
`;
