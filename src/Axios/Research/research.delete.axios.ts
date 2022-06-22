import customAxios from "../axios.core";
import { handleAxiosError } from "src/Util";

/**
 * 리서치를 삭제합니다.
 * @return 성공시 true, 실패시 false
 * @author 현웅
 */
export const axiosDeleteResearch = async (researchId: string) => {
  return await customAxios
    .request<void>({
      method: "DELETE",
      url: `/researches`,
      headers: { research_id: researchId },
    })
    .then(response => {
      return true;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "리서치 삭제에 실패하였습니다" });
      return false;
    });
};
