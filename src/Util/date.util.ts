/**
 * 현재 한국 시간을 ISO 타입으로 반환합니다.
 * @author 현웅
 */
export function getCurrentISOTime() {
  // const KOREA_GMT = new Date();
  // KOREA_GMT.setHours(KOREA_GMT.getHours() + 9);
  // return new KOREA_GMT.toISOString();
  return new Date().toISOString();
}

/**
 * 숫자 인자를 받아 두 자리로 변환합니다.
 * @author 현웅
 */
export function digitStandizer(num: number) {
  return num < 10 ? `0${num}` : num.toString();
}

/**
 * 인자로 받은 시간을 MM.DD 형식으로 변환합니다.
 * @author 현웅
 */
export function convertTimeToMMDD(time: string | Date) {
  const date = new Date(time);
  const month = digitStandizer(date.getMonth() + 1);
  const day = digitStandizer(date.getDate());
  return `${month}.${day}`;
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
 * 인자로 받은 시간을 YYYY. MM. DD 형식으로 변환합니다.
 * @author 현웅
 */
export function convertTimeToYYYYMMDD(time: string | Date) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = digitStandizer(date.getMonth() + 1);
  const day = digitStandizer(date.getDate());
  return `${year}. ${month}. ${day}`;
}

/**
 * 인자가 하나만 주어진 경우, 해당 시간이 현재시간보다 이전인지 확인합니다.
 *
 * 인자가 두 개 주어진 경우, 첫번째 시간이 두번째 시간보다 이전인지 확인합니다.
 * @author 현웅
 */
export function didDatePassed(deadline: string | Date) {
  return new Date(deadline) < new Date();
}

/**
 * 해당 시간이 현재 시간 보다 며칠 뒤에 있는지 계산하여 값으로 전달합니다.
 * @author 원제
 */
export function getRemainedDays(deadline: string | Date) {
  return Math.floor(
    (new Date(deadline).getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24,
  );
}
