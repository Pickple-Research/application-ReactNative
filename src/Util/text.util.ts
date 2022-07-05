/**
 * 주어진 문자열에서 숫자가 아닌 문자를 제거하고 반환합니다.
 * @author 현웅
 */
export function trimNonNumber(text: string) {
  return text.replace(/[^0-9]/g, "");
}
