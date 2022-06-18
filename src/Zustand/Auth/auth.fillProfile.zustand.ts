import create from "zustand";

type FillProfileScreenStoreProps = {
  /** 프로필 작성 유도 모달 표시 여부 */
  fillProfileModalVisible: boolean;
  setFillProfileModalVisible: (status: boolean) => void;

  clearState: () => void;
};

/**
 * (회원가입 후) 추가 프로필을 작성하는 페이지에서 사용되는 상태값들입니다.
 * @author 현웅
 */
export const useFillProfileScreenStore = create<FillProfileScreenStoreProps>(
  (set, get) => ({
    fillProfileModalVisible: false,
    setFillProfileModalVisible: (status: boolean) => {
      set({ fillProfileModalVisible: status });
    },

    clearState: () => {
      set({ fillProfileModalVisible: false });
    },
  }),
);
