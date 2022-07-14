import create from "zustand";
import { VoteSchema, ParticipatedVoteInfo, BlankVote } from "src/Schema";
import { axiosGetNewerVotes, axiosGetOlderVotes } from "src/Axios";
import { useUserStore } from "../User/user.zustand";
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
  scrappedVotes: VoteSchema[];
  participatedVotes: VoteSchema[];
  uploadedVotes: VoteSchema[];
  setVotes: (votes: VoteSchema[]) => void;

  setVoteActivities: (voteActivities: {
    scrappedVotes: VoteSchema[];
    participatedVotes: VoteSchema[];
    uploadedVotes: VoteSchema[];
  }) => void;

  /** 기존에 가지고 있던 투표보다 최신의 투표를 모두 가져옵니다 */
  getNewerVotes: () => Promise<void>;

  /** 서버에 존재하는 모든 투표를 가져왔는지 여부 */
  noMoreOlderVotes: boolean;
  /** 기존에 가지고 있던 투표보다 더 예전의 투표를 가져옵니다 */
  getOlderVotes: () => Promise<void>;

  /**
   * 투표 상세 페이지를 들어가거나 (대)댓글을 달아서
   * 투표 정보가 업데이트 된 경우, 해당 정보를 전파합니다.
   * - (vote.detail.zustand) voteDetail 정보를 최신 투표 정보로 업데이트 합니다.
   * - (vote.zustand) votes, scrappedVotes, participatedVotes, uploadedVotes 의 해당 투표를 최신 투표 정보로 업데이트 합니다.
   */
  spreadVoteUpdated: (vote: VoteSchema) => void;

  /**
   * 투표 스크랩 후 해당 정보를 전파합니다.
   * - (vote.detail.zustand) voteDetail 정보를 최신 투표 정보로 업데이트 합니다.
   * - (vote.zustand) votes, participatedVotes 정보를 업데이트 하고
   *     scrappedVotes 에 투표 정보를 추가합니다.
   * - (user.zustand) userVote 의 scrappedVoteIds 에 투표 _id 를 추가합니다.
   */
  spreadVoteScrapped: (vote: VoteSchema) => void;

  /**
   * 투표 스크랩 취소 후 해당 정보를 전파합니다.
   * - (vote.detail.zustand) voteDetail 정보를 최신 투표 정보로 업데이트 합니다.
   * - (vote.zustand) votes, participatedVotes 정보를 업데이트 하고
   *     scrappedVotes 에서 투표 정보를 제거합니다.
   * - (user.zustand) userVote 의 scrappedVoteIds 에서 투표 _id 를 제거합니다.
   */
  spreadVoteUnscrapped: (vote: VoteSchema) => void;

  /**
   * 투표 참여 후 해당 정보를 전파합니다.
   * - (vote.detail.zustand) voteDetail 정보를 최신 투표 정보로 업데이트 합니다.
   * - (vote.zustand) votes, scrappedVotes 정보를 업데이트 하고
   *     participatedVotes 에 투표 정보를 추가합니다.
   * - (user.zustand) userVote 의 participatedVoteInfos 에 투표 참여 정보를 추가합니다.
   */
  spreadVoteParticipated: (param: {
    participationVoteInfo: ParticipatedVoteInfo;
    vote: VoteSchema;
  }) => void;

  /**
   * 투표를 업로드 후 해당 정보를 전파합니다.
   * - (vote.zustand) 업로드 이전의 최신 투표보다 더 최신의 투표를 가져와서 추가합니다.
   * - (vote.zustand) uploadedVotes 에 투표 정보를 추가합니다.
   * - (user.zustand) userVote 의 uploadedVoteIds 에 투표 _id 를 추가합니다.
   */
  spreadVoteUploaded: (param: { vote: VoteSchema }) => Promise<void>;

  /**
   * 투표 삭제 후 해당 정보를 전파합니다.
   * - (user.zustand) userVote 의 모든 property 에서 투표 정보를 제거합니다.
   * - (vote.zustand) uploadedVotes 에서 투표 정보를 제거합니다.
   */
  spreadVoteDeleted: (voteId: string) => void;

  clearState: () => void;

  logout: () => void;
};

