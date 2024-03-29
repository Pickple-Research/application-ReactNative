import customAxios from "../axios.core";
import {
  CreditHistorySchema,
  ResearchSchema,
  ResearchCommentSchema,
  ResearchReplySchema,
} from "src/Schema";
import {
  ResearchPurpose,
  ResearchType,
  Gender,
  AgeGroup,
} from "src/Object/Enum";
import { handleAxiosError } from "src/Util";

/**
 * 이미지가 포함되지 않은 리서치를 업로드합니다.
 * @return 새로운 리서치 정보와 CreditHistory | null
 * @author 현웅
 */
export const axiosUploadResearch = async (research: {
  title: string;
  link: string;
  content: string;
  purpose: ResearchPurpose | undefined;
  type: ResearchType | undefined;
  organization: string;
  target: string;
  targetGenders: Gender[];
  targetAgeGroups: AgeGroup[];
  estimatedTime: string;
  extraCredit: string;
  extraCreditRecieverNum: string;
  deadline: string;
}) => {
  return await customAxios
    .request<{
      newResearch: ResearchSchema;
      newCreditHistory: CreditHistorySchema;
    }>({
      method: "POST",
      url: "/researches",
      data: research,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "리서치 업로드에 실패했습니다" });
      return null;
    });
};

/**
 * 이미지가 포함된 리서치를 업로드합니다.
 * @return 새로운 리서치 정보와 CreditHistory | null
 * @author 현웅
 */
export const axiosUploadResearchWithImages = async (formData: FormData) => {
  return await customAxios
    .request<{
      newResearch: ResearchSchema;
      newCreditHistory: CreditHistorySchema;
    }>({
      method: "POST",
      url: "/researches/images",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "리서치 업로드에 실패했습니다" });
      return null;
    });
};

/**
 * 리서치 댓글을 업로드합니다.
 * @return 업데이트 된 리서치 정보와 생성된 댓글 정보
 * @author 현웅
 */
export const axiosUploadResearchComment = async (param: {
  researchId: string;
  content: string;
}) => {
  return await customAxios
    .request<{
      updatedResearch: ResearchSchema;
      newComment: ResearchCommentSchema;
    }>({
      method: "POST",
      url: "researches/comments",
      data: { ...param },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({
        error,
        errorMessage: "리서치 댓글 등록에 실패했습니다",
      });
      return null;
    });
};

/**
 * 리서치 대댓글을 업로드합니다.
 * @return 업데이트 된 리서치 정보와 생성된 대댓글 정보
 * @author 현웅
 */
export const axiosUploadResearchReply = async (param: {
  researchId: string;
  commentId: string;
  content: string;
}) => {
  return await customAxios
    .request<{
      updatedResearch: ResearchSchema;
      newReply: ResearchReplySchema;
    }>({
      method: "POST",
      url: "researches/replies",
      data: { ...param },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({
        error,
        errorMessage: "리서치 대댓글 등록에 실패했습니다",
      });
      return null;
    });
};

/**
 * 리서치를 신고합니다.
 * @return 성공 시 true | 실패 시 false
 * @author 현웅
 */
export const axiosReportResearch = async (param: {
  researchId: string;
  reportContent: string;
}) => {
  return await customAxios
    .request<void>({
      method: "POST",
      url: "/researches/report",
      data: {
        researchId: param.researchId,
        content: param.reportContent,
      },
    })
    .then(response => {
      return true;
    })
    .catch(error => {
      handleAxiosError({
        error,
        errorMessage: "리서치 신고가 정상적으로 처리되지 못했습니다",
      });
      return false;
    });
};
