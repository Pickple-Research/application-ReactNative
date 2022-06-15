import create from "zustand";
import { useUserStore } from "../User/user.zustand";
import { useVoteStore } from "./vote.zustand";
import {
  VoteSchema,
  VoteCommentSchema,
  VoteReplySchema,
  BlankVote,
} from "src/Schema";
import {
  axiosGetVoteComments,
  axiosParticipateVote,
  axiosUploadVoteComment,
  axiosUploadVoteReply,
} from "src/Axios";

type VoteDetailStoreProps = {
  /** 투표 정보 */
  voteDetail: VoteSchema;
  setVoteDetail: (voteDetail: VoteSchema) => void;

  /** 투표 (대)댓글 정보 */
  voteDetailComments: VoteCommentSchema[];
  /** 투표 (대)댓글 정보를 가져오는 함수 */
  getVoteDetailComments: (votdId: string) => Promise<void>;

  /** 사용자가 선택한 선택지 인덱스(들) */
  selectedOptionIndexes: number[];
  /** 선택지 터치 시 호출 함수 */
  onPressOption: (index: number) => void;

  /** (대)댓글 입력값 */
  commentInput: string;
  setCommentInput: (input: string) => void;

  /** 새로운 댓글을 로컬 데이터에 반영 */
  addComment: (newComment: VoteCommentSchema) => void;
  /** 새로운 대댓글을 로컬 데이터에 반영 */
  addReply: (newReply: VoteReplySchema) => void;

  /** 리서치 참여 중 */
  loading: boolean;
  /** 댓글 로드 중 */
  commentLoading: boolean;
  /** 댓글 업로드 중 */
  commentUploading: boolean;

  clearInfo: () => void;

  /**
   * 투표 참여요청을 보냅니다.
   * 응답이 성공적인 경우, 투표 참여 정보와 최신 투표 정보를 업데이트합니다.
   * @author 현웅
   */
  participateVote: () => Promise<void>;

  /** 새로운 댓글 업로드 */
  uploadComment: () => Promise<void>;

  /** 새로운 대댓글 업로드 */
  uploadReply: (commentId: string) => Promise<void>;
};

/**
 * 투표 상세 정보 페이지에서 사용되는 상태값입니다.
 * @author 현웅
 */
export const useVoteDetailStore = create<VoteDetailStoreProps>((set, get) => ({
  voteDetail: BlankVote,
  setVoteDetail: async (voteDetail: VoteSchema) => {
    set({ voteDetail });
  },

  voteDetailComments: [],
  getVoteDetailComments: async (voteId: string) => {
    set({ commentLoading: true });
    const comments = await axiosGetVoteComments(voteId);
    if (comments !== null) set({ voteDetailComments: comments });
    set({ commentLoading: false });
  },

  selectedOptionIndexes: [],
  onPressOption: (index: number) => {
    //* 중복 선택 허용 투표가 아닌 경우
    if (!get().voteDetail.allowMultiChoice) {
      set({ selectedOptionIndexes: [index] });
      return;
    }

    //* 중복 선택 허용 투표인 경우
    if (get().selectedOptionIndexes.includes(index)) {
      set({
        selectedOptionIndexes: get().selectedOptionIndexes.filter(
          i => i !== index,
        ),
      });
      return;
    }

    set({ selectedOptionIndexes: [...get().selectedOptionIndexes, index] });
  },

  commentInput: "",
  setCommentInput: (input: string) => {
    set({ commentInput: input });
  },

  addComment: (newComment: VoteCommentSchema) => {
    set({ voteDetailComments: [...get().voteDetailComments, newComment] });
  },

  addReply: (newReply: VoteReplySchema) => {
    const updatedComments = [...get().voteDetailComments];
    const commentIndex = updatedComments.findIndex(
      comment => comment._id === newReply.commentId,
    );
    if (commentIndex !== -1) {
      updatedComments[commentIndex].replies.push(newReply);
      set({ voteDetailComments: updatedComments });
    }
  },

  loading: false,
  commentLoading: false,
  commentUploading: false,

  clearInfo: () => {
    set({
      voteDetail: BlankVote,
      voteDetailComments: [],
      selectedOptionIndexes: [],
      commentInput: "",
      loading: false,
      commentLoading: false,
      commentUploading: false,
    });
  },

  participateVote: async () => {
    set({ loading: true });
    //* 서버에 참여 요청을 보냅니다
    const result = await axiosParticipateVote(
      get().voteDetail._id,
      get().selectedOptionIndexes,
    );
    //* 응답이 성공적인 경우, 유저의 투표 참여 정보와 투표 상세 정보를 업데이트합니다
    if (result !== null) {
      useUserStore
        .getState()
        .addParticipatedVoteInfo(result.participatedVoteInfo);
      get().setVoteDetail(result.updatedVote);
      useVoteStore.getState().updateVoteListItem(result.updatedVote);
    }
    set({ loading: false });
  },

  /**
   * 댓글을 업로드합니다.
   * 응답이 성공적인 경우 투표 상태와 새로 생성된 댓글을 업데이트하고
   * 댓글 입력란을 초기화합니다.
   */
  uploadComment: async () => {
    if (get().commentInput.length === 0) return;

    set({ commentUploading: true });

    const result = await axiosUploadVoteComment({
      voteId: get().voteDetail._id,
      content: get().commentInput,
    });
    if (result !== null) {
      get().setVoteDetail(result.updatedVote);
      get().addComment(result.newComment);
      set({ commentInput: "" });
    }

    set({ commentUploading: false });
    return;
  },

  /**
   * 대댓글을 업로드합니다.
   * 응답이 성공적인 경우 투표 상태와 새로 생성된 대댓글을 업데이트하고
   * 댓글 입력란을 초기화합니다.
   */
  uploadReply: async (commentId: string) => {
    if (get().commentInput.length === 0) return;

    set({ commentUploading: true });

    const result = await axiosUploadVoteReply({
      voteId: get().voteDetail._id,
      commentId,
      content: get().commentInput,
    });
    if (result !== null) {
      get().setVoteDetail(result.updatedVote);
      get().addReply(result.newReply);
      set({ commentInput: "" });
    }

    set({ commentUploading: false });
    return;
  },
}));
