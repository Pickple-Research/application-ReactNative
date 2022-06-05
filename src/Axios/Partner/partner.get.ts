import customAxios from "../axios.core";

/**
 * 파트너 _id를 이용해 파트너를 찾고 가져옵니다.
 * @author 현웅
 */
export const getPartnerById = async (partnerId: string) => {
  return await customAxios.request<string>({
    method: "GET",
    url: `/partners/${partnerId}`,
  });
};
