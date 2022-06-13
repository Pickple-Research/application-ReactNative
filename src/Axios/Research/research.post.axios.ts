import customAxios from "../axios.core";
import { ResearchSchema } from "src/Schema";
import { ResearchPurpose } from "src/Object/Enum";

/**
 * 이미지가 포함되지 않은 리서치를 업로드합니다.
 * @return 새로운 리서치 정보 | null
 * @author 현웅
 */
export const axiosUploadResearch = async (research: {
  title: string;
  link: string;
  content: string;
  // purpose: ResearchPurpose | undefined;
  organization: string;
  target: string;
  estimatedTime: string;
  // creditReceiverNum: number;
  // extraCredit: number;
  // screeningSexInput: string | undefined;
  // screeningAgeInputs: string[];
}) => {
  return await customAxios
    .request<ResearchSchema>({
      method: "POST",
      url: "/researches",
      data: research,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return null;
    });
};

/**
 * 이미지가 포함된 리서치를 업로드합니다.
 * @return 새로운 리서치 정보 | null
 * @author 현웅
 */
export const axiosUploadResearchWithImages = async (formData: FormData) => {
  return await customAxios
    .request<ResearchSchema>({
      method: "POST",
      url: "/researches/images",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return null;
    });
};

/**
 * 리서치 댓글을 업로드합니다.
 * @author 현웅
 */
export const axiosUploadResearchComment = async () => {
  return await customAxios
    .request({
      method: "POST",
      url: "researches/comments",
      data: null,
    })
    .then(response => {
      return;
    })
    .catch(error => {
      return null;
    });
};

/**
 * 리서치 대댓글을 업로드합니다.
 * @author 현웅
 */
export const axiosUploadResearchReply = async () => {
  return await customAxios
    .request({
      method: "POST",
      url: "researches/replies",
      data: null,
    })
    .then(response => {
      return;
    })
    .catch(error => {
      return null;
    });
};
