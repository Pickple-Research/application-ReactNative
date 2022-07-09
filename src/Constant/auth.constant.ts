import { SimpleDropDownDataType } from "src/Component/DropDown";

/**
 * 회원가입 시 이메일 도메인 드롭다운 메뉴에 사용하는 데이터 목록
 * @author 현웅
 */
export const SignupEmailDropDownData: SimpleDropDownDataType[] = [
  { value: "", displayName: "직접입력" },
  { value: "naver.com", displayName: "naver.com" },
  { value: "daum.net", displayName: "daum.net" },
  { value: "gmail.com", displayName: "gmail.com" },
  { value: "kakao.com", displayName: "kakao.com" },
];
