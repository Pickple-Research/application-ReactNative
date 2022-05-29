import React from "react";
import styled from "styled-components/native";
import { Bar } from "react-native-progress";
import { useResearchUploadStore } from "src/Zustand";

export function ResearchUploadProgressBar() {
  const step = useResearchUploadStore(state => state.step);

  return (
    <Container>
      <Bar
        progress={(step + 1) / 4}
        borderRadius={100}
        color={"blue"}
        width={100}
        borderWidth={0}
      />
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  //* ResearchUploadScreen padding-top과 같은 값으로 유지해야 합니다.
  height: 10px;
`;
