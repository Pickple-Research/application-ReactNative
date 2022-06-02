import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Bar } from "react-native-progress";
import { useResearchUploadStore } from "src/Zustand";
import { theme } from "src/Theme/theme";

export function ResearchUploadProgressBar() {
  const step = useResearchUploadStore(state => state.step);

  return (
    <Container>
      <Bar
        progress={(step + 1) / 4}
        borderRadius={100}
        color={theme.color.blue.main}
        width={Dimensions.get("window").width}
        borderWidth={0}
      />
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  top: 0;
  //* ResearchUploadScreen padding-top과 같은 값으로 유지해야 합니다.
`;
