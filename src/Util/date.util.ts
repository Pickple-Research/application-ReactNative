/**
 * 현재 한국 시간을 ISO 타입으로 반환합니다.
 * @author 현웅
 */
export function getCurrentISOTime() {
  const KOREA_GMT = new Date();
  KOREA_GMT.setHours(KOREA_GMT.getHours() + 9);
  return KOREA_GMT.toISOString();
}

/**
 * 인자가 하나만 주어진 경우, 해당 시간이 현재시간보다 이전인지 확인합니다.
 *
 * 인자가 두 개 주어진 경우, 첫번째 시간이 두번째 시간보다 이전인지 확인합니다.
 * @author 현웅
 */
export function didDatePassed(deadline: string | Date) {
  const currentTime = new Date();
  currentTime.setHours(currentTime.getHours() + 9);
  return new Date(deadline) < currentTime;
}

export function getDateDifference(deadline: string | Date) {

  const currentTime = new Date();
  return Math.floor((new Date(deadline).getTime() - currentTime.getTime()) / 1000 / 60 / 60 / 24);
  
}