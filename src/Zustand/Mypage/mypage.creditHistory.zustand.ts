import create from "zustand";

type MypageCreditHistoryScreenStoreProps = {
  /** 서비스 준비 중 모달 표시 여부 */
  serviceGettingReadyModalVisible: boolean;
  setServiceGettingReadyModalVisible: (status: boolean) => void;

  clearState: () => void;
};

/**
 * 마이페이지 크레딧 사용내역 페이지에서 사용하는 상태값들입니다.
 * @author 현웅
 */
export const useMypageCreditHistoryScreenStore =
  create<MypageCreditHistoryScreenStoreProps>((set, get) => ({
    serviceGettingReadyModalVisible: false,
    setServiceGettingReadyModalVisible: (status: boolean) => {
      set({ serviceGettingReadyModalVisible: status });
    },

    clearState: () => {
      set({
        serviceGettingReadyModalVisible: false,
      });
    },
  }));
