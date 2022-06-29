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
 * 마이페이지 - 참여한 리서치 및 투표 페이지에서 사용되는 상태값과 함수들을 사용할 수 있습니다.
 * @author 현웅
 */
type MypageParticipatedScreenStoreProps = {
  /** 참여한 리서치 정보 */
  participatedResearches: ResearchSchema[];
  /** 참여한 투표 정보 */
  participatedVotes: VoteSchema[];

  /** 리서치 전체 | 진행중 | 마감 필터 */
  researchFilter: Filter;
  setResearchFilter: (filter: Filter) => void;
  /** 투표 전체 | 진행중 | 마감 필터 */
  voteFilter: Filter;
  setVoteFilter: (filter: Filter) => void;

  /** 참여한 리서치를 추가합니다 */
  addParticipatedResearch: (newResearch: ResearchSchema) => void;
  /** 참여한 투표를 추가합니다 */
  addParticipatedVote: (newVote: VoteSchema) => void;

  /** 참여한 리서치 정보를 업데이트합니다 */
  updateParticipatedResearch: (updatedResearch: ResearchSchema) => void;
  /** 참여한 투표 정보를 업데이트합니다 */
  updateParticipatedVote: (updatedVote: VoteSchema) => void;

  /** 참여한 리서치를 삭제합니다 (상세 페이지 입장 후 서버 요청시 삭제된 경우) */
  removeParticipatedResearch: (researchId: string) => void;
  /** 참여한 투표를 삭제합니다 (상세 페이지 입장 후 서버 요청시 삭제된 경우) */
  removeParticipatedVote: (voteId: string) => void;

  clearState: () => void;
};

/**
 * 마이페이지 내가 참여한 리서치, 투표한 글 페이지에서 사용하는 상태값들입니다.
 * @author 현웅
 */
export const useMypageParticipatedScreenStore =
  create<MypageParticipatedScreenStoreProps>((set, get) => ({
    participatedResearches: [],
    participatedVotes: [],

    researchFilter: "ALL",
    setResearchFilter: (filter: Filter) => {
      set({ researchFilter: filter });
    },
    voteFilter: "ALL",
    setVoteFilter: (filter: Filter) => {
      set({ voteFilter: filter });
    },

    addParticipatedResearch: (newResearch: ResearchSchema) => {
      set({
        participatedResearches: addResearchListItem(
          newResearch,
          get().participatedResearches,
        ),
      });
    },
    addParticipatedVote: (newVote: VoteSchema) => {
      set({
        participatedVotes: addVoteListItem(newVote, get().participatedVotes),
      });
    },

    updateParticipatedResearch: (updatedResearch: ResearchSchema) => {
      set({
        participatedResearches: updateResearchListItem(
          updatedResearch,
          get().participatedResearches,
        ),
      });
    },
    updateParticipatedVote: (updatedVote: VoteSchema) => {
      set({
        participatedVotes: updateVoteListItem(
          updatedVote,
          get().participatedVotes,
        ),
      });
    },

    removeParticipatedResearch: (researchId: string) => {
      set({
        participatedResearches: removeResearchListItem(
          researchId,
          get().participatedResearches,
        ),
      });
    },
    removeParticipatedVote: (voteId: string) => {
      set({
        participatedVotes: removeVoteListItem(voteId, get().participatedVotes),
      });
    },

    clearState: () => {
      set({
        participatedResearches: [],
        participatedVotes: [],
        researchFilter: "ALL",
        voteFilter: "ALL",
      });
    },
  }));
