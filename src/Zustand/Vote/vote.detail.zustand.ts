import create from "zustand";
import { useVoteStore } from "./vote.zustand";
import {
  VoteSchema,
  VoteCommentSchema,
  VoteReplySchema,
  BlankVote,
} from "src/Schema";
import {
  axiosGetVoteComments,
  axiosReportVote,
  axiosScrapVote,
  axiosUnscrapVote,
  axiosUploadVoteComment,
  axiosUploadVoteReply,
  axiosCloseVote,
  axiosDeleteVote,
  axiosParticipateVote,
} from "src/Axios";
import { VoteReportOptions } from "src/Constant";

type VoteDetailScreenStoreProps = {
  /** 투표 정보 */
  voteDetail: VoteSchema;
  setVoteDetail: (voteDetail: VoteSchema) => void;
  updateVoteDetail: (voteDetail: VoteSchema) => void;

  /** 투표 신고 옵션들 */
  voteReportOptions: string[];
  /** 선택된 투표 신고 옵션 인덱스들 */
  selectedReportOptionIndexes: number[];
  /** 투표 신고 옵션 터치시 실행 함수 */
  onPressReportOption: (index: number) => void;

  /** 투표 신고 옵션 중 '기타' 항목 입력값 */
  reportEtcOptionInput: string;
  setReportEtcOptionInput: (input: string) => void;

  /** 사용자가 선택한 선택지 인덱스(들) */
  selectedOptionIndexes: number[];
  /** 선택지 터치 시 호출 함수 */
  onPressOption: (index: number) => void;

  /** 투표 (대)댓글 정보 */
  voteDetailComments: VoteCommentSchema[];
  /** 투표 (대)댓글 정보를 가져옵니다 */
  getVoteDetailComments: (votdId: string) => Promise<void>;

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

  /** 투표 신고 모달 표시 여부 */
  voteReportModalVisible: boolean;
  setVoteReportModalVisible: (status: boolean) => void;

  /** 투표 삭제 모달 표시 여부 */
  voteDeleteModalVisible: boolean;
  setVoteDeleteModalVisible: (status: boolean) => void;

  /** 투표 마감 모달 표시 여부 */
  voteCloseModalVisible: boolean;
  setVoteCloseModalVisible: (status: boolean) => void;

  /** 투표 스크랩 취소 모달 표시 여부 */
  voteUnscrapModalVisible: boolean;
  setVoteUnscrapModalVisible: (status: boolean) => void;

  /** 댓글 로드 중 여부 */
  commentLoading: boolean;
  /** 투표 신고 중 여부 */
  reporting: boolean;
  /** 스크랩 처리 중 여부 */
  scrapping: boolean;
  /** 투표 참여 중 여부 */
  loading: boolean;
  /** 댓글 업로드 중 여부 */
  commentUploading: boolean;
  /** 투표 삭제 중 여부 */
  deleting: boolean;
  /** 투표 마감 중 여부 */
  closing: boolean;

  clearInfo: () => void;

  /** 투표를 신고합니다 */
  reportVote: () => Promise<void>;

  /** 투표를 스크랩합니다 */
  scrapVote: () => Promise<void>;

  /** 투표 스크랩을 취소합니다 */
  unscrapVote: () => Promise<boolean>;

  /**
   * 투표 참여요청을 보냅니다.
   * 응답이 성공적인 경우, 투표 참여 정보와 최신 투표 정보를 업데이트합니다.
   * @author 현웅
   */
  participateVote: () => Promise<void>;

  /** 새로운 댓글을 업로드합니다 */
  uploadComment: () => Promise<void>;

  /** 새로운 대댓글을 업로드합니다 */
  uploadReply: () => Promise<void>;

  /**
   * 투표를 삭제합니다
   * @return 성공시 true, 실패시 false
   */
  deleteVote: () => Promise<boolean>;

  /** 투표를 마감합니다 */
  closeVote: () => Promise<void>;
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
    updateVoteDetail: async (voteDetail: VoteSchema) => {
      if (get().voteDetail._id === "") return;
      set({ voteDetail });
    },

    /** 투표 신고 옵션들 */
    voteReportOptions: VoteReportOptions,
    /** 선택된 투표 신고 옵션 인덱스들 */
    selectedReportOptionIndexes: [],
    /** 투표 신고 옵션 터치시 실행 함수 */
    onPressReportOption: (index: number) => {
      set({ selectedReportOptionIndexes: [index] });
    },

    /** 투표 신고 옵션 중 '기타' 항목 입력값 */
    reportEtcOptionInput: "",
    setReportEtcOptionInput: (input: string) => {
      set({ reportEtcOptionInput: input });
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

    voteDetailComments: [],
    getVoteDetailComments: async (voteId: string) => {
      set({ commentLoading: true });
      const comments = await axiosGetVoteComments(voteId);
      if (comments !== null) set({ voteDetailComments: comments });
      set({ commentLoading: false });
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

    voteUnscrapModalVisible: false,
    setVoteUnscrapModalVisible: (status: boolean) => {
      set({ voteUnscrapModalVisible: status });
    },

    commentLoading: false,
    reporting: false,
    scrapping: false,
    loading: false,
    commentUploading: false,
    deleting: false,
    closing: false,

    clearInfo: () => {
      set({
        voteDetail: BlankVote,
        selectedReportOptionIndexes: [],
        reportEtcOptionInput: "",
        selectedOptionIndexes: [],
        voteDetailComments: [],
        targetCommentId: "",
        targetCommentAuthorNickname: "",
        commentInput: "",
        voteReportModalVisible: false,
        voteDeleteModalVisible: false,
        voteCloseModalVisible: false,
        voteUnscrapModalVisible: false,
        commentLoading: false,
        reporting: false,
        scrapping: false,
        loading: false,
        commentUploading: false,
        deleting: false,
        closing: false,
      });
    },

    reportVote: async () => {
      //* 신고 사유 선택이 되지 않았거나 이미 신고 중인 경우
      //* 곧바로 return 합니다.
      if (get().selectedReportOptionIndexes.length === 0) {
        //TODO: 토스트 메세지
        return;
      }
      if (get().reporting) return;

      set({ reporting: true });

      const result = await axiosReportVote({
        voteId: get().voteDetail._id,
        //* 신고 사유로 '기타'를 선택한 경우, 사용자가 입력한 내용을 사용합니다.
        reportContent: get().selectedReportOptionIndexes.includes(
          VoteReportOptions.length - 1,
        )
          ? `기타: ${get().reportEtcOptionInput}`
          : VoteReportOptions[get().selectedReportOptionIndexes[0]],
      });
      //* 신고가 성공적으로 이뤄진 경우,
      //* 신고 모달을 닫고 관련 상태값을 모두 초기화합니다.
      if (result) {
        set({
          voteReportModalVisible: false,
          selectedReportOptionIndexes: [],
          reportEtcOptionInput: "",
        });
      }

      set({ reporting: false });
      return;
    },

    scrapVote: async () => {
      if (get().scrapping) return;
      set({ scrapping: true });
      const updatedVote = await axiosScrapVote(get().voteDetail._id);
      if (updatedVote !== null) {
        useVoteStore.getState().spreadVoteScrapped(updatedVote);
      }
      set({ scrapping: false });
    },

    unscrapVote: async () => {
      if (get().scrapping) return false;
      set({ scrapping: true });
      const updatedVote = await axiosUnscrapVote(get().voteDetail._id);
      set({ scrapping: false });
      if (updatedVote === null) {
        return false;
      }
      useVoteStore.getState().spreadVoteUnscrapped(updatedVote);
      return true;
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
        useVoteStore.getState().spreadVoteParticipated({
          participationVoteInfo: result.participatedVoteInfo,
          vote: result.updatedVote,
        });
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
        useVoteStore.getState().spreadVoteUpdated(result.updatedVote);
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
        useVoteStore.getState().spreadVoteUpdated(result.updatedVote);
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

    deleteVote: async () => {
      set({ deleting: true });
      const result = await axiosDeleteVote(get().voteDetail._id);
      if (result) {
      }
      set({ deleting: false });
      return result;
    },

    closeVote: async () => {
      set({ voteCloseModalVisible: false, closing: true });

      const updatedVote = await axiosCloseVote(get().voteDetail._id);
      if (updatedVote !== null) {
      }

      set({ closing: false });
      return;
    },
  }),
);
