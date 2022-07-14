import create from "zustand";
import {
  ResearchSchema,
  ParticipatedResearchInfo,
  CreditHistorySchema,
  BlankResearch,
} from "src/Schema";
import { axiosGetNewerResearches, axiosGetOlderResearches } from "src/Axios";
import { useUserStore } from "../User/user.zustand";
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
  scrappedResearches: ResearchSchema[];
  participatedResearches: ResearchSchema[];
  uploadedResearches: ResearchSchema[];

  setResearches: (researches: ResearchSchema[]) => void;

  /** 기존에 가지고 있던 리서치보다 최신의 리서치를 모두 가져옵니다 */
  getNewerResearches: () => Promise<void>;

  /** 서버에 존재하는 모든 리서치를 가져왔는지 여부 */
  noMoreOlderResearches: boolean;
  /** 기존에 가지고 있던 리서치보다 더 예전의 리서치를 가져옵니다 */
  getOlderResearches: () => Promise<void>;

  /**
   * 리서치 상세 페이지를 들어가거나 (대)댓글을 달아서
   * 리서치 정보가 업데이트 된 경우, 해당 정보를 전파합니다.
   * - (research.detail.zustand) researchDetail 정보를 최신 리서치 정보로 업데이트 합니다.
   * - (research.zustand) researches, scrappedResearches, participatedResearches, uploadedResearches 의 해당 리서치를 최신 리서치 정보로 업데이트 합니다.
   */
  spreadResearchUpdated: (research: ResearchSchema) => void;

  /**
   * 리서치 스크랩 후 해당 정보를 전파합니다.
   * - (research.detail.zustand) researchDetail 정보를 최신 리서치 정보로 업데이트 합니다.
   * - (research.zustand) researches, participatedResearches 정보를 업데이트 하고
   *     scrappedResearches 에 리서치 정보를 추가합니다.
   * - (user.zustand) userResearch 의 scrappedResearchIds 에 리서치 _id 를 추가합니다.
   */
  spreadResearchScrapped: (research: ResearchSchema) => void;

  /**
   * 리서치 스크랩 취소 후 해당 정보를 전파합니다.
   * - (research.detail.zustand) researchDetail 정보를 최신 리서치 정보로 업데이트 합니다.
   * - (research.zustand) researches, participatedResearches 정보를 업데이트 하고
   *     scrappedResearches 에서 리서치 정보를 제거합니다.
   * - (user.zustand) userResearch 의 scrappedResearchIds 에서 리서치 _id 를 제거합니다.
   */
  spreadResearchUnscrapped: (research: ResearchSchema) => void;

  /**
   * 리서치 참여 후 해당 정보를 전파합니다.
   * - (research.detail.zustand) researchDetail 정보를 최신 리서치 정보로 업데이트 합니다.
   * - (research.zustand) researches, scrappedResearches 에 해당 리서치가 있는 경우, 최신 리서치 정보로 업데이트 하고 participatedResearches 에 리서치 정보를 추가합니다.
   * - (user.zustand) creditHistories 에 크레딧 사용내역을 추가하고 credit 총량을 업데이트 합니다.
   * - (user.zustand) userResearch 의 participatedResearchInfos 에 리서치 참여 정보를 추가합니다.
   */
  spreadResearchParticipated: (param: {
    participationResearchInfo: ParticipatedResearchInfo;
    research: ResearchSchema;
    creditHistory: CreditHistorySchema;
  }) => void;

  /**
   * 리서치를 업로드 후 해당 정보를 전파합니다.
   * - (research.zustand) researches에 업로드 이전의 최신 리서치보다 더 최신의 리서치를 가져와서 추가하고, uploadedResearches 에 해당 리서치를 추가합니다.
   * - (user.zustand) creditHistories 에 크레딧 사용내역을 추가하고 credit 총량을 업데이트 합니다.
   */
  spreadResearchUploaded: (param: {
    research: ResearchSchema;
    creditHistory: CreditHistorySchema;
  }) => Promise<void>;

  /**
   * 리서치 삭제 후 해당 정보를 전파합니다.
   * - (user.zustand) userResearch 의 모든 property 에서 리서치 정보를 제거합니다.
   * - (research.zustand) uploadedResearches 에서 리서치 정보를 제거합니다.
   */
  spreadResearchDeleted: (researchId: string) => void;

  /**
   * 삭제된 리서치의 상세 페이지에 접근한 경우 해당 정보를 전파합니다.
   */
  spreadDeletedResearch: (researchId: string) => void;

  /**
   * 리서치 끌올 후 해당 정보를 전파합니다.
   */
  spreadResearchPullup: (research: ResearchSchema) => void;

  clearState: () => void;
};

