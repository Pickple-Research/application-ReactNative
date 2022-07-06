import React, { useEffect } from "react";
import styled from "styled-components/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { LandingBottomTabProps } from "src/Navigator";
import { PartnerLandingSearch } from "./Partner.landing.search";
import { PartnerLandingBanner } from "./Partner.landing.banner";
import { PartnerLandingFollow } from "./Partner.landing.follow";
import { PartnerLandingCategory } from "./Partner.landing.category";
import { PartnerLandingAd } from "./Partner.landing.ad";
import { PartnerLandingRecent } from "./Partner.landing.recent";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import { usePartnerLandingScreenStore } from "src/Zustand";
import { PartnerServiceGettingReadyModal } from "src/Modal";

export type PartnerLandingScreenProps = {};

/**
 * 파트너 랜딩 페이지
 * @author 현웅
 */
export function PartnerLandingScreen({
  navigation,
}: BottomTabScreenProps<LandingBottomTabProps, "PartnerLandingScreen">) {
  const setServiceGettingReadyModalVisible = usePartnerLandingScreenStore(
    state => state.setServiceGettingReadyModalVisible,
  );

  /** 파트너 페이지로 올 때마다 페이지 준비 중 모달을 보여줍니다 */
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setServiceGettingReadyModalVisible(true);
    });
    return unsubscribe;
  }, []);

  return (
    <Container>
      <WhiteBackgroundScrollView>
        <PartnerLandingSearch />
        <PartnerLandingBanner />
        <PartnerLandingFollow />
        <PartnerLandingCategory />
        <PartnerLandingAd />
        <PartnerLandingRecent />
      </WhiteBackgroundScrollView>
      <PartnerServiceGettingReadyModal />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.grey.white};
`;
