import create from "zustand";
import { useUserStore } from "../User/user.zustand";
import { axiosGetUserActivity } from "src/Axios";

type MypageStoreProps = {
  /** 유저 활동 정보가 성공적으로 불러와졌는지 여부 */
  userActivityLoaded: boolean;
  /** 로그인 성공 이후, 유저 활동 정보를 불러옵니다 */
  getUserActivities: () => Promise<void>;

  clearState: () => void;
};

/**
 * 마이페이지에서 사용되는 상태값들을 정의합니다.
 * 크레딧 사용내역, 스크랩/참여/업로드한 리서치와 투표 정보가 담겨있습니다
 * @author 현웅
 */
export const useMypageStore = create<MypageStoreProps>((set, get) => ({
  userActivityLoaded: false,
  getUserActivities: async () => {
    //* 유저가 로그인 한 상황이 아니거나
    //* 이미 활동 정보를 불러온 적 있다면, 바로 반환합니다.
    if (useUserStore.getState().user._id === "" || get().userActivityLoaded) {
      return;
    }

    const result = await axiosGetUserActivity({
      userResearch: useUserStore.getState().userResearch,
      userVote: useUserStore.getState().userVote,
    });

    if (result === null) return;

    //* 요청이 성공적인 경우, userActivityLoaded 플래그를 true로 설정합니다.
    set({ userActivityLoaded: true });

    return;
  },

  clearState: () => {
    set({
      userActivityLoaded: false,
    });
  },
}));
