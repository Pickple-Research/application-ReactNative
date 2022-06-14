import create from "zustand";
import { ResearchSchema } from "src/Schema";
import { ParticipatedResearchInfo } from "src/Schema/User/Embedded";
import { axiosParticipateResearch } from "src/Axios";

type ResearchParticipateStoreProps = {
  /** researchStartDate가 세팅되었는지 여부 */
  researchStartDateSetted: boolean;
  /** 리서치에 참여한 시각 */
  researchStartDate: Date;
  setResearchStartDate: () => void;

  /** 외부폼 로딩 중 모달 */
  loadingModalVisible: boolean;
  setLoadingModalVisible: (status: boolean) => void;

  /** 참여 도중 나가려고 할 때 모달 */
  blockExitModalVisible: boolean;
  setBlockExitModalVisible: (status: boolean) => void;

  /** 참여 완료 시 모달 */
  completeModalVisible: boolean;
  setCompleteModalVisible: (status: boolean) => void;

  /** WebView 내에서 폼이 제출되었는지 여부 */
  formSubmitted: boolean;
  setFormSubmitted: (status: boolean) => void;

  /** 서버 응답이 성공한 경우 */
  participateSuccessed: boolean;
  setParticipateSuccessed: (status: boolean) => void;

  /** 리서치 참여 요청 응답 대기 상태 */
  loading: boolean;

  clearInputs: () => void;

  /**
   * 리서치에 참여합니다.
   * 요청이 성공적인 경우, 리서치 참여 정보와 참여 정보가 반영된 최신 리서치 정보를 반환합니다.
   * @author 현웅
   */
  participateResearch: (researchId: string) => Promise<{
    participatedResearchInfo: ParticipatedResearchInfo;
    updatedResearch: ResearchSchema;
  } | null>;
};

/**
 * 리서치 참여 페이지에서 사용하는 상태값들을 정의합니다.
 * @author 현웅
 */
export const useResearchParticipateStore =
  create<ResearchParticipateStoreProps>((set, get) => ({
    researchStartDateSetted: false,
    researchStartDate: new Date(),
    setResearchStartDate: () => {
      //* 리서치 시작 시각을 세팅하고 researchStartDateSetted 플래그를 true로 설정합니다.
      set({ researchStartDate: new Date(), researchStartDateSetted: true });
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

    setResearchStartTimeSetted: (status: boolean) => {
      set({ researchStartDateSetted: status });
    },

    formSubmitted: false,
    setFormSubmitted: (status: boolean) => {
      set({ formSubmitted: status });
    },

    participateSuccessed: false,
    setParticipateSuccessed: (status: boolean) => {
      set({ participateSuccessed: status });
    },

    loading: false,

    clearInputs: () => {
      set({
        researchStartDateSetted: false,
        loadingModalVisible: true,
        blockExitModalVisible: false,
        completeModalVisible: false,
        formSubmitted: false,
        participateSuccessed: false,
        loading: false,
      });
    },

    participateResearch: async (researchId: string) => {
      set({ loading: true });
      const result = await axiosParticipateResearch(
        researchId,
        new Date().getTime() - get().researchStartDate.getTime(),
      );
      set({ loading: false });
      return result;
    },
  }));
