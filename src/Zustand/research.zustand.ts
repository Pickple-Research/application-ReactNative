import create from "zustand";

type ResearchInfo = {
  title: string;
  content: string;
};

export const useResearchStore = create<{ researches: ResearchInfo[] }>(() => ({
  researches: [],
}));
