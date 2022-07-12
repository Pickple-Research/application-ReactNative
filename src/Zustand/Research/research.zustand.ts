import create from "zustand";
import {
  ResearchSchema,
  ParticipatedResearchInfo,
  CreditHistorySchema,
  BlankResearch,
} from "src/Schema";
import { axiosGetNewerResearches, axiosGetOlderResearches } from "src/Axios";
import { useUserStore } from "../User/user.zustand";
import { useMypageStore } from "../Mypage/mypage.zustand";
import { useResearchDetailScreenStore } from "./research.detail.zustand";
import { showBlackToast } from "src/Util";
import {
  addResearchListItem,
  appendResearchListItem,
  updateResearchListItem,
  removeResearchListItem,
} from "src/Util";

type ResearchStoreProps = {
  researches: ResearchSchema[];
  setResearches: (researches: ResearchSchema[]) => void;

  /** 기존에 가지고 있던 리서치보다 최신의 리서치를 모두 가져옵니다 */
  getNewerResearches: () => Promise<void>;

  /** 서버에 존재하는 모든 리서치를 가져왔는지 여부 */
  noMoreOlderResearches: boolean;
  /** 기존에 가지고 있던 리서치보다 더 예전의 리서치를 가져옵니다 */
  getOlderResearches: () => Promise<void>;

  /** 새로운 리서치를 리서치 리스트 맨 앞에 추가합니다. */
  addResearchListItem: (newResearch: ResearchSchema | ResearchSchema[]) => void;

  /** 인자로 받은 리서치(들)를 리서치 리스트 맨 뒤에 추가합니다. */
  appendResearchListItem: (
    newResearch: ResearchSchema | ResearchSchema[],
  ) => void;

  /** 리서치 리스트에 있는 리서치 중 하나를 업데이트합니다 */
  updateResearchListItem: (updatedResearch: ResearchSchema) => void;

  /** 리서치 리스트에 있는 리서치 중 하나를 삭제합니다 */
  removeResearchListItem: (researchId: string) => void;

  /**
   * 리서치 상세 페이지를 들어가거나 (대)댓글을 달아서
   * 리서치 정보가 업데이트 된 경우, 해당 정보를 전파합니다.
   * - (research.detail.zustand) researchDetail 정보를 최신 리서치 정보로 업데이트 합니다.
   * - (research.zustand) researches 의 해당 리서치를 최신 리서치 정보로 업데이트 합니다.
   * - (mypage.zustand) scrappedResearches 에 리서치 정보를 추가합니다.
   */
  spreadResearchUpdated: (research: ResearchSchema) => void;

  /**
   * 리서치 스크랩 후 해당 정보를 전파합니다.
   * - (research.detail.zustand) researchDetail 정보를 최신 리서치 정보로 업데이트 합니다.
   * - (research.zustand) researches 의 해당 리서치를 최신 리서치 정보로 업데이트 합니다.
   * - (user.zustand) userResearch 의 scrappedResearchIds 에 리서치 _id 를 추가합니다.
   * - (mypage.zustand) scrappedResearches 에 리서치 정보를 추가합니다.
   */
  spreadResearchScrapped: (research: ResearchSchema) => void;

  /**
   * 리서치 스크랩 취소 후 해당 정보를 전파합니다.
   * - (research.detail.zustand) researchDetail 정보를 최신 리서치 정보로 업데이트 합니다.
   * - (research.zustand) researches 에 해당 리서치가 있는 경우, 최신 리서치 정보로 업데이트 합니다.
   * - (user.zustand) userResearch 의 scrappedResearchIds 에서 리서치 _id 를 제거합니다.
   * - (mypage.zustand) scrappedResearches 에서 리서치 정보를 제거합니다.
   */
  spreadResearchUnscrapped: (research: ResearchSchema) => void;

  /**
   * 리서치 참여 후 해당 정보를 전파합니다.
   * - (research.detail.zustand) researchDetail 정보를 최신 리서치 정보로 업데이트 합니다.
   * - (research.zustand) researches 에 해당 리서치가 있는 경우, 최신 리서치 정보로 업데이트 합니다.
   * - (user.zustand) userResearch 의 participatedResearchInfos 에 리서치 정보를 추가하고,
   *   userCredit 에 크레딧 변동 사항과 크레딧 사용내역 _id 를 추가합니다.
   * - (mypage.zustand) participatedResearches 에 리서치 정보를 추가하고,
   *   creditHistories 에 크레딧 사용내역을 추가합니다.
   */
  spreadResearchParticipated: (param: {
    participationResearchInfo: ParticipatedResearchInfo;
    research: ResearchSchema;
    creditHistory: CreditHistorySchema;
  }) => void;

  /**
   * 리서치를 업로드 후 해당 정보를 전파합니다.
   * - (research.zustand) 업로드 이전의 최신 리서치보다 더 최신의 리서치를 가져와서 추가합니다.
   * - (user.zustand) userResearch 의 uploadedResearchIds 에 리서치 _id 를 추가합니다.
   *   userCredit 에 크레딧 변동 사항과 크레딧 사용내역 _id 를 추가합니다.
   * - (mypage.zustand) uploadedResearches 에 리서치 정보를 추가합니다.
   *   creditHistories 에 크레딧 사용내역을 추가합니다.
   */
  spreadResearchUploaded: (param: {
    research: ResearchSchema;
    creditHistory: CreditHistorySchema;
  }) => Promise<void>;

  /**
   * 리서치 삭제 후, 혹은 상세 페이지 진입 후 리서치가 삭제된 경우 해당 정보를 전파합니다.
   * - (user.zustand) userResearch 의 모든 property 에서 리서치 정보를 제거합니다.
   * - (mypage.zustand) 모든 리서치 관련 property 에서 리서치 정보를 제거합니다.
   * - (research.zustand) researches 에서 리서치 정보를 제거합니다.
   */
  spreadResearchDeleted: (researchId: string) => void;

  clearState: () => void;
};

