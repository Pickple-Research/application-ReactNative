import React from "react";
import { StyleProp, TextStyle, ViewProps, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { H2 } from "src/StyledComponents/Text";

export type RadiusButtonType =
  | "SHOW_MORE" // 파트너 상세보기 페이지 '서비스/게시글 더보기' 버튼
  | "ADD_GIFT"; // 리서치 업로드 페이지 '경품 추가' 버튼

/**
 * 모서리가 둥근 버튼입니다.
 * @author 현웅
 */
export function RadiusButton({
  content,
  type,
  style,
  fontStyle,
  activeOpacity,
  onPress,
  props,
}: {
  content: string;
  type: RadiusButtonType;
  style?: StyleProp<ViewStyle>;
  fontStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
  onPress?: () => any;
  props?: ViewProps;
}) {
  switch (type) {
    case "SHOW_MORE":
      return (
        <ShowMoreButton__Container<React.ElementType>
          style={style}
          activeOpacity={activeOpacity}
          onPress={onPress}
          {...props}>
          <ShowMoreButton__Content style={fontStyle}>
            {content}
          </ShowMoreButton__Content>
        </ShowMoreButton__Container>
      );
    case "ADD_GIFT":
      return (
        <AddGiftButton__Container<React.ElementType>
          style={style}
          activeOpacity={activeOpacity}
          onPress={onPress}
          {...props}>
          <AddGiftButton__Content style={fontStyle}>
            {content}
          </AddGiftButton__Content>
        </AddGiftButton__Container>
      );

    default:
      return null;
  }
}

const Button__Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 12px;
`;
const Button__Content = styled(H2)`
  font-weight: bold;
`;

const ShowMoreButton__Container = styled(Button__Container)`
  background-color: ${({ theme }) => theme.color.textfield_skyblue};
`;
const ShowMoreButton__Content = styled(Button__Content)`
  color: ${({ theme }) => theme.color.main_skyblue};
`;

const AddGiftButton__Container = styled(Button__Container)`
  background-color: #444444;
`;
const AddGiftButton__Content = styled(Button__Content)`
  color: white;
`;
