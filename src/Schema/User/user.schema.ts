export type UserSchema = {
  _id: string;

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
  _id: "",
  email: "",
  nickname: "",
  grade: 0,
  createdAt: "",
};
