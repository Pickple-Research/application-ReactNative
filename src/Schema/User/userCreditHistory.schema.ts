export type CreditHistory = {
  /** 변동 사유 */
  reason: string;

  /** 변동 액수 */
  scale: number;

  /** 변동 일시 */
  changedAt: string;

  /** 잔여 크레딧 */
  balance: number;
};

/**
 * 크레딧 사용 내역
 * @author 현웅
 */
export type UserCreditHistory = {
  history: CreditHistory[];
};
