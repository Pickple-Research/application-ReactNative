import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { H2 } from "../../../StyledComponents/Text";

/**
 * 리서치 상세정보 페이지 하단바
 * @author 현웅
 */
export function ResearchDetailBottomTab() {
  return (
    <Container>
      <CloseButton>
        <ButtonText>마감하기</ButtonText>
      </CloseButton>
      <PullupButton>
        <ButtonText>끌올하기</ButtonText>
      </PullupButton>
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  bottom: 0px;
  flex-direction: row;
  width: ${`${Dimensions.get("screen").width}px`};
  height: 60px;
`;

const CloseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 3;
  background-color: #555555;
`;

const PullupButton = styled(CloseButton)`
  flex: 5;
  background-color: ${({ theme }) => theme.color.main_skyblue};
`;

const ButtonText = styled(H2)`
  color: white;
  font-weight: bold;
`;