import customAxios from "../axios.core";
import { VoteSchema, VoteOptionSchema } from "src/Schema";

/**
 * 투표를 업로드합니다.
 * @return 생성된 투표 정보
 * @author 현웅
 */
export const uploadVote = async (vote: {
  title: string;
  content: string;
  options: VoteOptionSchema[];
  allowMultiChoice: boolean;
}) => {
  return await customAxios
    .request<VoteSchema>({
      method: "POST",
      url: "/votes",
      data: vote,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return null;
    });
};
