import React from "react";
import styled from "styled-components/native";
import { useUserStore } from "src/Zustand";
import { H3 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";

export function AuthFunnelJobTitle() {
  const user = useUserStore(state => state.user);

  return (
    <Container style={globalStyles.funnelScreen__horizontalPadding}>
      <MainText>{`${user.nickname}님 환영합니다! 🎉`}</MainText>
      <SubTextContainer>
        <SubText>{`작성해주신 정보를 바탕으로 `}</SubText>
        <SubText>{`00님에게 `}</SubText>
        <SubText>{`필요한 `}</SubText>
        <SubText>{`컨텐츠를 `}</SubText>
        <SubText>{`추천해 `}</SubText>
        <SubText>{`드릴게요! `}</SubText>
        <SubText>{`완료하시면 `}</SubText>
        <SubText>{`30크레딧을 `}</SubText>
        <SubText>{`드립니다.`}</SubText>
      </SubTextContainer>
    </Container>
  );
}

const Container = styled.View``;

const MainText = styled.Text`
  color: ${({ theme }) => theme.color.purple.text};
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubTextContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const SubText = styled(H3)`
  color: ${({ theme }) => theme.color.grey.mild};
`;
