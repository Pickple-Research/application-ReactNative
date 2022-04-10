import create from "zustand/react";

type ResearchInfo = {
  title: string;
  content: string;
};

export const useResearchStore = create<{ researches: ResearchInfo[] }>(() => ({
  researches: [],
}));