export const useVoteStore = create<VoteStoreProps>((set, get) => ({
  votes: [BlankVote],
  scrappedVotes: [BlankVote],
  participatedVotes: [BlankVote],
  uploadedVotes: [BlankVote],
  setVotes: (votes: VoteSchema[]) => set({ votes }),

  setVoteActivities: (voteActivities: {
    scrappedVotes: VoteSchema[];
    participatedVotes: VoteSchema[];
    uploadedVotes: VoteSchema[];
  }) => {
    set({
      scrappedVotes: voteActivities.scrappedVotes,
      participatedVotes: voteActivities.participatedVotes,
      uploadedVotes: voteActivities.uploadedVotes,
    });
  },

  getNewerVotes: async () => {
    const newerVotes = await axiosGetNewerVotes(get().votes[0]._id);
    if (newerVotes !== null) {
      set({
        votes: addVoteListItem(newerVotes, get().votes),
      });
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
    set({
      votes: appendVoteListItem(olderVotes, get().votes),
    });
    return;
  },

  //* Spread
  //* 업데이트된 투표 정보 전파
  spreadVoteUpdated: (vote: VoteSchema) => {
    useVoteDetailScreenStore.getState().updateVoteDetail(vote);
    set({
      votes: updateVoteListItem(vote, get().votes),
      scrappedVotes: updateVoteListItem(vote, get().scrappedVotes),
      participatedVotes: updateVoteListItem(vote, get().participatedVotes),
      uploadedVotes: updateVoteListItem(vote, get().uploadedVotes),
    });
  },

  //* 투표 스크랩 정보 전파
  spreadVoteScrapped: (vote: VoteSchema) => {
    useVoteDetailScreenStore.getState().updateVoteDetail(vote);
    set({
      votes: updateVoteListItem(vote, get().votes),
      participatedVotes: updateVoteListItem(vote, get().participatedVotes),
      //* 자신이 올린 투표도 스크랩할 수 있는 경우
      // uploadedVotes: updateVoteListItem(vote, get().uploadedVotes),
      scrappedVotes: addVoteListItem(vote, get().scrappedVotes),
    });
    useUserStore.getState().addVoteIdToUserVote({
      changeTarget: "SCRAP",
      voteId: vote._id,
    });
  },

  //* 투표 스크랩 취소 정보 전파
  spreadVoteUnscrapped: (vote: VoteSchema) => {
    useVoteDetailScreenStore.getState().updateVoteDetail(vote);
    set({
      votes: updateVoteListItem(vote, get().votes),
      participatedVotes: updateVoteListItem(vote, get().participatedVotes),
      //* 자신이 올린 투표도 스크랩할 수 있는 경우
      // uploadedVotes: updateVoteListItem(vote, get().uploadedVotes),
      scrappedVotes: removeVoteListItem(vote._id, get().votes),
    });
    useUserStore.getState().removeVoteIdFromUserVote({
      voteId: vote._id,
      unscrap: true,
    });
  },

  //* 투표 참여 정보 전파
  spreadVoteParticipated: (param: {
    participationVoteInfo: ParticipatedVoteInfo;
    vote: VoteSchema;
  }) => {
    useVoteDetailScreenStore.getState().updateVoteDetail(param.vote);
    set({
      votes: updateVoteListItem(param.vote, get().votes),
      scrappedVotes: updateVoteListItem(param.vote, get().scrappedVotes),
      participatedVotes: addVoteListItem(param.vote, get().participatedVotes),
    });
    useUserStore
      .getState()
      .addParticipatedVoteInfo(param.participationVoteInfo);
  },

  //* 투표 업로드 정보 전파
  spreadVoteUploaded: async (param: { vote: VoteSchema }) => {
    await get().getNewerVotes();
    set({
      uploadedVotes: addVoteListItem(param.vote, get().uploadedVotes),
    });
  },

  //* 투표 삭제 정보 전파
  spreadVoteDeleted: (voteId: string) => {
    set({
      votes: removeVoteListItem(voteId, get().votes),
      uploadedVotes: removeVoteListItem(voteId, get().uploadedVotes),
    });
    useUserStore
      .getState()
      .removeVoteIdFromUserVote({ voteId, unscrap: false });
  },

  clearState: () => {
    set({
      votes: [BlankVote],
      noMoreOlderVotes: false,
    });
  },

  logout: () => {
    set({
      scrappedVotes: [BlankVote],
      participatedVotes: [BlankVote],
      uploadedVotes: [BlankVote],
    });
  },
}));
