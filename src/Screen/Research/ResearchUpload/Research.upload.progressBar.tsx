import React from "react";
import { Bar } from "react-native-progress";
import { useResearchUploadStore } from "src/Zustand";

export function ResearchUploadProgressBar() {
  const step = useResearchUploadStore(state => state.step);

  return (
    <Bar
      progress={(step + 1) / 4}
      borderRadius={100}
      color={"blue"}
      width={100}
      borderWidth={0}
    />
  );
}
