import create from "zustand";

type MypageStoreProps = {};

/**
 * 마이페이지에서 사용되는 상태값들을 정의합니다.
 * 크레딧 사용내역, 스크랩/참여/업로드한 리서치와 투표 정보가 담겨있습니다
 * @author 현웅
 */
export const useMypageStore = create<MypageStoreProps>((set, get) => ({}));
