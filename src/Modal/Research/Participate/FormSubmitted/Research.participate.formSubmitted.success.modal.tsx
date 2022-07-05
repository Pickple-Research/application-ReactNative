import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { ModalContentContainer } from "src/Component/Modal";
import { RadiusButton } from "src/Component/Button";
import { H2 } from "src/StyledComponents/Text";
import { useUserStore, useResearchDetailScreenStore } from "src/Zustand";

/**
 * 리서치 참여 완료 후 성공 모달입니다.
 * @author 현웅
 */
export function ResearchParticipateFormSubmittedSuccessModal() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "ResearchParticipateScreen">>();

  const user = useUserStore(state => state.user);
  const researchDetail = useResearchDetailScreenStore(
    state => state.researchDetail,
  );

  return (
    <ModalContentContainer>
      <TitleContent />
      <Credit credit={researchDetail.credit} />
      <Messages userNickname={user.nickname} />
      <Button
        onPress={() => {
          navigation.goBack();
        }}
      />
    </ModalContentContainer>
  );
}

function TitleContent() {
  return (
    <TitleContent__Container>
      <Title__Text>참여 완료!</Title__Text>
      <Content__Text>소중한 답변 감사합니다.</Content__Text>
    </TitleContent__Container>
  );
}

function Credit({ credit }: { credit: number }) {
  return (
    <Credit__Container>
      <CoinsImage source={require("src/Resource/png/coins-image.png")} />

      <Thankful__Container>
        <Thankful__Text>감사한 마음을 담아</Thankful__Text>
      </Thankful__Container>

      <CreditGive__Container>
        <Credit__Text>{`${credit} 크레딧`}</Credit__Text>
        <CreditGive__Text>을 드려요!</CreditGive__Text>
      </CreditGive__Container>
    </Credit__Container>
  );
}

function Messages({ userNickname }: { userNickname: string }) {
  return (
    <Messages__Container>
      <Message__Row>
        <Message__IconContainer>
          <Message__Icon>🏆</Message__Icon>
        </Message__IconContainer>
        <Message__Text>이 연구에 기여했어요</Message__Text>
      </Message__Row>

      <Message__Row>
        <Message__IconContainer>
          <Message__Icon>😄</Message__Icon>
        </Message__IconContainer>
        <Message__Text>연구자가 무척 감사해 할 거예요</Message__Text>
      </Message__Row>

      <Message__Row>
        <Message__IconContainer>
          <Message__Icon>📚</Message__Icon>
        </Message__IconContainer>
        <Message__Text>{`${userNickname}의\n마이데이터가 쌓였어요!`}</Message__Text>
      </Message__Row>
    </Messages__Container>
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
  margin-bottom: 36px;
`;

const Title__Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.grey.black};
  margin-bottom: 10px;
`;

const Content__Text = styled(H2)`
  color: ${({ theme }) => theme.color.grey.mild};
  line-height: 17px;
`;

// Credit()
const Credit__Container = styled.View`
  align-items: center;
  margin-bottom: 28px;
`;

const CoinsImage = styled.Image`
  margin-bottom: 16px;
`;

//? '감사한 마음을 담아' 부분
const Thankful__Container = styled.View`
  margin-bottom: 3px;
`;

const Thankful__Text = styled(H2)``;

//? 'N 크레딧을 드려요' 부분
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

// Messages()
const Messages__Container = styled.View`
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 30px;
`;

const Message__Row = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 4px;
`;

const Message__IconContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

const Message__Icon = styled(H2)``;

const Message__Text = styled(H2)`
  color: ${({ theme }) => theme.color.grey.deep};
`;

// Button()
const Button__Container = styled.View``;
