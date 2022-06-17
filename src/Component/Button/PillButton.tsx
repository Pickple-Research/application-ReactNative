import React from "react";
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableWithoutFeedbackProps,
} from "react-native";
import styled from "styled-components/native";
import { H4 } from "src/StyledComponents/Text";

type PillButtonType =
  | "FOLLOW" // 파트너 팔로우 버튼
  | "ADD_VOTE_OPTION"; // 투표 업로드시 선택지(항목) 추가 버튼

/**
 * 알약 형태의 둥근 버튼입니다.
 * @param text 버튼 내용
 * @param type 버튼 타입 (어디에 쓰이는지)
 * @param style 버튼 추가 스타일
 * @param fontStyle 버튼 내용 추가 스타일
 * @author 현웅
 */
export function PillButton({
  text: text,
  type,
  style,
  textStyle,
  props,
}: {
  text: string;
  type: PillButtonType;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  props?: TouchableWithoutFeedbackProps;
}) {
  const ButtonContainer = ContainerComponent(type);
  const ButtonText = TextComponent(type);

  return (
    <ButtonContainer<React.ElementType> style={style} {...props}>
      <ButtonText style={textStyle}>{text}</ButtonText>
    </ButtonContainer>
  );
}

function ContainerComponent(type: PillButtonType) {
  switch (type) {
    case "FOLLOW":
      return FollowPillButton__Container;
    case "ADD_VOTE_OPTION":
      return AddOptionPillButton__Container;

    default:
      return FollowPillButton__Container;
  }
}

function TextComponent(type: PillButtonType) {
  switch (type) {
    case "FOLLOW":
      return FollowPillButton__Text;
    case "ADD_VOTE_OPTION":
      return AddOptionPillButton__Text;

    default:
      return FollowPillButton__Text;
  }
}

const PillButton__Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 6px 24px;
  border-radius: 100px;
`;
const PillButton__Text = styled(H4)`
  color: white;
`;

// FOLLOW
const FollowPillButton__Container = styled(PillButton__Container)`
  background-color: ${({ theme }) => theme.color.blue.main};
`;
const FollowPillButton__Text = styled(PillButton__Text)``;

// ADD_OPTION
const AddOptionPillButton__Container = styled(PillButton__Container)`
  background-color: ${({ theme }) => theme.color.purple.mild};
  padding: 16px;
`;
const AddOptionPillButton__Text = styled(PillButton__Text)`
  color: ${({ theme }) => theme.color.purple.text};
  font-size: ${({ theme }) => theme.size.header3};
  font-weight: bold;
`;
