import React from "react";
import styled from "styled-components/native";
import { ModalContentContainer } from "src/Component/Modal";

/**
 * 리서치 참여 완료 후 정보 반영 요청에 대한 서버 응답을 기다릴 때 나타나는 모달입니다.
 * @author 현웅
 */
export function ResearchParticipateFormSubmittedLoadingModal() {
  return (
    <ModalContentContainer>
      <Content />
    </ModalContentContainer>
  );
}

function Content() {
  return (
    <Content__Container>
      <Content__Text>서버 반영 중입니다. 잠시만 기다려 주세요...</Content__Text>
    </Content__Container>
  );
}

const Content__Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

const Content__Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.grey.black};
`;
