import customAxios from "../axios.core";
import { ResearchSchema, VoteSchema } from "src/Schema";
import { handleAxiosError } from "src/Util";

/**
 * 앱을 처음 실행할 때 호출되는 함수입니다.
 * 최신 리서치, 최신 투표를 20개 가져옵니다.
 * @author 현웅
 */
export const axiosBootstrap = async () => {
  return await customAxios
    .request<{
      researches: ResearchSchema[];
      votes: VoteSchema[];
    }>({
      method: "GET",
      url: "/bootstrap",
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({
        error,
        errorMessage: "최신 리서치 정보를 받아오지 못했습니다",
      });
      return null;
    });
};
