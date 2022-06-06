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
 * @author 현웅
 */
export type ResearchUploadGiftProps = {
  index: number;
  deleted: boolean;
  giftName: string;
  photoUri: string;
  photoRatio: number;
};
