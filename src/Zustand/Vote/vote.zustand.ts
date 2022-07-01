import create from "zustand";
import { VoteSchema, ParticipatedVoteInfo, BlankVote } from "src/Schema";
import { axiosGetNewerVotes, axiosGetOlderVotes } from "src/Axios";
import { useUserStore } from "../User/user.zustand";
import { useMypageStore } from "../Mypage/mypage.zustand";
import { useVoteDetailScreenStore } from "./vote.detail.zustand";
import {
  addVoteListItem,
  appendVoteListItem,
  updateVoteListItem,
  removeVoteListItem,
  showBlackToast,
} from "src/Util";

type VoteStoreProps = {
  votes: VoteSchema[];
  setVotes: (votes: VoteSchema[]) => void;

  /** 기존에 가지고 있던 투표보다 최신의 투표를 모두 가져옵니다 */
  getNewerVotes: () => Promise<void>;

  /** 서버에 존재하는 모든 투표를 가져왔는지 여부 */
  noMoreOlderVotes: boolean;
  /** 기존에 가지고 있던 투표보다 더 예전의 투표를 가져옵니다 */
  getOlderVotes: () => Promise<void>;

  /** 새로운 투표를 투표 리스트 맨 앞에 추가합니다. */
  addVoteListItem: (newVote: VoteSchema | VoteSchema[]) => void;

  /** 인자로 받은 투표(들)를 투표 리스트 맨 뒤에 추가합니다. */
  appendVoteListItem: (newVote: VoteSchema | VoteSchema[]) => void;

  /** 투표 리스트에 있는 투표 중 하나를 업데이트합니다. */
  updateVoteListItem: (vote: VoteSchema) => void;

  /** 투표 리스트에 있는 투표 중 하나를 삭제합니다. */
  removeVoteListItem: (voteId: string) => void;

  /**
   * 투표 상세 페이지를 들어가거나 (대)댓글을 달아서
   * 투표 정보가 업데이트 된 경우, 해당 정보를 전파합니다.
   * - (vote.detail.zustand) voteDetail 정보를 최신 투표 정보로 업데이트 합니다.
   * - (vote.zustand) votes 의 해당 투표를 최신 투표 정보로 업데이트 합니다.
   * - (mypage.zustand) scrappedVotes 에 투표 정보를 추가합니다.
   */
  spreadVoteUpdated: (vote: VoteSchema) => void;

  /**
   * 투표 스크랩 후 해당 정보를 전파합니다.
   * - (vote.detail.zustand) voteDetail 정보를 최신 투표 정보로 업데이트 합니다.
   * - (vote.zustand) votes 의 해당 투표를 최신 투표 정보로 업데이트 합니다.
   * - (user.zustand) userVote 의 scrappedVoteIds 에 투표 _id 를 추가합니다.
   * - (mypage.zustand) scrappedVotes 에 투표 정보를 추가합니다.
   */
  spreadVoteScrapped: (vote: VoteSchema) => void;

  /**
   * 투표 스크랩 취소 후 해당 정보를 전파합니다.
   * - (vote.detail.zustand) voteDetail 정보를 최신 투표 정보로 업데이트 합니다.
   * - (vote.zustand) votes 에 해당 투표가 있는 경우, 최신 투표 정보로 업데이트 합니다.
   * - (user.zustand) userVote 의 scrappedVoteIds 에서 투표 _id 를 제거합니다.
   * - (mypage.zustand) scrappedVotes 에서 투표 정보를 제거합니다.
   */
  spreadVoteUnscrapped: (vote: VoteSchema) => void;

  /**
   * 투표 참여 후 해당 정보를 전파합니다.
   * - (vote.detail.zustand) voteDetail 정보를 최신 투표 정보로 업데이트 합니다.
   * - (vote.zustand) votes 에 해당 투표가 있는 경우, 최신 투표 정보로 업데이트 합니다.
   * - (user.zustand) userVote 의 participatedVoteInfos 에 투표 정보를 추가하고,
   *   userCredit 에 크레딧 변동 사항과 크레딧 사용내역 _id 를 추가합니다.
   * - (mypage.zustand) participatedVotes 에 투표 정보를 추가하고,
   *   creditHistories 에 크레딧 사용내역을 추가합니다.
   */
  spreadVoteParticipated: (param: {
    participationVoteInfo: ParticipatedVoteInfo;
    vote: VoteSchema;
  }) => void;

  /**
   * 투표를 업로드 후 해당 정보를 전파합니다.
   * - (vote.zustand) 업로드 이전의 최신 투표보다 더 최신의 투표를 가져와서 추가합니다.
   * - (user.zustand) userVote 의 uploadedVoteIds 에 투표 _id 를 추가합니다.
   * - (mypage.zustand) uploadedVotes 에 투표 정보를 추가합니다.
   */
  spreadVoteUploaded: (param: { vote: VoteSchema }) => Promise<void>;

  /**
   * 투표 삭제 후, 혹은 상세 페이지 진입 후 투표가 삭제된 경우 해당 정보를 전파합니다.
   * - (user.zustand) userVote 의 모든 property 에서 투표 정보를 제거합니다.
   * - (mypage.zustand) 모든 투표 관련 property 에서 투표 정보를 제거합니다.
   * - (vote.zustand) votes 에서 투표 정보를 제거합니다.
   */
  spreadVoteDeleted: (voteId: string) => void;

  clearState: () => void;
};

