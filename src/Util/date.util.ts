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
 * 숫자 인자를 받아 두 자리로 변환합니다.
 * @author 현웅
 */
export function digitStandizer(num: number) {
  return num < 10 ? `0${num}` : num.toString();
}

/**
 * 인자로 받은 시간을 MM/DD HH:MM 형식으로 변환합니다.
 * @author 현웅
 */
export function convertTimeToMMDDHHMM(time: string | Date) {
  const date = new Date(time);
  const month = digitStandizer(date.getMonth() + 1);
  const day = digitStandizer(date.getDate());
  const hour = digitStandizer(date.getHours());
  const minute = digitStandizer(date.getMinutes());
  return `${month}/${day} ${hour}:${minute}`;
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
