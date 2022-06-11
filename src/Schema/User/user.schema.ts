export type UserSchema = {
  /** 이메일 */
  email: string;

  /** 닉네임 */
  nickname: string;

  /** 등급 */
  grade: number;

  /** 회원가입 일자 */
  createdAt: string;
};

export const BlankUser: UserSchema = {
  email: "",
  nickname: "",
  grade: 0,
  createdAt: "",
};
