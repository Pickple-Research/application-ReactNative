import create from "zustand";
import { useResearchStore } from "./research.zustand";
import { ResearchType } from "src/Object/Enum";

type ResearchLandingScreenStoreProps = {
  /** 리서치 랜딩 페이지에서 보여줄 리서치 타입 */
  selectedType: ResearchType;
  setSelectedType: (type: ResearchType) => void;

  /** 리서치 로드 중 여부 */
  loading: boolean;
  /** 더 오래 전의 리서치를 가져옵니다 */
  getOlderResearches: () => Promise<void>;

  clearState: () => void;
};

/**
 * 리서치 랜딩 페이지에서 사용되는 상태값들입니다.
 * @author 현웅
 */
export const useResearchLandingScreenStore =
  create<ResearchLandingScreenStoreProps>((set, get) => ({
    selectedType: ResearchType.ALL,
    setSelectedType: (type: ResearchType) => {
      set({ selectedType: type });
    },

    loading: false,
    getOlderResearches: async () => {
      set({ loading: true });
      await useResearchStore.getState().getOlderResearches();
      set({ loading: false });
      return;
    },

    clearState: () => {
      set({
        selectedType: ResearchType.ALL,
        loading: false,
      });
    },
  }));
