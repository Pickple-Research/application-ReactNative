export type UserSchema = {
  _id: string;

  /** 이메일 */
  email: string;

  /** 닉네임 */
  nickname: string;

  /** 잔여 크레딧 */
  credit: number;

  /** 등급 */
  grade: number;

  /** 회원가입 일자 */
  createdAt: string;
};

export const BlankUser: UserSchema = {
  _id: "",
  email: "",
  nickname: "",
  grade: 1,
  credit: 0,
  createdAt: "",
};
