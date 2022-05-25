import React from "react";
import { StyleProp, ViewStyle, TextStyle, ViewProps } from "react-native";
import styled from "styled-components/native";
import { H3 } from "src/StyledComponents/Text";

//TODO: 종류 명시
export type PillButtonType = "FOLLOW"; // 파트너 팔로우 버튼

/**
 * 알약 형태의 둥근 버튼입니다.
 * @author 현웅
 */
export function PillButton({
  content,
  type,
  style,
  fontStyle,
  ...props
}: {
  content: string;
  type: PillButtonType;
  style?: StyleProp<ViewStyle>;
  fontStyle?: StyleProp<TextStyle>;
  props?: ViewProps;
}) {
  switch (type) {
    case "FOLLOW":
      return (
        <FollowPillButton__Container style={style} {...props}>
          <FollowPillButton__Content style={fontStyle}>
            {content}
          </FollowPillButton__Content>
        </FollowPillButton__Container>
      );
    default:
      return null;
  }
}

const PillButton__Container = styled.TouchableOpacity`
  padding: 6px 24px;
  border-radius: 100px;
`;
const PillButton__Content = styled(H3)`
  color: white;
`;

const FollowPillButton__Container = styled(PillButton__Container)`
  background-color: ${({ theme }) => theme.color.main_skyblue};
`;
const FollowPillButton__Content = styled(PillButton__Content)``;
