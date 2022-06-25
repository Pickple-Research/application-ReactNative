import { UserType } from "src/Object/Enum";

/**
 * 리서치글, 리서치(대)댓글 작성자 정보
 * (서버단에서 populate 하는 정보입니다.)
 * @author 현웅
 */
export type ResearchUser = {
  /** 유저 타입 */
  userType: UserType;

  /** 닉네임 */
  nickname: string;

  /** 회원 등급 */
  grade: number;
};
