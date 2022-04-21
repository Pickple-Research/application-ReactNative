import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Profile.main.screen";
import PencilIcon from "@Resource/svg/pencil-icon.svg";

/**
 * 마이페이지 랜딩 페이지 프로필 섹션
 * @author 현웅
 */
export function ProfileMainUserInfo() {
  return (
    <Container style={{ ...screenStyles.padding }}>
      <ProfileThumbnail />
      <NicknameEmail />
      <UserRank />
    </Container>
  );
}

function ProfileThumbnail() {
  return (
    <Thumbnail__Container>
      <Thumbnail__EditIconContainer>
        <PencilIcon />
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
  border: 1px solid ${({ theme }) => theme.color.inactive_button_purple};
  border-radius: 100px;
`;

// NicknameEmail()
const NicknameText = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const EmailText = styled.Text`
  color: ${({ theme }) => theme.color.text_color_999};
  font-size: 12px;
  margin-bottom: 21px;
`;

// UserRank()
const Rank__Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.color.background_purple};
  border-radius: 100px;
`;

const Rank__IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.color.pastel_purple};
  border-radius: 100px;
`;

const Rank__Text = styled.Text`
  font-size: 12px;
  padding: 0px 12px;
`;
