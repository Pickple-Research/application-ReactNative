import customAxios from "../axios.core";
import { ResearchPurpose } from "src/Object/Enum";
import { ResearchUploadGiftProps } from "src/Object/Type";

/**
 * 리서치를 업로드합니다.
 * @return 새로운 리서치 _id | null
 * @author 현웅
 */
export const uploadResearch = async (research: {
  title: string;
  link: string;
  content: string;
  purpose: ResearchPurpose | undefined;
  organization: string;
  target: string;
  estimatedTime: number;
  creditReceiverNum: number;
  extraCredit: number;
  screeningSexInput: string | undefined;
  screeningAgeInputs: string[];
  gifts: ResearchUploadGiftProps[];
}) => {
  const formData = new FormData();

  formData.append("title", research.title.trim());
  formData.append("link", research.link.trim());
  formData.append("content", research.content.trim());
  // formData.append("purpose", get().purposeInput);
  formData.append("organization", research.organization.trim());
  formData.append("target", research.target.trim());
  formData.append("estimatedTime", research.estimatedTime);
  // formData.append("", get().creditReceiverNum)
  // formData.append("", get().extraCredit)
  // formData.append("", get().screeningSexInput)
  // formData.append("", get().screeningAgeInputs)

  research.gifts.forEach(gift => {
    if (!gift.deleted) {
      formData.append("images", {
        uri: gift.giftImage.uri,
        type: gift.giftImage.type,
        name: gift.giftImage.fileName,
      });
    }
  });

  return await customAxios
    .request<string>({
      method: "POST",
      url: "/researches",
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
