import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import {
  BlackBackgroundModal,
  ModalContentContainer,
} from "src/Component/Modal";
import { RadiusButton } from "src/Component/Button";
import { H2, H4 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useAuthFunnelScreenStore } from "src/Zustand";

/**
 * 회원가입 후, 혹은 마이페이지에서 프로필 입력을 완료한 경우 나타나는 모달입니다.
 * @author 현웅
 */
export function AuthFunnelCompleteModal() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "AuthFunnelScreen">>();

  const { showFunnelCompleteModal, setShowFunnelCompleteModal } =
    useAuthFunnelScreenStore(
      state => ({
        showFunnelCompleteModal: state.showFunnelCompleteModal,
        setShowFunnelCompleteModal: state.setShowFunnelCompleteModal,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={showFunnelCompleteModal}
      setModalVisible={setShowFunnelCompleteModal}
      allowIgnore={false}>
      <ModalContentContainer>
        <TitleContent />
        <Credit />
        <Button
          onPress={() => {
            navigation.goBack();
          }}
        />
      </ModalContentContainer>
    </BlackBackgroundModal>
  );
}

function TitleContent() {
  return (
    <TitleContent__Container>
      <Title__Text>프로필 작성 완료!</Title__Text>
      <Content__Text>내 프로필이 풍성해졌어요!</Content__Text>
    </TitleContent__Container>
  );
}

function Credit() {
  return (
    <Credit__Container>
      <FilledProfileImage
        source={require("src/Resource/png/filled-profile-image.png")}
      />

      <Thankful__Container>
        <Thankful__Text>감사한 마음을 담아</Thankful__Text>
      </Thankful__Container>

      <CreditGive__Container>
        <Credit__Text>30 크레딧</Credit__Text>
        <CreditGive__Text>을 드려요!</CreditGive__Text>
      </CreditGive__Container>

      <CreditDescription__Text>
        {"지금 바로 내 리서치를 올리고\n쉽게 참여자를 모을 수 있어요!"}
      </CreditDescription__Text>
    </Credit__Container>
  );
}

function Button({ onPress }: { onPress: () => void }) {
  return (
    <Button__Container>
      <RadiusButton text="확인" type="BLUE" onPress={onPress} />
    </Button__Container>
  );
}

// TitleContent()
const TitleContent__Container = styled.View`
  padding-left: 6px;
  padding-right: 6px;
  margin-top: 10px;
  margin-bottom: 28px;
`;

const Title__Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.grey.black};
  margin-bottom: 10px;
`;

const Content__Text = styled(H2)`
  color: ${({ theme }) => theme.color.grey.mild};
`;

// Credit()
const Credit__Container = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;

const FilledProfileImage = styled.Image`
  margin-bottom: 16px;
`;

//? '감사한 마음을 담아' 부분
const Thankful__Container = styled.View`
  margin-bottom: 3px;
`;

const Thankful__Text = styled(H2)``;

//? '30 크레딧을 드려요' 부분
const CreditGive__Container = styled.View`
  flex-direction: row;
  margin-bottom: 14px;
`;

const CreditGive__Text = styled(H2)`
  font-weight: bold;
`;

const Credit__Text = styled(CreditGive__Text)`
  color: ${({ theme }) => theme.color.blue.text};
`;

//? '지금 바로 내 리서치를 ~ 모을 수 있어요!' 부분
const CreditDescription__Text = styled(H4)`
  color: ${({ theme }) => theme.color.grey.mild};
  line-height: 16.5px;
`;

// Buttons()
const Button__Container = styled.View`
  margin-bottom: 6px;
`;
