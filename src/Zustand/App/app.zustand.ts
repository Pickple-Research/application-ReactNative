import create from "zustand";

type AppStoreProps = {
  /** 프로필 작성 완료 모달 표시 여부 */
  completeFillProfileModalVisible: boolean;
  setCompleteFillProfileModalVisible: (status: boolean) => void;
};

/**
 * 앱 전체에서 사용되거나, 하나의 페이지에 지정하기 어려운 상태값들입니다.
 * @author 현웅
 */
export const useAppStore = create<AppStoreProps>((set, get) => ({
  completeFillProfileModalVisible: false,
  setCompleteFillProfileModalVisible: (status: boolean) => {
    set({ completeFillProfileModalVisible: status });
  },
}));
