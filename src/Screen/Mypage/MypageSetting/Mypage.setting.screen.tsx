import React from "react";
import styled from "styled-components/native";
import { MypageSettingProfile } from "./Mypage.setting.profile";
import { MypageSettingAccount } from "./Mypage.setting.account";
import { MypageSettingFunctions } from "./Mypage.setting.functions";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";

export type MypageSettingScreenProps = {};

export function MypageSettingScreen() {
  return (
    <Container>
      <WhiteBackgroundScrollView backgroundColor="PURPLE">
        <MypageSettingProfile />
        <MypageSettingAccount />
        <MypageSettingFunctions />
      </WhiteBackgroundScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.purple.mild};
`;
