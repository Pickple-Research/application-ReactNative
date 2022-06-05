import customAxios from "../axios.core";

/**
 * 파트너를 팔로우합니다.
 * @author 현웅
 */
export const followPartner = async (partnerId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `follow/${partnerId}`,
  });
};

/**
 * 파트너 팔로우를 취소합니다.
 * @author 현웅
 */
export const unfollowPartner = async (partnerId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `unfollow/${partnerId}`,
  });
};

/**
 * 게시글/이벤트 정보를 업데이트합니다.
 * @author 현웅
 */
export const updatePost = async () => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `post`,
  });
};

/**
 * 제품/서비스 정보를 업데이트합니다.
 * @author 현웅
 */
export const updateProduct = async () => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `product`,
  });
};
