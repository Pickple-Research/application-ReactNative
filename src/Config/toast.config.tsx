import React from "react";
import styled from "styled-components/native";
import { ToastConfig } from "react-native-toast-message";
import { H4 } from "src/StyledComponents/Text";

export const toastConfig: ToastConfig = {
  blackToast: ({ text1 }) => (
    <BlackToast__Container>
      <BlackToast__Text>{text1}</BlackToast__Text>
    </BlackToast__Container>
  ),
};

const BlackToast__Container = styled.View`
  flex-direction: row;
  width: 92%;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: rgba(51, 51, 51, 0.95);
  border-radius: 12px;
`;

const BlackToast__Text = styled(H4)`
  color: ${({ theme }) => theme.color.grey.white};
  font-weight: bold;
`;
