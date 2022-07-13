/**
 * 유저 타입: 일반 사용자, 테스터, 관리자
 * @author 현웅
 */
export enum UserType {
  USER = "USER",
  TESTER = "TESTER",
  PARTNER = "PARTNER",
  ADMIN = "ADMIN",
}

/**
 * 성별: 남자, 여자
 * @author 현웅
 */
export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

/**
 * 나이대: 10대, 20대, 30대 ... 70대 이상
 * @author 현웅
 */
export enum AgeGroup {
  TEEN = "TEEN",
  TWENTY = "TWENTY",
  THIRTY = "THIRTY",
  FOURTY = "FOURTY",
  FIFTY = "FIFTY",
  SIXTY = "SIXTY",
  SEVENTY = "SEVENTY",
}
