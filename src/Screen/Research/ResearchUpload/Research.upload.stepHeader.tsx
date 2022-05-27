import React from "react";
import styled from "styled-components/native";

export function ResearchUploadStepHeader() {
  return (
    <Container>
      <TitleMainText__TitleContainer>참여자 경품</TitleMainText__TitleContainer>
      <TitleSubText__TitleContainer>(선택)</TitleSubText__TitleContainer>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 25px 20px;
`;
const TitleMainText__TitleContainer = styled.Text`
  color: #333333;
  font-size: 18px;
  font-weight: 500;
`;
const TitleSubText__TitleContainer = styled.Text`
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  margin-left: 5px;
`;
