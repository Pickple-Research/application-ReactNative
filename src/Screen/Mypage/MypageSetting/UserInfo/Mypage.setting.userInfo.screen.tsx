import React from "react";
import styled from "styled-components/native";
import { MypageFunctionText } from "src/Component/Mypage";
import shallow from "zustand/shallow";
import { useUserStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";
import { H2 } from "src/StyledComponents/Text";

export type MypageSettingUserInfoScreenProps = {};

export function MypageSettingUserInfoScreen() {
  const {} = useUserStore(state => ({}), shallow);

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <MypageFunctionText
        text={`개인 정보 관리`}
        style={{ marginBottom: 20 }}
      />
      <RowContainer activeOpacity={0.8} onPress={() => {}}>
        <RowText>로그아웃</RowText>
      </RowContainer>
      <RowContainer activeOpacity={0.8} onPress={() => {}}>
        <RowText>회원탈퇴</RowText>
      </RowContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.color.grey.white};
`;

const RowContainer = styled.TouchableOpacity`
  padding: 10px 0px;
  margin-bottom: 6px;
`;

const RowText = styled(H2)`
  color: ${({ theme }) => theme.color.grey.main};
  font-weight: bold;
`;
