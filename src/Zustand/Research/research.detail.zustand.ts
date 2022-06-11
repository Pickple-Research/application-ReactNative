import create from "zustand";
import { ResearchSchema, BlankResearch } from "src/Schema";

type ResearchDetailStoreProps = {
  research: ResearchSchema;
  setResearch: (research: ResearchSchema) => void;

  researchPullupModalVisible: boolean;
  setResearchPullupModalVisible: (status: boolean) => void;

  clearInfo: () => void;
};

/**
 * 리서치 상세 페이지에서 사용하는 상태값들을 정의합니다.
 * @author 현웅
 */
export const useResearchDetailStore = create<ResearchDetailStoreProps>(
  (set, get) => ({
    research: BlankResearch,
    setResearch: (research: ResearchSchema) => {
      set({ research });
    },

    researchPullupModalVisible: false,
    setResearchPullupModalVisible: (status: boolean) => {
      set({ researchPullupModalVisible: status });
    },

    clearInfo: () => {
      set({
        research: BlankResearch,
        researchPullupModalVisible: false,
      });
    },
  }),
);
