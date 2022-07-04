import React from "react";
import styled from "styled-components/native";
import {
  AuthTextInputName,
  AuthTextInput,
  AuthCautionText,
} from "src/Component/Auth";
import { MypageFunctionText } from "src/Component/Mypage";
import { RadiusButton } from "src/Component/Button";
import { globalStyles } from "src/Style/globalStyles";

export type MypageSettingNicknameScreenProps = {};

export function MypageSettingNicknameScreen() {
  return (
    <Container>
      <TitleContainer style={globalStyles.screen__horizontalPadding}>
        <MypageFunctionText text={`닉네임 설정`} style={{ marginBottom: 20 }} />
      </TitleContainer>
      <InputContainer style={globalStyles.authScreen__horizontalPadding}>
        <AuthTextInputName name="닉네임" />
        <AuthTextInput />
        <AuthCautionText text="* 이미 사용 중인 닉네임입니다." />
        {/* <AuthCautionText text="* 사용 가능한 닉네임입니다." color="BLUE" /> */}
        <RadiusButton text="수정하기" type="PURPLE" style={{ marginTop: 28 }} />
      </InputContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.color.grey.white};
`;

const TitleContainer = styled.View``;

const InputContainer = styled.View`
  background-color: ${({ theme }) => theme.color.grey.white};
`;
