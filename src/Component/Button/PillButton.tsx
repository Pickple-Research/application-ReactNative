import React from "react";
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  ViewProps,
  TouchableWithoutFeedbackProps,
} from "react-native";
import styled from "styled-components/native";
import { H4 } from "src/StyledComponents/Text";

type PillButtonType =
  | "FOLLOW" // 파트너 팔로우 버튼
  | "ADD_OPTION"; // 투표 업로드시 옵션 추가 버튼

/**
 * 알약 형태의 둥근 버튼입니다.
 * @param content 버튼 내용
 * @param type 버튼 타입 (어디에 쓰이는지)
 * @param style 버튼 추가 스타일
 * @param fontStyle 버튼 내용 추가 스타일
 * @author 현웅
 */
export function PillButton({
  content,
  type,
  style,
  fontStyle,
  props,
}: {
  content: string;
  type: PillButtonType;
  style?: StyleProp<ViewStyle>;
  fontStyle?: StyleProp<TextStyle>;
  props?: TouchableWithoutFeedbackProps;
}) {
  switch (type) {
    case "FOLLOW":
      return (
        <FollowPillButton__Container<React.ElementType>
          style={style}
          {...props}>
          <FollowPillButton__Content style={fontStyle}>
            {content}
          </FollowPillButton__Content>
        </FollowPillButton__Container>
      );

    case "ADD_OPTION":
      return (
        <AddOptionPillButton__Container<React.ElementType>
          style={style}
          {...props}>
          <AddOptionPillButton__Content style={fontStyle}>
            {content}
          </AddOptionPillButton__Content>
        </AddOptionPillButton__Container>
      );
    default:
      return null;
  }
}

const PillButton__Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 6px 24px;
  border-radius: 100px;
`;
const PillButton__Content = styled(H4)`
  color: white;
`;

// FOLLOW
const FollowPillButton__Container = styled(PillButton__Container)`
  background-color: ${({ theme }) => theme.color.blue.main};
`;
const FollowPillButton__Content = styled(PillButton__Content)``;

// ADD_OPTION
const AddOptionPillButton__Container = styled(PillButton__Container)`
  background-color: ${({ theme }) => theme.color.purple.mild};
  padding: 16px;
`;
const AddOptionPillButton__Content = styled(PillButton__Content)`
  color: ${({ theme }) => theme.color.purple.text};
  font-size: ${({ theme }) => theme.size.header3};
  font-weight: bold;
`;
