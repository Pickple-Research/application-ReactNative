import React from "react";
import styled from "styled-components/native";
import { ScreenHeader__Container } from "src/StyledComponents/View";
import { ScreenHeader__TitleText } from "src/StyledComponents/Text";
import { H3 } from "src/StyledComponents/Text";
import CaretLeftIcon from "src/Resource/svg/caret-left-icon.svg";
import CloseIcon from "src/Resource/svg/close-icon.svg";

/**
 * 하나의 화면에서 여러 개의 스텝이 나뉘는 화면의 스크린 헤더입니다.
 *
 * ex. 리서치 업로드 페이지
 *
 * @param title 스크린 헤더 타이틀
 * @param onPressBack 뒤로 가기 버튼 클릭 시 실행될 함수
 * @param onPressClose X 아이콘 클릭 시 실행될 함수
 *
 * @author 현웅
 */
export function StepScreenHeader({
  title,
  onPressBack,
  onPressClose,
}: {
  title: string;
  onPressBack?: () => void;
  onPressClose?: () => void;
}) {
  return (
    <Container>
      <BackButton__Container>
        <CaretLeftIcon onPress={onPressBack} />
        <BackButton__Text>이전</BackButton__Text>
      </BackButton__Container>
      <TitleText__Container>
        <ScreenHeader__TitleText>{title}</ScreenHeader__TitleText>
      </TitleText__Container>
      <CloseButton__Container>
        <CloseIcon onPress={onPressClose} />
      </CloseButton__Container>
    </Container>
  );
}

const Container = styled(ScreenHeader__Container)`
  justify-content: space-between;
`;

const BackButton__Container = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

const BackButton__Text = styled(H3)`
  font-weight: bold;
`;

const TitleText__Container = styled.View`
  flex-direction: row;
  flex: 3;
  justify-content: center;
`;

const CloseButton__Container = styled(BackButton__Container)`
  justify-content: flex-end;
`;
