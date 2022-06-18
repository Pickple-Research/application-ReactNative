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

type VoteDetailScreenStoreProps = {
  /** 투표 정보 */
  voteDetail: VoteSchema;
  setVoteDetail: (voteDetail: VoteSchema) => void;

  /** 투표 (대)댓글 정보 */
  voteDetailComments: VoteCommentSchema[];
  /** 투표 (대)댓글 정보를 가져옵니다 */
  getVoteDetailComments: (votdId: string) => Promise<void>;

  /** 사용자가 선택한 선택지 인덱스(들) */
  selectedOptionIndexes: number[];
  /** 선택지 터치 시 호출 함수 */
  onPressOption: (index: number) => void;

  /** 대댓글 대상 댓글 _id */
  targetCommentId: string;
  setTargetCommentId: (id: string) => void;
  /** 대댓글 대상 댓글 작성자 닉네임 */
  targetCommentAuthorNickname: string;
  setTargetCommentAuthorNickname: (nickname: string) => void;

  /** (대)댓글 입력값 */
  commentInput: string;
  setCommentInput: (input: string) => void;

  /** 새로운 댓글을 로컬 데이터에 반영 */
  addComment: (newComment: VoteCommentSchema) => void;
  /** 새로운 대댓글을 로컬 데이터에 반영 */
  addReply: (newReply: VoteReplySchema) => void;

  /** 투표 마감 모달 표시 여부 */
  voteCloseModalVisible: boolean;
  setVoteCloseModalVisible: (status: boolean) => void;

  /** 투표 삭제 모달 표시 여부 */
  voteDeleteModalVisible: boolean;
  setVoteDeleteModalVisible: (status: boolean) => void;

  /** 투표 신고 모달 표시 여부 */
  voteReportModalVisible: boolean;
  setVoteReportModalVisible: (status: boolean) => void;

  /** 투표 참여 중 여부 */
  loading: boolean;
  /** 투표 마감 중 여부 */
  closing: boolean;
  /** 댓글 로드 중 여부 */
  commentLoading: boolean;
  /** 댓글 업로드 중 여부 */
  commentUploading: boolean;

  clearInfo: () => void;

  /** 투표를 마감합니다 */
  closeVote: () => Promise<void>;

  /** 투표를 삭제합니다 */
  deleteVote: () => Promise<void>;

  /** 투표를 신고합니다 */
  reportVote: () => Promise<void>;

  /** 새로운 댓글을 업로드합니다 */
  uploadComment: () => Promise<void>;

  /** 새로운 대댓글을 업로드합니다 */
  uploadReply: () => Promise<void>;

  /**
   * 투표 참여요청을 보냅니다.
   * 응답이 성공적인 경우, 투표 참여 정보와 최신 투표 정보를 업데이트합니다.
   * @author 현웅
   */
  participateVote: () => Promise<void>;
};

/**
 * 투표 상세 정보 페이지에서 사용되는 상태값입니다.
 * @author 현웅
 */
export const useVoteDetailScreenStore = create<VoteDetailScreenStoreProps>(
  (set, get) => ({
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

    targetCommentId: "",
    setTargetCommentId: (id: string) => {
      set({ targetCommentId: id });
    },

    targetCommentAuthorNickname: "",
    setTargetCommentAuthorNickname: (nickname: string) => {
      set({ targetCommentAuthorNickname: nickname });
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

    voteCloseModalVisible: false,
    setVoteCloseModalVisible: (status: boolean) => {
      set({ voteCloseModalVisible: status });
    },

    voteDeleteModalVisible: false,
    setVoteDeleteModalVisible: (status: boolean) => {
      set({ voteDeleteModalVisible: status });
    },

    voteReportModalVisible: false,
    setVoteReportModalVisible: (status: boolean) => {
      set({ voteReportModalVisible: status });
    },

    loading: false,
    closing: false,
    commentLoading: false,
    commentUploading: false,

    clearInfo: () => {
      set({
        voteDetail: BlankVote,
        voteDetailComments: [],
        selectedOptionIndexes: [],
        targetCommentId: "",
        targetCommentAuthorNickname: "",
        commentInput: "",
        voteCloseModalVisible: false,
        voteDeleteModalVisible: false,
        voteReportModalVisible: false,
        loading: false,
        closing: false,
        commentLoading: false,
        commentUploading: false,
      });
    },

    closeVote: async () => {
      set({ voteCloseModalVisible: false, closing: true });
      // const updatedVote = await axiosCloseVote(get().voteDetail._id);
      // if(updatedVote !== null){
      //   set({voteDetail:updatedVote});
      // }

      // TODO: 내가 업로드한 투표 정보를 변경하는 로직 필요
      // useMypageStore.getState(). ...
      // get().setVoteDetail(updatedVote);
      // useVoteStore.getState().updateVoteListItem(updatedVote);
      set({ closing: false });

      return;
    },

    deleteVote: async () => {
      return;
    },

    reportVote: async () => {
      return;
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
    uploadReply: async () => {
      if (get().commentInput.length === 0) return;

      set({ commentUploading: true });

      const result = await axiosUploadVoteReply({
        voteId: get().voteDetail._id,
        commentId: get().targetCommentId,
        content: get().commentInput,
      });
      if (result !== null) {
        get().setVoteDetail(result.updatedVote);
        get().addReply(result.newReply);
        set({
          commentInput: "",
          targetCommentId: "",
          targetCommentAuthorNickname: "",
        });
      }

      set({ commentUploading: false });
      return;
    },
  }),
);
