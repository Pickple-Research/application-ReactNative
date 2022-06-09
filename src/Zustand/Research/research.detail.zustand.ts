import create from "zustand";

type ResearchDetailStoreProps = {
  researchPullupModalVisible: boolean;
  setResearchPullupModalVisible: (status: boolean) => void;
};

/**
 * 리서치 상세 페이지에서 사용하는 상태값들을 정의합니다.
 * @author 현웅
 */
export const useResearchDetailStore = create<ResearchDetailStoreProps>(
  (set, get) => ({
    researchPullupModalVisible: false,
    setResearchPullupModalVisible: (status: boolean) => {
      set({ researchPullupModalVisible: status });
    },
  }),
);
