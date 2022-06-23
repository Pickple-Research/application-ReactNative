import create from "zustand";
import { useResearchStore } from "./research.zustand";
import { ResearchType } from "src/Object/Enum";

export type ResearchSortStandard =
  | "RECENT"
  | "GIFT"
  | "PARTICIPANT"
  | "CLOSE"
  | "CREDIT";

type ResearchLandingScreenStoreProps = {
  /** 리서치 랜딩 페이지 리서치 리스트 정렬 기준 */
  researchSortStandard: ResearchSortStandard;
  setResearchSortStandard: (standard: ResearchSortStandard) => void;

  /** 리서치 랜딩 페이지 리서치 리스트에서 보여줄 리서치 타입 */
  selectedResearchType: ResearchType;
  setSelectedResearchType: (researchType: ResearchType) => void;

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
    researchSortStandard: "RECENT",
    setResearchSortStandard: (standard: ResearchSortStandard) => {
      //TODO: 정렬 후 보여지는 리서치도 정렬해줘야 합니다.
      set({ researchSortStandard: standard });
    },

    selectedResearchType: ResearchType.ALL,
    setSelectedResearchType: (researchType: ResearchType) => {
      set({ selectedResearchType: researchType });
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
        researchSortStandard: "RECENT",
        selectedResearchType: ResearchType.ALL,
        loading: false,
      });
    },
  }));
