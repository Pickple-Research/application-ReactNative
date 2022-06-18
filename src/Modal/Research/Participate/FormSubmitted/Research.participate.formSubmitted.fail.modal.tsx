import React from "react";
import styled from "styled-components/native";
import { ModalContentContainer } from "src/Component/Modal";
import { RadiusButton } from "src/Component/Button";
import { H2, H4 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";

/**
 * 리서치 참여를 완료했으나 서버 통신에 실패했을 때 나타나는 모달입니다.
 * @author 현웅
 */
export function ResearchParticipateFormSubmittedFailModal() {
  return (
    <ModalContentContainer>
      <TitleContent />
      <Button onPress={() => {}} />
    </ModalContentContainer>
  );
}

function TitleContent() {
  return (
    <TitleContent__Container>
      <Title__Text>전송 실패</Title__Text>
      <Content__Text>
        참여 결과가 서버에 정상적으로 반영되지 못했습니다.
      </Content__Text>
    </TitleContent__Container>
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
  line-height: 17px;
`;

// Button()
const Button__Container = styled.View``;
