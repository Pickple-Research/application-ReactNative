import create from "zustand";
import { useUserStore } from "../User/user.zustand";
import { useResearchStore } from "./research.zustand";
import {
  ResearchSchema,
  ResearchCommentSchema,
  ResearchReplySchema,
  BlankResearch,
} from "src/Schema";
import {
  axiosGetResearchComments,
  axiosReportResearch,
  axiosDeleteResearch,
  axiosScrapResearch,
  axiosUnscrapResearch,
  axiosUploadResearchComment,
  axiosUploadResearchReply,
} from "src/Axios";
import { ResearchReportOptions } from "src/Constant";

type ResearchDetailScreenStoreProps = {
  /** 화면에 보여지는 리서치 정보 */
  researchDetail: ResearchSchema;
  setResearchDetail: (researchDetail: ResearchSchema) => void;

  /** 리서치 신고 옵션들 */
  researchReportOptions: string[];
  /** 선택된 리서치 신고 옵션 인덱스들 */
  selectedReportOptionIndexes: number[];
  /** 리서치 신고 옵션 터치시 실행 함수 */
  onPressReportOption: (index: number) => void;

  /** 리서치 신고 옵션 중 '기타' 항목 입력값 */
  reportEtcOptionInput: string;
  setReportEtcOptionInput: (input: string) => void;

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

  /** 리서치 삭제 중 여부 */
  deleting: boolean;
  /** 리서치 신고 중 여부 */
  reporting: boolean;
  /** 스크랩 처리 중 여부 */
  scrapping: boolean;
  /** 댓글 로드 중 여부 */
  commentLoading: boolean;
  /** 댓글 업로드 중 여부 */
  commentUploading: boolean;

  clearState: () => void;

  /**
   * 리서치를 삭제합니다.
   * @return 성공시 true, 실패시 false
   * @author 현웅
   */
  deleteResearch: () => Promise<boolean>;

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

  /** 리서치를 스크랩합니다. */
  scrapResearch: () => Promise<void>;

  /** 리서치를 스크랩을 취소합니다. */
  unscrapResearch: () => Promise<void>;
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

    researchReportOptions: ResearchReportOptions,
    selectedReportOptionIndexes: [],
    onPressReportOption: (index: number) => {
      set({ selectedReportOptionIndexes: [index] });
    },

    reportEtcOptionInput: "",
    setReportEtcOptionInput: (input: string) => {
      set({ reportEtcOptionInput: input });
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

    deleting: false,
    reporting: false,
    scrapping: false,
    commentLoading: false,
    commentUploading: false,

    clearState: () => {
      set({
        researchDetail: BlankResearch,
        selectedReportOptionIndexes: [],
        reportEtcOptionInput: "",
        researchDetailComments: [],
        targetCommentId: "",
        targetCommentAuthorNickname: "",
        commentInput: "",
        researchDeleteModalVisible: false,
        researchPullupModalVisible: false,
        researchReportModalVisible: false,
        deleting: false,
        reporting: false,
        scrapping: false,
        commentLoading: false,
        commentUploading: false,
      });
    },

    deleteResearch: async () => {
      set({ deleting: true });
      const result = await axiosDeleteResearch(get().researchDetail._id);
      if (result) {
        //TODO: #SPREAD
        //* 성공적으로 삭제된 경우, 리서치 리스트에서 해당 리서치를 삭제합니다.
        useResearchStore
          .getState()
          .removeResearchListItem(get().researchDetail._id);
      }
      set({ deleting: false });
      return result;
    },

    //LOGIC: 업데이트 된 리서치를 researchDetail에 설정하고,
    //      현재 리서치를 ResearchList에서 지운 후 getNewerResearch를 해야합니다.
    pullupResearch: async () => {
      return;
    },

    reportReserach: async () => {
      //* 신고 사유 선택이 되지 않았거나 이미 신고 중인 경우
      //* 곧바로 return 합니다.
      if (get().selectedReportOptionIndexes.length === 0) {
        //TODO: 토스트 메세지
        return;
      }
      if (get().reporting) return;

      set({ reporting: true });

      const result = await axiosReportResearch({
        researchId: get().researchDetail._id,
        //* 신고 사유로 '기타'를 선택한 경우, 사용자가 입력한 내용을 사용합니다.
        reportContent: get().selectedReportOptionIndexes.includes(
          ResearchReportOptions.length - 1,
        )
          ? `기타: ${get().reportEtcOptionInput}`
          : ResearchReportOptions[get().selectedReportOptionIndexes[0]],
      });
      //* 신고가 성공적으로 이뤄진 경우,
      //* 신고 모달을 닫고 관련 상태값을 모두 초기화합니다.
      if (result) {
        set({
          researchReportModalVisible: false,
          selectedReportOptionIndexes: [],
          reportEtcOptionInput: "",
        });
      }

      set({ reporting: false });
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

    scrapResearch: async () => {
      set({ scrapping: true });
      const updatedResearch = await axiosScrapResearch(
        get().researchDetail._id,
      );
      if (updatedResearch !== null) {
        useUserStore.getState().addScrappedResearchId(get().researchDetail._id);
        get().setResearchDetail(updatedResearch);
        useResearchStore.getState().updateResearchListItem(updatedResearch);
      }
      set({ scrapping: false });
      return;
    },

    unscrapResearch: async () => {
      set({ scrapping: true });
      const updatedResearch = await axiosUnscrapResearch(
        get().researchDetail._id,
      );
      if (updatedResearch !== null) {
        useUserStore
          .getState()
          .removeScrappedResearchId(get().researchDetail._id);
        get().setResearchDetail(updatedResearch);
        useResearchStore.getState().updateResearchListItem(updatedResearch);
      }
      set({ scrapping: false });
      return;
    },
  }));
