import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Bar } from "react-native-progress";
import { theme } from "src/Theme/theme";
import { useAuthFunnelScreenStore } from "@Zustand/Auth/auth.funnel.zustand";

export function AuthFunnelProgressBar() {
  const step = useAuthFunnelScreenStore(state => state.step);

  return (
    <Container>
      <Bar
        progress={(step + 1) / 6}
        borderRadius={100}
        color={theme.color.purple.main}
        width={Dimensions.get("window").width}
        borderWidth={0}
      />
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  top: 0;
  //* AuthFunnelScreen padding-top과 같은 값으로 유지해야 합니다.
`;
