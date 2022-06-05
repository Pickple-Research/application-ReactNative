import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator/App.stack.navigator";
import { H3, H4, BodyText } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style/globalStyles";
import PencilIcon from "src/Resource/svg/pencil-icon.svg";

/**
 * 마이페이지 랜딩 페이지 프로필 섹션
 * @author 현웅
 */
export function MypageLandingProfile() {
  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <ProfileThumbnail />
      <NicknameEmail />
      <UserRank />
    </Container>
  );
}

function ProfileThumbnail() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <Thumbnail__Container>
      <Thumbnail__EditIconContainer>
        <PencilIcon
          onPress={() => {
            navigation.navigate("SignupScreen", {});
          }}
        />
      </Thumbnail__EditIconContainer>
    </Thumbnail__Container>
  );
}

function NicknameEmail() {
  return (
    <>
      <NicknameText>R2C 컴퍼니</NicknameText>
      <EmailText>surbay.official@gmail.com</EmailText>
    </>
  );
}

function UserRank() {
  return (
    <Rank__Container>
      <Rank__IconContainer></Rank__IconContainer>
      <Rank__Text>등급</Rank__Text>
    </Rank__Container>
  );
}

const Container = styled.View`
  align-items: center;
  margin-bottom: 32px;
`;

// ProfileThumbnail()
const Thumbnail__Container = styled.View`
  position: relative;
  width: 70px;
  height: 70px;
  background-color: gray;
  margin-bottom: 16px;
  border-radius: 100px;
`;

const Thumbnail__EditIconContainer = styled.View`
  position: absolute;
  bottom: 0px;
  right: -6px;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.purple.inactive};
  border-radius: 100px;
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

// UserRank()
const Rank__Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.color.purple.mild};
  border-radius: 100px;
`;

const Rank__IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.color.purple.pastel};
  border-radius: 100px;
`;

const Rank__Text = styled(BodyText)`
  padding: 0px 12px;
`;
