import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { ScreenHeader__Container } from "src/StyledComponents/View";
import CaretLeftIcon from "src/Resource/svg/caret-left-icon.svg";

/**
 * 뒤로 가기 버튼만 포함된 스크린 헤더입니다.
 * @author 현웅
 */
export function BackButtonScreenHeader() {
  const navigation = useNavigation<NavigationProp<AppStackProps>>();

  function goBack() {
    if (navigation.canGoBack()) navigation.goBack();
  }

  return (
    <Container>
      <CaretLeftIcon onPress={goBack} />
    </Container>
  );
}

const Container = styled(ScreenHeader__Container)`
  justify-content: flex-start;
`;
