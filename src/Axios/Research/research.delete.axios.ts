import customAxios from "../axios.core";

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
      return false;
    });
};
