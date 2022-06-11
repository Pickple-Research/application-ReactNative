import create from "zustand";
import { ResearchType } from "src/Object/Enum";
import { ResearchSchema, BlankResearch } from "src/Schema";

type ResearchStoreProps = {
  researches: ResearchSchema[];
  setResearches: (researches: ResearchSchema[]) => void;

  /** 리서치 랜딩 페이지에서 보여줄 리서치 타입 */
  selectedType: ResearchType;
  setSelectedType: (type: ResearchType) => void;
};

/**
 * 리서치 데이터를 불러오거나 수정하는 zustand store 입니다.
 * @author 현웅
 */
export const useResearchStore = create<ResearchStoreProps>((set, get) => ({
  researches: [BlankResearch],
  setResearches: (researches: ResearchSchema[]) => {
    set({ researches });
  },

  selectedType: ResearchType.ALL,
  setSelectedType: (type: ResearchType) => {
    set({ selectedType: type });
  },
}));
