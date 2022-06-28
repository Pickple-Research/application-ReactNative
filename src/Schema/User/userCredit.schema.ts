/**
 * 유저의 현재 크레딧과 크레딧 변동 내역 _id 스키마
 * @author 현웅
 */
export type UserCreditSchema = {
  /** 잔여 크레딧 */
  credit: number;
  /** 크레딧 변동 내역 _id */
  creditHistoryIds: string[];
};

export const BlankUserCredit: UserCreditSchema = {
  credit: 0,
  creditHistoryIds: [],
};
