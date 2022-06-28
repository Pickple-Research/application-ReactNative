/**
 * 크레딧 변동 내역 스키마
 * @author 현웅
 */
export type CreditHistorySchema = {
  /** 변동 사유 (줄글) */
  reason: string;

  /** 변동 타입 (ex. 리서치 등록, 리서치 참여, 리서치 끌올 ...) */
  type: string;

  /** 변동 액수 */
  scale: number;

  /** 변동 일시 */
  createdAt?: string;

  /** 변동 이후 잔여 크레딧 */
  balance?: number;
};
