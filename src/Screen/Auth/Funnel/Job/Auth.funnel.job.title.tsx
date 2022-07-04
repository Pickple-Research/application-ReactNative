import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

export function AuthFunnelJobTitle() {
  return (
    <Container>
      <MainText>밍망님 환영합니다!</MainText>
      <SubText>
        작성해주신 정보를 바탕으로 00님에게 필요한 컨텐츠를 추천해드릴게요!
        완료하시면 N크레딧을 드립니다.
      </SubText>
    </Container>
  );
}

const Container = styled.View``;
const MainText = styled.Text`
  color: ${({ theme }) => theme.color.purple.text};
  font-size: 25;
  font-weight: 700;
`;
const SubText = styled.Text`
  color: ${({ theme }) => theme.color.grey.mild};
  font-size: 12;
  margin-top: 8;
`;
