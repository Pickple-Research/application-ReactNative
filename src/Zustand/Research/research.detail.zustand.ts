import create from "zustand";
import {
  ResearchSchema,
  ResearchCommentSchema,
  ResearchReplySchema,
  BlankResearch,
} from "src/Schema";
import {
  axiosGetResearchComments,
  axiosUploadResearchComment,
  axiosUploadResearchReply,
} from "src/Axios";

type ResearchDetailScreenStoreProps = {
  /** 화면에 보여지는 리서치 정보 */
  researchDetail: ResearchSchema;
  setResearchDetail: (researchDetail: ResearchSchema) => void;

  /** 리서치 (대)댓글 정보 */
  researchDetailComments: ResearchCommentSchema[];
  /** 리서치 (대)댓글 정보를 가져옵니다 */
  getResearchDetailComments: (researchId: string) => Promise<void>;

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
  addComment: (newComment: ResearchCommentSchema) => void;
  /** 새로운 대댓글을 로컬 데이터에 반영 */
  addReply: (newReply: ResearchReplySchema) => void;

  /** 리서치 삭제 모달 표시 여부 */
  researchDeleteModalVisible: boolean;
  setResearchDeleteModalVisible: (status: boolean) => void;

  /** 리서치 끌올 모달 표시 여부 */
  researchPullupModalVisible: boolean;
  setResearchPullupModalVisible: (status: boolean) => void;

  /** 리서치 신고 모달 표시 여부 */
  researchReportModalVisible: boolean;
  setResearchReportModalVisible: (status: boolean) => void;

  /** 댓글 로드 중 여부 */
  commentLoading: boolean;
  /** 댓글 업로드 중 여부 */
  commentUploading: boolean;

  clearState: () => void;

  /**
   * 리서치를 삭제합니다.
   * 응답이 성공적인 경우, 리서치 정보를 업데이트 합니다.
   * @author 현웅
   */
  deleteResearch: () => Promise<void>;

  /**
   * 리서치를 끌올합니다.
   * 응답이 성공적인 경우, 리서치 정보를 업데이트 합니다.
   * @author 현웅
   */
  pullupResearch: () => Promise<void>;

  /** 리서치를 신고합니다. */
  reportReserach: () => Promise<void>;

  /** 새로운 댓글을 업로드합니다 */
  uploadComment: () => Promise<void>;

  /** 새로운 대댓글을 업로드합니다 */
  uploadReply: () => Promise<void>;
};

/**
 * 리서치 상세 페이지에서 사용하는 상태값들을 정의합니다.
 * @author 현웅
 */
export const useResearchDetailScreenStore =
  create<ResearchDetailScreenStoreProps>((set, get) => ({
    researchDetail: BlankResearch,
    setResearchDetail: (researchDetail: ResearchSchema) => {
      set({ researchDetail });
    },

    researchDetailComments: [],
    getResearchDetailComments: async (researchId: string) => {
      set({ commentLoading: true });
      const comments = await axiosGetResearchComments(researchId);
      if (comments !== null) set({ researchDetailComments: comments });
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
    addComment: (newComment: ResearchCommentSchema) => {
      set({
        researchDetailComments: [...get().researchDetailComments, newComment],
      });
    },

    addReply: (newReply: ResearchReplySchema) => {
      const updatedComments = [...get().researchDetailComments];
      const commentIndex = updatedComments.findIndex(
        comment => comment._id === newReply.commentId,
      );
      if (commentIndex !== -1) {
        updatedComments[commentIndex].replies.push(newReply);
        set({ researchDetailComments: updatedComments });
      }
    },

    researchDeleteModalVisible: false,
    setResearchDeleteModalVisible: (status: boolean) => {
      set({ researchDeleteModalVisible: status });
    },

    researchPullupModalVisible: false,
    setResearchPullupModalVisible: (status: boolean) => {
      set({ researchPullupModalVisible: status });
    },

    researchReportModalVisible: false,
    setResearchReportModalVisible: (status: boolean) => {
      set({ researchReportModalVisible: status });
    },

    commentLoading: false,
    commentUploading: false,

    clearState: () => {
      set({
        researchDetail: BlankResearch,
        researchDetailComments: [],
        targetCommentId: "",
        targetCommentAuthorNickname: "",
        commentInput: "",
        researchDeleteModalVisible: false,
        researchPullupModalVisible: false,
        researchReportModalVisible: false,
        commentLoading: false,
        commentUploading: false,
      });
    },

    deleteResearch: async () => {
      return;
    },

    pullupResearch: async () => {
      return;
    },

    reportReserach: async () => {
      return;
    },

    /**
     * 댓글을 업로드합니다.
     * 응답이 성공적인 경우 투표 상태와 새로 생성된 댓글을 업데이트하고
     * 댓글 입력란을 초기화합니다.
     */
    uploadComment: async () => {
      if (get().commentInput.length === 0) return;

      set({ commentUploading: true });

      const result = await axiosUploadResearchComment({
        researchId: get().researchDetail._id,
        content: get().commentInput,
      });
      if (result !== null) {
        get().setResearchDetail(result.updatedResearch);
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

      const result = await axiosUploadResearchReply({
        researchId: get().researchDetail._id,
        commentId: get().targetCommentId,
        content: get().commentInput,
      });
      if (result !== null) {
        get().setResearchDetail(result.updatedResearch);
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
  }));
