import React from "react";
import { PartnerDetailProfile } from "./Partner.detail.profile";
import { PartnerDetailResearch } from "./Partner.detail.research";
import { PartnerDetailProductService } from "./Partner.detail.productService";
import { PartnerDetailEvent } from "./Partner.detail.event";
import { PartnerDetailInfo } from "./Partner.detail.info";
import { WhiteBackgroundScrollView } from "@Component/ScrollView";

/**
 * 파트너 상세 정보 페이지
 * @author 현웅
 */
export type PartnerDetailScreenProps = {
  partnerName: string;
};

export function PartnerDetailScreen() {
  return (
    <WhiteBackgroundScrollView>
      <PartnerDetailProfile />
      <PartnerDetailResearch />
      <PartnerDetailProductService />
      <PartnerDetailEvent />
      <PartnerDetailInfo />
    </WhiteBackgroundScrollView>
  );
}
