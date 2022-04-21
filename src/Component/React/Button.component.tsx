/**
 * React Native 프로젝트에서는 android, iOS간 디자인 통일성을 위해
 * Button을 직접 사용하지 않습니다. 대신 TouchableOpacity를 사용합니다.
 * @author 현웅
 */

import React from "react";
import styled, { DefaultTheme } from "styled-components/native";

/**
 * 알약 형태의, 모서리가 둥근 버튼입니다.
 * @author 현웅
 */
export function PillButton() {
  return (
    <PillButton__Container type={"PRIMARY"}>
      <PillButton__Content type={"PRIMARY"}>버튼</PillButton__Content>
    </PillButton__Container>
  );
}

export type PillButtonType = "PRIMARY" | "GRAY";

function pillButtonBackgroundColor(type: PillButtonType, theme: DefaultTheme) {
  switch (type) {
    case "PRIMARY":
      return theme.color.text_skyblue;
    default:
  }
}

function pillButtonTextColor(type: PillButtonType, theme: DefaultTheme) {
  switch (type) {
    case "PRIMARY":
      return theme.color.pastel_skyblue;
    default:
  }
}

const PillButton__Container = styled.TouchableOpacity<{ type: PillButtonType }>`
  background-color: ${({ type, theme }) =>
    pillButtonBackgroundColor(type, theme)};
  padding: 12px 15px;
  border-radius: 100px;
`;

const PillButton__Content = styled.Text<{ type: PillButtonType }>`
  color: ${({ type, theme }) => pillButtonTextColor(type, theme)};
`;