export const useVoteStore = create<VoteStoreProps>((set, get) => ({
  votes: [BlankVote],
  setVotes: (votes: VoteSchema[]) => set({ votes }),

  getNewerVotes: async () => {
    const newerVotes = await axiosGetNewerVotes(get().votes[0]._id);
    if (newerVotes !== null) {
      get().addVoteListItem(newerVotes);
    }
    return;
  },

  noMoreOlderVotes: false,

  getOlderVotes: async () => {
    //* 이미 모든 투표를 가져온 상태라면 토스트 메세지를 띄우고 반환합니다.
    if (get().noMoreOlderVotes) {
      showBlackToast({ text1: "더 가져올 투표가 없습니다" });
      return;
    }

    const olderVotes = await axiosGetOlderVotes(
      get().votes[get().votes.length - 1]._id,
    );

    //* 에러가 난 경우 반환합니다.
    if (olderVotes === null) return;

    //* 가져온 투표 개수가 0개인 경우, noMoreOlderVotes 플래그를 true 로 설정합니다.
    if (olderVotes.length === 0) {
      set({ noMoreOlderVotes: true });
      return;
    }

    //* 가져온 투표가 있는 경우, 리스트 뒤에 추가합니다.
    get().appendVoteListItem(olderVotes);
    return;
  },

  addVoteListItem: (newVote: VoteSchema | VoteSchema[]) => {
    set({ votes: addVoteListItem(newVote, get().votes) });
  },

  appendVoteListItem: (newVote: VoteSchema | VoteSchema[]) => {
    set({ votes: appendVoteListItem(newVote, get().votes) });
  },

  updateVoteListItem: (updatedVote: VoteSchema) => {
    set({ votes: updateVoteListItem(updatedVote, get().votes) });
  },

  removeVoteListItem: (voteId: string) => {
    set({ votes: removeVoteListItem(voteId, get().votes) });
  },

  //* Spread
  spreadVoteUpdated: (vote: VoteSchema) => {
    useVoteDetailScreenStore.getState().updateVoteDetail(vote);
    get().updateVoteListItem(vote);
    useMypageStore.getState().updateVote(vote);
  },

  spreadVoteScrapped: (vote: VoteSchema) => {
    useVoteDetailScreenStore.getState().updateVoteDetail(vote);
    get().updateVoteListItem(vote);
    useUserStore.getState().addVoteIdToUserVote({
      changeTarget: "SCRAP",
      voteId: vote._id,
    });
    useMypageStore.getState().addVote({ changeTarget: "SCRAP", vote });
  },

  spreadVoteUnscrapped: (vote: VoteSchema) => {
    useVoteDetailScreenStore.getState().updateVoteDetail(vote);
    get().updateVoteListItem(vote);
    useUserStore.getState().removeVoteIdFromUserVote({
      voteId: vote._id,
      unscrap: true,
    });
    useMypageStore.getState().deleteVote({ voteId: vote._id, unscrap: true });
  },

  spreadVoteParticipated: (param: {
    participationVoteInfo: ParticipatedVoteInfo;
    vote: VoteSchema;
  }) => {
    useVoteDetailScreenStore.getState().updateVoteDetail(param.vote);
    get().updateVoteListItem(param.vote);
    useUserStore
      .getState()
      .addParticipatedVoteInfo(param.participationVoteInfo);
    useMypageStore
      .getState()
      .addVote({ changeTarget: "PARTICIPATE", vote: param.vote });
  },

  spreadVoteUploaded: async (param: { vote: VoteSchema }) => {
    await get().getNewerVotes();
    useUserStore.getState().addVoteIdToUserVote({
      changeTarget: "UPLOAD",
      voteId: param.vote._id,
    });
    useMypageStore
      .getState()
      .addVote({ changeTarget: "UPLOAD", vote: param.vote });
  },

  spreadVoteDeleted: (voteId: string) => {
    useUserStore
      .getState()
      .removeVoteIdFromUserVote({ voteId, unscrap: false });
    useMypageStore.getState().deleteVote({ voteId, unscrap: false });
  },

  clearState: () => {
    set({
      votes: [BlankVote],
      noMoreOlderVotes: false,
    });
  },
}));
