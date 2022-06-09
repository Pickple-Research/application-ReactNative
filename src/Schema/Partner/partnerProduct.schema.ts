/**
 * 파트너 제품/서비스
 * @author 현웅
 */
export type PartnerProduct = {
  /** 파트너 _id */
  partnerId: string;

  /** 제품/서비스명 */
  productName: string;

  /** 제품 설명 */
  description: string;

  /** 제품/서비스 타입 */
  // productType: ProductType;

  /** 가격 (크레딧) */
  price?: number;

  /** 제품 사진 */
  photoUrls?: string[];
};
