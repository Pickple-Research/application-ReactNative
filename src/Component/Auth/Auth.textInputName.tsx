import React from "react";
import styled from "styled-components/native";
import { H4 } from "src/StyledComponents/Text";

/**
 * Auth Screen들에서 사용하는 TextInput에 붙는 이름입니다.
 * @author 현웅
 */
export function AuthTextInputName({ name }: { name: string }) {
  return <Text>{name}</Text>;
}

const Text = styled(H4)`
  font-weight: bold;
  margin-bottom: 6px;
`;
