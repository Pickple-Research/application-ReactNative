import React from "react";
import styled from "styled-components/native";
import { useUserStore } from "src/Zustand";
import { H3, H4 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";

export function MypageSettingProfile() {
  const user = useUserStore(state => state.user);

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <Thumbnail__Container />
      <NicknameEmail__Container>
        <Nickname__Text>{user.nickname}</Nickname__Text>
        <Email__Text>{user.email}</Email__Text>
      </NicknameEmail__Container>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.grey.white};
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: 0.5px;
  margin-bottom: 12px;
`;

const Thumbnail__Container = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.grey.mild};
  margin-right: 15px;
  border-radius: 100px;
`;

const NicknameEmail__Container = styled.View`
  justify-content: center;
  align-items: flex-start;
`;

const Nickname__Text = styled(H3)`
  font-weight: bold;
  color: ${({ theme }) => theme.color.grey.deep};
`;
const Email__Text = styled(H4)`
  color: ${({ theme }) => theme.color.grey.mild};
`;
