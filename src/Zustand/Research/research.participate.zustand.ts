import create from "zustand";

type ResearchParticipateStoreProps = {
  /**
   * 리서치에 참여한 시각
   * (폼이 로드되었을 때(WebView의 onLoad) resetResearchStartDate를 통하여 한번 더 초기화됩니다.)
   */
  researchStartDate: Date;
  resetResearchStartDate: () => void;

  /** 리서치 참여에 걸린 시각 */
  consummedTime: number;
  caculateConsummedTime: () => void;

  /** 외부폼 로딩 중 모달 */
  loadingModalVisible: boolean;
  setLoadingModalVisible: (status: boolean) => void;

  /** 참여 도중 나가려고 할 때 모달 */
  blockExitModalVisible: boolean;
  setBlockExitModalVisible: (status: boolean) => void;

  /** 참여 완료 시 모달 */
  completeModalVisible: boolean;
  setCompleteModalVisible: (status: boolean) => void;

  clearInputs: () => void;
};

/**
 * 리서치 참여 페이지에서 사용하는 상태값들을 정의합니다.
 * @author 현웅
 */
export const useResearchParticipateStore =
  create<ResearchParticipateStoreProps>((set, get) => ({
    researchStartDate: new Date(),
    resetResearchStartDate: () => {
      set({ researchStartDate: new Date() });
    },

    consummedTime: 0,
    caculateConsummedTime: () => {
      set({
        consummedTime: new Date().getTime() - get().researchStartDate.getTime(),
      });
    },

    loadingModalVisible: true,
    setLoadingModalVisible: (status: boolean) => {
      set({ loadingModalVisible: status });
    },

    blockExitModalVisible: false,
    setBlockExitModalVisible: (status: boolean) => {
      set({ blockExitModalVisible: status });
    },

    completeModalVisible: false,
    setCompleteModalVisible: (status: boolean) => {
      set({ completeModalVisible: status });
    },

    clearInputs: () => {
      set({
        consummedTime: 0,
        loadingModalVisible: true,
        blockExitModalVisible: false,
        completeModalVisible: false,
      });
    },
  }));
