import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { HashTags } from "src/Component/Text";
import { usePartnerStore } from "src/Zustand";
import { globalStyles } from "src/Style";
import { BodyText } from "src/StyledComponents/Text";
import StarIcon from "src/Resource/svg/star-icon.svg";

/**
 * 파트너 상세정보 페이지 파트너 프로필 섹션
 * @author 현웅
 */
export function PartnerDetailProfile() {
  return (
    <Container style={{ ...globalStyles.screen__horizontalPadding }}>
      <Thumbnail />
      <PartnerInfo />
      <Scrap />
    </Container>
  );
}

function Thumbnail() {
  return <Thumbnail__Container />;
}

function PartnerInfo() {
  const examplePartner = usePartnerStore(state => state.examplePartner);

  return (
    <PartnerInfo__Container>
      <PartnerInfo__PartnerName>{examplePartner.name}</PartnerInfo__PartnerName>
      <PartnerInfo__PartnerType>{examplePartner.type}</PartnerInfo__PartnerType>
      <HashTags tags={examplePartner.tags} />
    </PartnerInfo__Container>
  );
}

function Scrap() {
  return (
    <Scrap__Container>
      <StarIcon style={{ ...styles.icon__margin }} />
      <Scrap__Num>12,499</Scrap__Num>
    </Scrap__Container>
  );
}

const styles = StyleSheet.create({
  icon__margin: {
    marginBottom: 5,
  },
});

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

// Thumbnail()
const Thumbnail__Container = styled.View`
  width: 70px;
  height: 70px;
  background-color: gray;
  margin-right: 14px;
  border-radius: 100px;
`;

// PartnerInfo()
const PartnerInfo__Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const PartnerInfo__PartnerName = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 2px;
`;

const PartnerInfo__PartnerType = styled(BodyText)`
  margin-bottom: 8px;
`;

// Scrap()
const Scrap__Container = styled.View`
  align-items: center;
`;

const Scrap__Num = styled(BodyText)``;
