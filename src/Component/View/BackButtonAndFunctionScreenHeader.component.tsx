import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { ScreenHeader__Container } from "src/StyledComponents/View";
import CaretLeftIcon from "@Resource/svg/caret-left-icon.svg";

/**
 * 뒤로 가기 버튼과 우측 기능이 포함된 스크린 헤더입니다.
 * @author 현웅
 */
export function BackButtonAndFunctionScreenHeader({
  rightComponents,
  onPressBackIcon,
}: {
  rightComponents: any;
  onPressBackIcon?: () => void;
}) {
  const navigation = useNavigation<NavigationProp<AppStackProps>>();

  function goBack() {
    if (navigation.canGoBack()) navigation.goBack();
  }

  return (
    <Container>
      <BackButton__Container>
        <CaretLeftIcon onPress={onPressBackIcon ? onPressBackIcon : goBack} />
      </BackButton__Container>
      <HeaderFunction__Container>{rightComponents}</HeaderFunction__Container>
    </Container>
  );
}

const Container = styled(ScreenHeader__Container)`
  justify-content: space-between;
`;

const BackButton__Container = styled.View``;

const HeaderFunction__Container = styled.View``;
