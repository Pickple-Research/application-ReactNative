import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { BodyText } from "src/StyledComponents/Text";

/**
 * 팝업메뉴 옵션 한 줄 컴포넌트입니다.
 * @param Icon 좌측 아이콘 컴포넌트
 * @param content 내용
 * @param onPress 터치 시 실행될 함수
 * @param style 추가 스타일
 * @author 현웅
 */
export function PopupMenuOption({
  Icon,
  content,
  onPress,
  selected,
  style,
}: {
  Icon?: JSX.Element;
  content: string;
  onPress?: () => void;
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <Container
      activeOpacity={onPress ? 0.8 : 1}
      onPress={onPress}
      selected={selected}
      style={style}>
      {Icon && <IconContainer>{Icon}</IconContainer>}
      <ContentText>{content}</ContentText>
    </Container>
  );
}

const Container = styled.TouchableOpacity<{ selected?: boolean }>`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  //TODO: #DESIGN-SYSTEM
  background-color: ${({ selected }) => (selected ? "#e7e7e7" : "none")};
  padding: 8px 16px;
  border-radius: 6px;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 16px;
  margin-right: 12px;
`;

const ContentText = styled(BodyText)`
  color: ${({ theme }) => theme.color.grey.icon};
`;