/**
 * 리서치 관련 데이터를 관리하는 zustand store 입니다. (상세 페이지 리서치 정보는 제외)
 * 전체 리서치 목록, 스크랩/참여/업로드한 리서치 데이터를 관리하며,
 * 리서치 조회/스크랩/스크랩 취소/업로드/삭제 시 정보를 반영합니다.
 * @author 현웅
 */
export const useResearchStore = create<ResearchStoreProps>((set, get) => ({
  researches: [BlankResearch],
  scrappedResearches: [BlankResearch],
  participatedResearches: [BlankResearch],
  uploadedResearches: [BlankResearch],

  setResearches: (researches: ResearchSchema[]) => {
    set({ researches });
  },

  getNewerResearches: async () => {
    const newerResearches = await axiosGetNewerResearches(
      get().researches[0].pulledupAt,
    );
    if (newerResearches !== null) {
      set({
        researches: addResearchListItem(newerResearches, get().researches),
      });
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
    set({
      researches: appendResearchListItem(olderResearches, get().researches),
    });
    return;
  },

  //* Spread
  spreadResearchUpdated: (research: ResearchSchema) => {
    useResearchDetailScreenStore.getState().updateResearchDetail(research);
    set({
      researches: updateResearchListItem(research, get().researches),
      scrappedResearches: updateResearchListItem(
        research,
        get().scrappedResearches,
      ),
      participatedResearches: updateResearchListItem(
        research,
        get().participatedResearches,
      ),
      uploadedResearches: updateResearchListItem(
        research,
        get().uploadedResearches,
      ),
    });
  },

  spreadResearchScrapped: (research: ResearchSchema) => {
    useResearchDetailScreenStore.getState().updateResearchDetail(research);

    set({
      researches: updateResearchListItem(research, get().researches),
      participatedResearches: updateResearchListItem(
        research,
        get().participatedResearches,
      ),
      scrappedResearches: addResearchListItem(
        research,
        get().scrappedResearches,
      ),
    });

    useUserStore.getState().addResearchIdToUserResearch({
      changeTarget: "SCRAP",
      researchId: research._id,
    });
  },

  spreadResearchUnscrapped: (research: ResearchSchema) => {
    useResearchDetailScreenStore.getState().updateResearchDetail(research);

    set({
      researches: updateResearchListItem(research, get().researches),
      participatedResearches: updateResearchListItem(
        research,
        get().participatedResearches,
      ),
      scrappedResearches: removeResearchListItem(
        research._id,
        get().scrappedResearches,
      ),
    });

    useUserStore.getState().removeResearchIdFromUserResearch({
      researchId: research._id,
      unscrap: true,
    });
  },

  spreadResearchParticipated: (param: {
    participationResearchInfo: ParticipatedResearchInfo;
    research: ResearchSchema;
    creditHistory: CreditHistorySchema;
  }) => {
    useResearchDetailScreenStore
      .getState()
      .updateResearchDetail(param.research);

    set({
      researches: updateResearchListItem(param.research, get().researches),
      scrappedResearches: updateResearchListItem(
        param.research,
        get().scrappedResearches,
      ),
      participatedResearches: addResearchListItem(
        param.research,
        get().participatedResearches,
      ),
    });

    useUserStore.getState().updateCreditHistory(param.creditHistory);
    useUserStore
      .getState()
      .addParticipatedResearchInfo(param.participationResearchInfo);
  },

  spreadResearchUploaded: async (param: {
    research: ResearchSchema;
    creditHistory: CreditHistorySchema;
  }) => {
    await get().getNewerResearches();
    useUserStore.getState().updateCreditHistory(param.creditHistory);
    set({
      uploadedResearches: addResearchListItem(
        param.research,
        get().uploadedResearches,
      ),
    });
  },

  spreadResearchDeleted: (researchId: string) => {
    set({
      researches: removeResearchListItem(researchId, get().researches),
      uploadedResearches: removeResearchListItem(
        researchId,
        get().uploadedResearches,
      ),
    });
    useUserStore
      .getState()
      .removeResearchIdFromUserResearch({ researchId, unscrap: false });
  },

  spreadDeletedResearch: (researchId: string) => {},

  spreadResearchPullup: () => {},

  clearState: () => {
    set({
      researches: [BlankResearch],
      noMoreOlderResearches: false,
    });
  },
}));
