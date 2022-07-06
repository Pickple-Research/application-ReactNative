import create from "zustand";

type RequireLoginModalText =
  | "ALARM"
  | "RESEARCH_UPLOAD"
  | "RESEARCH_PARTICIPATE"
  | "VOTE_UPLOAD"
  | "VOTE_PARTICIPATE"
  | "MYPAGE";

type AppStoreProps = {
  /** 로그인 요구 모달 표시 여부 */
  requireLoginModalVisible: boolean;
  setRequireLoginModalVisible: (status: boolean) => void;
  /** 로그인 요구 모달 내용 */
  requireLoginModleText: RequireLoginModalText;
  setRequireLoginModleText: (text: RequireLoginModalText) => void;
};

/**
 * 앱 전체에서 사용되거나, 하나의 페이지에 지정하기 어려운 상태값들입니다.
 * @author 현웅
 */
export const useAppStore = create<AppStoreProps>((set, get) => ({
  requireLoginModalVisible: false,
  setRequireLoginModalVisible: (status: boolean) => {
    set({ requireLoginModalVisible: status });
  },
  requireLoginModleText: "ALARM",
  setRequireLoginModleText: (text: RequireLoginModalText) => {
    set({ requireLoginModleText: text });
  },
}));