/**
 * 전체 리서치 데이터를 불러오거나 수정하는 zustand store 입니다.
 * @author 현웅
 */
export const useResearchStore = create<ResearchStoreProps>((set, get) => ({
  researches: [BlankResearch],
  setResearches: (researches: ResearchSchema[]) => {
    set({ researches });
  },

  getNewerResearches: async () => {
    const newerResearches = await axiosGetNewerResearches(
      get().researches[0].pulledupAt,
    );
    if (newerResearches !== null) {
      get().addResearchListItem(newerResearches);
    }
    return;
  },

  noMoreOlderResearches: false,

  getOlderResearches: async () => {
    //* 이미 모든 리서치를 가져온 상태라면 토스트 메세지를 띄우고 반환합니다.
    if (get().noMoreOlderResearches) {
      showBlackToast({ text1: "더 가져올 리서치가 없습니다" });
      return;
    }

    const olderResearches = await axiosGetOlderResearches(
      get().researches[get().researches.length - 1].pulledupAt,
    );

    //* 에러가 난 경우 반환합니다.
    if (olderResearches === null) return;

    //* 가져온 리서치 개수가 0개인 경우, noMoreOlderResearches 플래그를 true 로 설정합니다.
    if (olderResearches.length === 0) {
      set({ noMoreOlderResearches: true });
      return;
    }

    //* 가져온 리서치가 있는 경우, 리스트 뒤에 추가합니다.
    get().appendResearchListItem(olderResearches);
    return;
  },

  addResearchListItem: (newResearch: ResearchSchema | ResearchSchema[]) => {
    set({ researches: addResearchListItem(newResearch, get().researches) });
  },

  appendResearchListItem: (newResearch: ResearchSchema | ResearchSchema[]) => {
    set({
      researches: appendResearchListItem(newResearch, get().researches),
    });
  },

  updateResearchListItem: (updatedResearch: ResearchSchema) => {
    set({
      researches: updateResearchListItem(updatedResearch, get().researches),
    });
  },

  removeResearchListItem: (researchId: string) => {
    set({ researches: removeResearchListItem(researchId, get().researches) });
  },

  //* Spread
  spreadResearchUpdated: (research: ResearchSchema) => {
    useResearchDetailScreenStore.getState().updateResearchDetail(research);
    get().updateResearchListItem(research);
    useMypageStore.getState().updateResearch(research);
  },

  spreadResearchScrapped: (research: ResearchSchema) => {
    useResearchDetailScreenStore.getState().updateResearchDetail(research);
    get().updateResearchListItem(research);
    useUserStore.getState().addResearchIdToUserResearch({
      changeTarget: "SCRAP",
      researchId: research._id,
    });
    useMypageStore.getState().addResearch({ changeTarget: "SCRAP", research });
  },

  spreadResearchUnscrapped: (research: ResearchSchema) => {
    useResearchDetailScreenStore.getState().updateResearchDetail(research);
    get().updateResearchListItem(research);
    useUserStore.getState().removeResearchIdFromUserResearch({
      researchId: research._id,
      unscrap: true,
    });
    useMypageStore
      .getState()
      .deleteResearch({ researchId: research._id, unscrap: true });
  },

  spreadResearchParticipated: (param: {
    participationResearchInfo: ParticipatedResearchInfo;
    research: ResearchSchema;
    creditHistory: CreditHistorySchema;
  }) => {
    useResearchDetailScreenStore
      .getState()
      .updateResearchDetail(param.research);
    get().updateResearchListItem(param.research);
    useUserStore.getState().updateCreditHistory(param.creditHistory);
    useUserStore
      .getState()
      .addParticipatedResearchInfo(param.participationResearchInfo);
    useMypageStore
      .getState()
      .addResearch({ changeTarget: "PARTICIPATE", research: param.research });
    useMypageStore.getState().addCreditHistory(param.creditHistory);
  },

  spreadResearchUploaded: async (param: {
    research: ResearchSchema;
    creditHistory: CreditHistorySchema;
  }) => {
    await get().getNewerResearches();
    useUserStore.getState().updateCreditHistory(param.creditHistory);
    useMypageStore
      .getState()
      .addResearch({ changeTarget: "UPLOAD", research: param.research });
    useMypageStore.getState().addCreditHistory(param.creditHistory);
  },

  spreadResearchDeleted: (researchId: string) => {
    useUserStore
      .getState()
      .removeResearchIdFromUserResearch({ researchId, unscrap: false });
    useMypageStore.getState().deleteResearch({ researchId, unscrap: false });
  },

  clearState: () => {
    set({
      researches: [BlankResearch],
      noMoreOlderResearches: false,
    });
  },
}));
