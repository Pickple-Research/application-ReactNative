import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator/App.stack.navigator";
import { LinearGradeintContainer } from "src/Component/View";
import { H2, H3, H4 } from "src/StyledComponents/Text";
import { useUserStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 마이페이지 랜딩 페이지 프로필 섹션
 * @author 현웅
 */
export function MypageLandingProfile() {
  const user = useUserStore(state => state.user);

  const loggedIn = user._id !== "";

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      {loggedIn ? (
        <>
          <ProfileThumbnail />
          <NicknameEmail nickname={user.nickname} email={user.email} />
        </>
      ) : (
        <>
          <BlankProfileThumbnail />
          <LoginTextButton />
        </>
      )}
    </Container>
  );
}

function ProfileThumbnail() {
  const logout = useUserStore(state => state.logout);

  return <Thumbnail__Container activeOpacity={1} onPress={logout} />;
}

function NicknameEmail({
  nickname,
  email,
}: {
  nickname: string;
  email: string;
}) {
  return (
    <UserInfo__Container>
      <NicknameText>{nickname}</NicknameText>
      <EmailText>{email}</EmailText>
    </UserInfo__Container>
  );
}

function BlankProfileThumbnail() {
  return (
    <LinearGradeintContainer
      style={{ width: 70, height: 70, borderRadius: 100 }}
    />
  );
}

function LoginTextButton() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <UserInfo__Container>
      <LoginText>로그인이 필요합니다</LoginText>
      <LoginButton
        activeOpacity={1}
        onPress={() => {
          navigation.navigate("LoginScreen", {});
        }}>
        <LoginButtonText>로그인</LoginButtonText>
      </LoginButton>
    </UserInfo__Container>
  );
}

const Container = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

// ProfileThumbnail()
const Thumbnail__Container = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background-color: gray;
  border-radius: 100px;
`;

// NicknameEmail과 LoginTextButton 의 높이를 같게 맞추기 위한 View
const UserInfo__Container = styled.View`
  align-items: center;
  height: 70px;
  // Thumbnail__Container 와 BlankProfileThumbnail 의 margin-bottom 으로 맞추는 게 규칙상 맞지만,
  // BlankProfileThumbnail 의 스타일을 따로 지정해줘야 하므로 예외적으로 margin-top 지정
  margin-top: 16px;
`;

// NicknameEmail()
const NicknameText = styled(H3)`
  font-weight: bold;
  margin-bottom: 5px;
`;

const EmailText = styled(H4)`
  color: ${({ theme }) => theme.color.grey.mild};
  margin-bottom: 21px;
`;

// LoginTextButton()
const LoginText = styled(H2)`
  font-weight: bold;
  margin-bottom: 12px;
`;

const LoginButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  border: 1.5px solid ${({ theme }) => theme.color.purple.main};
  border-radius: 100px;
`;

const LoginButtonText = styled(H4)`
  font-weight: bold;
  color: ${({ theme }) => theme.color.purple.main};
`;
