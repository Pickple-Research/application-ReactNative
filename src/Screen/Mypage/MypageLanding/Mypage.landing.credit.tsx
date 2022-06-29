import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { H1, H3, H4 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";
import { mypageLandingScreenStyles } from "./Mypage.landing.screen";
import shallow from "zustand/shallow";
import { useUserStore } from "src/Zustand";
import WalletIcon from "src/Resource/svg/wallet-icon.svg";
import CaretRightIcon from "src/Resource/svg/caret-right-icon.svg";

/**
 * 마이페이지 랜딩 페이지 크레딧 확인 섹션
 * @author 현웅
 */
export function MypageLandingCredit() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  const { user, userCredit } = useUserStore(
    state => ({
      user: state.user,
      userCredit: state.userCredit,
    }),
    shallow,
  );

  const loggedIn = user._id !== "";

  return (
    <Container
      activeOpacity={1}
      onPress={
        loggedIn
          ? () => {
              navigation.navigate("MypageCreditHistoryScreen", {});
            }
          : undefined
      }
      style={{
        ...globalStyles.screen__horizontalPadding,
        ...mypageLandingScreenStyles.boundary,
      }}>
      <Credit__Container>
        <Credit__WalletIconContainer>
          <WalletIcon />
        </Credit__WalletIconContainer>
        {loggedIn ? (
          <Credit__Text>{userCredit.credit}</Credit__Text>
        ) : (
          <Credit__LoginText>로그인이 필요한 서비스입니다</Credit__LoginText>
        )}
        {loggedIn && (
          <Credit__NavigateTextContainer>
            <Credit__NavigateText>{`사용내역 `}</Credit__NavigateText>
            <CaretRightIcon />
          </Credit__NavigateTextContainer>
        )}
      </Credit__Container>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  padding-bottom: 30px;
  margin-bottom: 30px;
`;

const Credit__Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.color.purple.mild};
  padding: 15px;
  border-radius: 100px;
`;

const Credit__WalletIconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.color.purple.main};
  border-radius: 100px;
`;

const Credit__Text = styled(H1)`
  flex: 1;
  font-weight: bold;
  padding: 0px 15px;
  //TODO: #DESIGN-SYSTEM
  color: #625c84;
`;

const Credit__LoginText = styled(H3)`
  font-weight: bold;
  padding: 0px 15px;
  //TODO: #DESIGN-SYSTEM
  color: #625c84;
`;

const Credit__NavigateTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Credit__NavigateText = styled(H4)`
  //TODO: #DESIGN-SYSTEM
  color: #7d7898;
`;
