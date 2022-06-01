import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { ScreenHeader__Container } from "src/StyledComponents/View";
import { ScreenHeader__TitleText } from "src/StyledComponents/Text";
import CloseIcon from "@Resource/svg/close-icon.svg";

/**
 * 스크린 제목과 닫기 버튼이 포함된 스크린 헤더입니다.
 * @author 현웅
 */
export function TitleAndCloseIconScreenHeader({ title }: { title: string }) {
  const navigation = useNavigation<NavigationProp<AppStackProps>>();

  function goBack() {
    if (navigation.canGoBack()) navigation.goBack();
  }

  return (
    <Container>
      <CloseButton__Container />
      <TitleText__Container>
        <ScreenHeader__TitleText>{title}</ScreenHeader__TitleText>
      </TitleText__Container>
      <CloseButton__Container>
        <CloseIcon onPress={goBack} />
      </CloseButton__Container>
    </Container>
  );
}

const Container = styled(ScreenHeader__Container)`
  justify-content: center;
`;

const CloseButton__Container = styled.View`
  flex: 1;
  align-items: flex-end;
`;

const TitleText__Container = styled.View`
  flex-direction: row;
  flex: 5;
  justify-content: center;
`;
