import create from "zustand";
import { useUserStore } from "../User/user.zustand";
import { useResearchStore } from "./research.zustand";
import { useResearchDetailScreenStore } from "./research.detail.zustand";
import { axiosParticipateResearch } from "src/Axios";

type ResearchParticipateScreenStoreProps = {
  /** 리서치 참여 페이지에서 뒤로 가기 버튼을 눌렀을 때 행동을 지정합니다 */
  handleBackPress: () => boolean;

  /** researchStartDate가 세팅되었는지 여부 */
  researchStartDateSetted: boolean;
  /** 리서치에 참여한 시각 */
  researchStartDate: Date;
  setResearchStartDate: () => void;

  /** 외부폼 로딩 중 모달 표시 여부 */
  formLoadingModalVisible: boolean;
  setFormLoadingModalVisible: (status: boolean) => void;

  /** 참여 도중 나가려고 할 때 모달 표시 여부 */
  blockExitModalVisible: boolean;
  setBlockExitModalVisible: (status: boolean) => void;

  /** 외부 폼 제출 완료 시 모달 표시 여부 */
  formSubmittedModalVisible: boolean;
  setFormSubmittedModalVisible: (status: boolean) => void;

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
  participateResearch: () => Promise<void>;
};

/**
 * 리서치 참여 페이지에서 사용하는 상태값들을 정의합니다.
 * @author 현웅
 */
export const useResearchParticipateScreenStore =
  create<ResearchParticipateScreenStoreProps>((set, get) => ({
    handleBackPress: () => {
      //* 뒤로 가기 버튼을 눌렀을 때 폼 로딩 모달, 혹은 폼 제출 완료 모달이 열려있다면
      //* 뒤로 가기 버튼 입력을 무시합니다.
      if (get().formLoadingModalVisible || get().formSubmittedModalVisible) {
        return true;
      }
      //* 그렇지 않다면 재확인 모달을 띄웁니다.
      get().setBlockExitModalVisible(true);
      return true;
    },

    researchStartDateSetted: false,
    researchStartDate: new Date(),
    setResearchStartDate: () => {
      //* 리서치 시작 시각을 세팅하고 researchStartDateSetted 플래그를 true로 설정합니다.
      set({ researchStartDate: new Date(), researchStartDateSetted: true });
    },

    formLoadingModalVisible: true,
    setFormLoadingModalVisible: (status: boolean) => {
      set({ formLoadingModalVisible: status });
    },

    blockExitModalVisible: false,
    setBlockExitModalVisible: (status: boolean) => {
      set({ blockExitModalVisible: status });
    },

    formSubmittedModalVisible: false,
    setFormSubmittedModalVisible: (status: boolean) => {
      set({ formSubmittedModalVisible: status });
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
        formLoadingModalVisible: true,
        blockExitModalVisible: false,
        formSubmittedModalVisible: false,
        formSubmitted: false,
        participateSuccessed: false,
        loading: false,
      });
    },

    participateResearch: async () => {
      //* 폼 제출 플래그가 이미 true라면 곧바로 리턴합니다.
      if (get().formSubmitted) return;

      set({ loading: true });
      //* 폼 제출 플래그를 true로 설정하고 참여 완료 모달을 띄워줍니다
      get().setFormSubmitted(true);
      get().setFormSubmittedModalVisible(true);

      const researchId =
        useResearchDetailScreenStore.getState().researchDetail._id;
      const consummedTime =
        new Date().getTime() - get().researchStartDate.getTime();

      const result = await axiosParticipateResearch(researchId, consummedTime);

      //* 응답이 실패한 경우, participatedSuccessed 플래그를 false로 설정하고 리턴합니다.
      if (result === null) {
        get().setParticipateSuccessed(false);
        return;
      }

      //* 응답이 성공적인 경우, participatedSuccessed 플래그를 true로 설정하고
      //* 유저의 참여 정보, 리서치 상세보기 페이지 정보 및 리서치 리스트 아이템을 업데이트합니다.
      get().setParticipateSuccessed(true);
      useUserStore
        .getState()
        .addParticipatedResearchInfo(result.participatedResearchInfo);
      useResearchStore
        .getState()
        .updateResearchListItem(result.updatedResearch);
      useResearchDetailScreenStore
        .getState()
        .setResearchDetail(result.updatedResearch);

      set({ loading: false });
      return;
    },
  }));
