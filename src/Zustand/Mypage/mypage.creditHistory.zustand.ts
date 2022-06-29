import create from "zustand";
import { CreditHistorySchema } from "src/Schema";
import { showBlackToast } from "src/Util";

type Filter = "ALL" | "INCOME" | "EXPENDITURE";

type MypageCreditHistoryScreenStoreProps = {
  /** 크레딧 사용내역들 */
  creditHistories: CreditHistorySchema[];
  setCreditHistories: (creditHistories: CreditHistorySchema[]) => void;

  /** 크레딧 사용내역 최신순 | 사용한 크레딧 | 받은 크레딧 필터 */
  creditHistoryFilter: Filter;
  setCreditHistoryFilter: (filter: Filter) => void;

  /** 크레딧 사용내역 맨 앞에 새로운 크레딧 사용내역을 추가합니다 */
  addCreditHistory: (creditHistory: CreditHistorySchema) => void;

  noMoreCreditHistories: boolean;
  loadCreditHistories: () => void;

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
    creditHistories: [],
    setCreditHistories: (creditHistories: CreditHistorySchema[]) => {
      set({ creditHistories });
    },

    creditHistoryFilter: "ALL",
    setCreditHistoryFilter: (filter: Filter) => {
      set({ creditHistoryFilter: filter });
    },

    addCreditHistory: (creditHistory: CreditHistorySchema) => {
      set({
        creditHistories: [creditHistory, ...get().creditHistories],
      });
    },

    noMoreCreditHistories: false,
    loadCreditHistories: () => {
      if (get().noMoreCreditHistories) {
        showBlackToast({ text1: "모든 크레딧 사용내역을 불러왔습니다" });
        return;
      }
    },

    serviceGettingReadyModalVisible: false,
    setServiceGettingReadyModalVisible: (status: boolean) => {
      set({ serviceGettingReadyModalVisible: status });
    },

    clearState: () => {
      set({
        creditHistories: [],
        creditHistoryFilter: "ALL",
        noMoreCreditHistories: false,
        serviceGettingReadyModalVisible: false,
      });
    },
  }));
