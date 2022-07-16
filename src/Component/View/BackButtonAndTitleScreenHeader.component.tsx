import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { ScreenHeader__Container } from "src/StyledComponents/View";
import { ScreenHeader__TitleText } from "src/StyledComponents/Text";
import CaretLeftIcon from "src/Resource/svg/caret-left-icon.svg";

/**
 * 뒤로 가기 버튼과 스크린 제목이 포함된 스크린 헤더입니다.
 * @author 현웅
 */
export function BackButtonAndTitleScreenHeader({ title }: { title: string }) {
  const navigation = useNavigation<NavigationProp<AppStackProps>>();

  function goBack() {
    if (navigation.canGoBack()) navigation.goBack();
  }

  return (
    <Container>
      <BackButton__Container>
        <CaretLeftIcon onPress={goBack} />
      </BackButton__Container>
      <TitleText__Container>
        <ScreenHeader__TitleText>{title}</ScreenHeader__TitleText>
      </TitleText__Container>
      <BackButton__Container />
    </Container>
  );
}

const Container = styled(ScreenHeader__Container)`
  justify-content: center;
`;

const BackButton__Container = styled.View`
  flex: 1;
`;

const TitleText__Container = styled.View`
  flex-direction: row;
  flex: 3;
  justify-content: center;
`;
