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
import { useUserStore, useFillProfileScreenStore } from "src/Zustand";

/**
 * (회원가입 이후 설문에서 상단바 SKIP을 누른 경우 나타나는) 프로필 작성 요청 모달입니다.
 * @author 현웅
 */
export function AuthFillProfileModal() {
  // const navigation = useNavigation<NavigationProp<AppStackProps, "AuthFillProfileScreen">>()

  const user = useUserStore(state => state.user);
  const { fillProfileModalVisible, setFillProfileModalVisible } =
    useFillProfileScreenStore(
      state => ({
        fillProfileModalVisible: state.fillProfileModalVisible,
        setFillProfileModalVisible: state.setFillProfileModalVisible,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={fillProfileModalVisible}
      setModalVisible={setFillProfileModalVisible}>
      <ModalContentContainer>
        <TitleContent userNickname={`userNickname`} />
        <Credit />
        <Buttons
          onLeftButtonPress={() => {}}
          onRightButtonPress={() => {
            setFillProfileModalVisible(false);
          }}
        />
      </ModalContentContainer>
    </BlackBackgroundModal>
  );
}

function TitleContent({ userNickname }: { userNickname: string }) {
  return (
    <TitleContent__Container>
      <Title__Text>프로필 작성하기</Title__Text>
      <Content__Container>
        <Content__Text>{`프로필을 작성하시면 `}</Content__Text>
        <Content__Text>{`${userNickname}님께 `}</Content__Text>
        <Content__Text>{`더 알맞는 `}</Content__Text>
        <Content__Text>{`리서치와 투표를 `}</Content__Text>
        <Content__Text>{`추천해드릴 `}</Content__Text>
        <Content__Text>{`수 있어요. `}</Content__Text>
      </Content__Container>
    </TitleContent__Container>
  );
}

function Credit() {
  return (
    <Credit__Container>
      <CoinsImage source={require("src/Resource/png/coins-image.png")} />

      <Induce__Container>
        <Induce__Text>3분만 시간내어 프로필을 써주시면</Induce__Text>
      </Induce__Container>

      <CreditGive__Container>
        <Credit__Text>30 크레딧</Credit__Text>
        <CreditGive__Text>을 드려요!</CreditGive__Text>
      </CreditGive__Container>

      <CreditDescription__Text>
        {"이 크레딧으로 내 리서치를 올리고\n쉽게 참여자를 모을 수 있어요!"}
      </CreditDescription__Text>
    </Credit__Container>
  );
}

function Buttons({
  onLeftButtonPress,
  onRightButtonPress,
}: {
  onLeftButtonPress: () => void;
  onRightButtonPress: () => void;
}) {
  return (
    <Buttons__Container>
      <LeftButton__Container>
        <RadiusButton
          text="SKIP"
          type="BLUE_CANCEL"
          onPress={onLeftButtonPress}
        />
      </LeftButton__Container>
      <ButtonSplitter />
      <RightButton__Container>
        <RadiusButton
          text="설문 계속하기"
          type="BLUE_CONFIRM"
          onPress={onRightButtonPress}
        />
      </RightButton__Container>
    </Buttons__Container>
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

const Content__Container = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`;

const Content__Text = styled(H2)`
  color: ${({ theme }) => theme.color.grey.mild};
  line-height: 17px;
`;

// Credit()
const Credit__Container = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;

const CoinsImage = styled.Image`
  margin-bottom: 16px;
`;

//? '3분만 시간내어~' 부분
const Induce__Container = styled.View`
  margin-bottom: 3px;
`;

const Induce__Text = styled(H2)``;

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

//? '이 크레딧으로 ~ 모을 수 있어요!' 부분
const CreditDescription__Text = styled(H4)`
  color: ${({ theme }) => theme.color.grey.mild};
  line-height: 16.5px;
  text-align: center;
`;

// Buttons()
const Buttons__Container = styled.View`
  flex-direction: row;
`;

const LeftButton__Container = styled.View`
  flex: 3;
`;

const RightButton__Container = styled.View`
  flex: 8;
`;

const ButtonSplitter = styled.View`
  width: 12px;
`;
