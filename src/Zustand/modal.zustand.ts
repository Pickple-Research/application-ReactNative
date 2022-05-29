import create from "zustand";

type ModalStoreProps = {
  researchPullupModalVisible: boolean;
  setResearchPullupModalVisible: (status: boolean) => void;
};

/**
 * 모달을 열고 닫을 때 사용되는 값과 함수들을 정의하는 zustand store 입니다.
 * @author 현웅
 */
export const useModalStore = create<ModalStoreProps>((set, get) => ({
  researchPullupModalVisible: false,
  setResearchPullupModalVisible: (status: boolean) => {
    set({ researchPullupModalVisible: status });
  },
}));
