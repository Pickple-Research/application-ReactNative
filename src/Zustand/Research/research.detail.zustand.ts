import create from "zustand";
import { ResearchSchema, BlankResearch } from "src/Schema";

type ResearchDetailScreenStoreProps = {
  /** 화면에 보여지는 리서치 정보 */
  researchDetail: ResearchSchema;
  setResearchDetail: (researchDetail: ResearchSchema) => void;

  /** 리서치 삭제 모달 표시 여부 */
  researchDeleteModalVisible: boolean;
  setResearchDeleteModalVisible: (status: boolean) => void;

  /** 리서치 끌올 모달 표시 여부 */
  researchPullupModalVisible: boolean;
  setResearchPullupModalVisible: (status: boolean) => void;

  /** 리서치 신고 모달 표시 여부 */
  researchReportModalVisible: boolean;
  setResearchReportModalVisible: (status: boolean) => void;

  clearState: () => void;

  /**
   * 리서치를 삭제합니다.
   * 응답이 성공적인 경우, 리서치 정보를 업데이트 합니다.
   * @author 현웅
   */
  deleteResearch: () => Promise<void>;

  /**
   * 리서치를 끌올합니다.
   * 응답이 성공적인 경우, 리서치 정보를 업데이트 합니다.
   * @author 현웅
   */
  pullupResearch: () => Promise<void>;

  /** 리서치를 신고합니다. */
  reportReserach: () => Promise<void>;
};

/**
 * 리서치 상세 페이지에서 사용하는 상태값들을 정의합니다.
 * @author 현웅
 */
export const useResearchDetailScreenStore =
  create<ResearchDetailScreenStoreProps>((set, get) => ({
    researchDetail: BlankResearch,
    setResearchDetail: (researchDetail: ResearchSchema) => {
      set({ researchDetail });
    },

    researchDeleteModalVisible: false,
    setResearchDeleteModalVisible: (status: boolean) => {
      set({ researchDeleteModalVisible: status });
    },

    researchPullupModalVisible: false,
    setResearchPullupModalVisible: (status: boolean) => {
      set({ researchPullupModalVisible: status });
    },

    researchReportModalVisible: false,
    setResearchReportModalVisible: (status: boolean) => {
      set({ researchReportModalVisible: status });
    },

    clearState: () => {
      set({
        researchDetail: BlankResearch,
        researchDeleteModalVisible: false,
        researchPullupModalVisible: false,
        researchReportModalVisible: false,
      });
    },

    deleteResearch: async () => {
      return;
    },

    pullupResearch: async () => {
      return;
    },

    reportReserach: async () => {
      return;
    },
  }));
