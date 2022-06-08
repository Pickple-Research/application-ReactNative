import { Asset } from "react-native-image-picker";

/**
 * 리서치 정보
 * @param id
 * @param title
 * @param tags
 * @param targets
 * @param type
 * @author 현웅
 */
export type ResearchProps = {
  id: string;
  title: string;
  tags: string[];
  targets: string[];
  type: string;
};

/**
 * 리서치 경품
 * @author 현웅
 */
export type ResearchGiftProps = {
  giftName: string;
};

/**
 * 리서치 경품 (업로드 시점)
 * @param index 경품 index
 * @param deleted 삭제 여부
 * @param giftName 경품명
 * @param giftImage 경품 이미지
 * @param giftImageRatio 경품 이미지 비율
 * @author 현웅
 */
export type ResearchUploadGiftProps = {
  index: number;
  deleted: boolean;
  giftName: string;
  giftImage: Asset;
  giftImageRatio: number;
};
