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

type Filter = "ALL" | "OPENED" | "CLOSED";

/**
 * 마이페이지 - 업로드 한 리서치 및 투표 페이지에서 사용되는 상태값과 함수들을 사용할 수 있습니다.
 * @author 현웅
 */
type MypageUploadedScreenStoreProps = {
  /** 업로드한 리서치 정보 */
  uploadedResearches: ResearchSchema[];
  /** 업로드한 투표 정보 */
  uploadedVotes: VoteSchema[];

  /** 리서치 전체 | 진행중 | 마감 필터 */
  researchFilter: Filter;
  setResearchFilter: (filter: Filter) => void;
  /** 투표 전체 | 진행중 | 마감 필터 */
  voteFilter: Filter;
  setVoteFilter: (filter: Filter) => void;

  /** 업로드한 리서치를 추가합니다 */
  addUploadedResearch: (newResearch: ResearchSchema) => void;
  /** 업로드한 투표를 추가합니다 */
  addUploadedVote: (newVote: VoteSchema) => void;

  /** 업로드한 리서치 정보를 업데이트합니다 */
  updateUploadedResearch: (updatedResearch: ResearchSchema) => void;
  /** 업로드한 투표 정보를 업데이트합니다 */
  updateUploadedVote: (updatedVote: VoteSchema) => void;

  /** 업로드한 리서치를 제거합니다 */
  removeUploadedResearch: (researchId: string) => void;
  /** 업로드한 투표를 제거합니다 */
  removeUploadedVote: (voteId: string) => void;

  clearState: () => void;
};

/**
 * 마이페이지 내가 올린 글 페이지에서 사용하는 상태값들입니다.
 * @author 현웅
 */
export const useMypageUploadedScreenStore =
  create<MypageUploadedScreenStoreProps>((set, get) => ({
    uploadedResearches: [],
    uploadedVotes: [],

    researchFilter: "ALL",
    setResearchFilter: (filter: Filter) => {
      set({ researchFilter: filter });
    },
    voteFilter: "ALL",
    setVoteFilter: (filter: Filter) => {
      set({ voteFilter: filter });
    },

    addUploadedResearch: (newResearch: ResearchSchema) => {
      set({
        uploadedResearches: addResearchListItem(
          newResearch,
          get().uploadedResearches,
        ),
      });
    },
    addUploadedVote: (newVote: VoteSchema) => {
      set({ uploadedVotes: addVoteListItem(newVote, get().uploadedVotes) });
    },

    updateUploadedResearch: (updatedResearch: ResearchSchema) => {
      set({
        uploadedResearches: updateResearchListItem(
          updatedResearch,
          get().uploadedResearches,
        ),
      });
    },
    updateUploadedVote: (updatedVote: VoteSchema) => {
      set({
        uploadedVotes: updateVoteListItem(updatedVote, get().uploadedVotes),
      });
    },

    removeUploadedResearch: (researchId: string) => {
      set({
        uploadedResearches: removeResearchListItem(
          researchId,
          get().uploadedResearches,
        ),
      });
    },
    removeUploadedVote: (voteId: string) => {
      set({ uploadedVotes: removeVoteListItem(voteId, get().uploadedVotes) });
    },

    clearState: () => {
      set({
        uploadedResearches: [],
        uploadedVotes: [],
        researchFilter: "ALL",
        voteFilter: "ALL",
      });
    },
  }));
