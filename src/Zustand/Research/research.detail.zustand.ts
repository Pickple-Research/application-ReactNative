import create from "zustand";
import { ResearchSchema, BlankResearch } from "src/Schema";

type ResearchDetailStoreProps = {
  researchDetail: ResearchSchema;
  setResearchDetail: (researchDetail: ResearchSchema) => void;

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
    researchDetail: BlankResearch,
    setResearchDetail: (researchDetail: ResearchSchema) => {
      set({ researchDetail });
    },

    researchPullupModalVisible: false,
    setResearchPullupModalVisible: (status: boolean) => {
      set({ researchPullupModalVisible: status });
    },

    clearInfo: () => {
      set({
        researchDetail: BlankResearch,
        researchPullupModalVisible: false,
      });
    },
  }),
);
