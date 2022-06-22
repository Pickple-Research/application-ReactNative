import create from "zustand";
import { ResearchSchema, VoteSchema } from "src/Schema";
import {
  addResearchListItem,
  updateResearchListItem,
  removeResearchListItem,
  addVoteListItem,
  updateVoteListItem,
  removeVoteListItem,
} from "src/Util";

type Filter = "ALL" | "OPEN" | "CLOSED";

/**
 * 마이페이지 - 스크랩한 리서치 및 투표 페이지에서 사용되는 상태값과 함수들을 사용할 수 있습니다.
 * @author 현웅
 */
type MypageScrappedScreenStoreProps = {
  /** 스크랩한 리서치 정보 */
  scrappedResearches: ResearchSchema[];
  /** 스크랩한 투표 정보 */
  scrappedVotes: VoteSchema[];

  /** 리서치 전체 | 진행중 | 마감 필터 */
  researchFilter: Filter;
  setResearchFilter: (filter: Filter) => void;
  /** 투표 전체 | 진행중 | 마감 필터 */
  voteFilter: Filter;
  setVoteFilter: (filter: Filter) => void;

  /** 스크랩한 리서치를 추가합니다 */
  addScrappedResearch: (newResearch: ResearchSchema) => void;
  /** 스크랩한 투표를 추가합니다 */
  addScrappedVote: (newVote: VoteSchema) => void;

  /** 스크랩한 리서치 정보를 업데이트합니다 */
  updateScrappedResearch: (updatedResearch: ResearchSchema) => void;
  /** 스크랩한 투표 정보를 업데이트합니다 */
  updateScrappedVote: (updatedVote: VoteSchema) => void;

  /** 스크랩 취소한 리서치를 제거합니다 */
  removeScrappedResearch: (researchId: string) => void;
  /** 스크랩 취소한 투표를 제거합니다 */
  removeScrappedVote: (voteId: string) => void;

  /** 리서치 스크랩 취소 모달 표시 여부 */
  researchUnscrapModalVisible: boolean;
  setResearchUnscrapModalVisible: (status: boolean) => void;

  /** 투표 스크랩 취소 모달 표시 여부 */
  voteUnscrapModalVisible: boolean;
  setVoteUnscrapModalVisible: (status: boolean) => void;

  /** 리서치 및 투표 스크랩 취소 처리 중 여부 */
  scrapping: boolean;

  /** 리서치 스크랩을 취소합니다 */
  unscrapResearch: () => Promise<void>;
  /** 투표 스크랩을 취소합니다 */
  unscrapVote: () => Promise<void>;

  clearState: () => void;
};

/**
 * 마이페이지 내가 스크랩한 글 페이지에서 사용하는 상태값들입니다.
 * @author 현웅
 */
export const useMypageScrappedScreenStore =
  create<MypageScrappedScreenStoreProps>((set, get) => ({
    scrappedResearches: [],
    scrappedVotes: [],

    researchFilter: "ALL",
    setResearchFilter: (filter: Filter) => {
      set({ researchFilter: filter });
    },
    voteFilter: "ALL",
    setVoteFilter: (filter: Filter) => {
      set({ voteFilter: filter });
    },

    addScrappedResearch: (newResearch: ResearchSchema) => {
      set({
        scrappedResearches: addResearchListItem(
          newResearch,
          get().scrappedResearches,
        ),
      });
    },
    addScrappedVote: (newVote: VoteSchema) => {
      set({ scrappedVotes: addVoteListItem(newVote, get().scrappedVotes) });
    },

    updateScrappedResearch: (updatedResearch: ResearchSchema) => {
      set({
        scrappedResearches: updateResearchListItem(
          updatedResearch,
          get().scrappedResearches,
        ),
      });
    },
    updateScrappedVote: (updatedVote: VoteSchema) => {
      set({
        scrappedVotes: updateVoteListItem(updatedVote, get().scrappedVotes),
      });
    },

    removeScrappedResearch: (researchId: string) => {
      set({
        scrappedResearches: removeResearchListItem(
          researchId,
          get().scrappedResearches,
        ),
      });
    },
    removeScrappedVote: (voteId: string) => {
      set({ scrappedVotes: removeVoteListItem(voteId, get().scrappedVotes) });
    },

    researchUnscrapModalVisible: false,
    setResearchUnscrapModalVisible: (status: boolean) => {
      set({ researchUnscrapModalVisible: status });
    },

    voteUnscrapModalVisible: false,
    setVoteUnscrapModalVisible: (status: boolean) => {
      set({ voteUnscrapModalVisible: status });
    },

    scrapping: false,

    unscrapResearch: async () => {
      return;
    },

    unscrapVote: async () => {
      return;
    },

    clearState: () => {
      set({
        scrappedResearches: [],
        scrappedVotes: [],
        researchFilter: "ALL",
        voteFilter: "ALL",
        researchUnscrapModalVisible: false,
        voteUnscrapModalVisible: false,
        scrapping: false,
      });
    },
  }));
