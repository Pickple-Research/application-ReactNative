import React from "react";
import styled from "styled-components/native";
import { HashTags } from "@Component/Text";
import { PartnerProps } from "@Object/Type";
import { H3, BodyText } from "../../StyledComponents/Text";

/**
 * 파트너 목록을 보여줄 때 사용되는 목록 한 줄 디자인입니다.
 * @author 현웅
 */
export function PartnerListItem({ partner }: { partner: PartnerProps }) {
  return (
    <Container>
      <Thumbnail />
      <PartnerInfo name={partner.name} tags={partner.tags} />
      <PartnerType type={partner.type} />
    </Container>
  );
}

function Thumbnail() {
  return <Thumbnail__Container />;
}

function PartnerInfo({ name, tags }: { name: string; tags: string[] }) {
  return (
    <PartnerInfo__Container>
      <PartnerInfo__PartnerName>{name}</PartnerInfo__PartnerName>
      <HashTags tags={tags} />
    </PartnerInfo__Container>
  );
}

function PartnerType({ type }: { type: string }) {
  return <PartnerType__Text>{type}</PartnerType__Text>;
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
`;

const Thumbnail__Container = styled.View`
  width: 50px;
  height: 50px;
  background-color: gray;
  margin-right: 10px;
  border-radius: 100px;
`;

const PartnerInfo__Container = styled.View`
  flex: 1;
  justify-content: center;
  margin-right: 15px;
`;

const PartnerInfo__PartnerName = styled(H3)`
  color: black;
  font-weight: bold;
  margin-bottom: 6px;
`;

const PartnerType__Text = styled(BodyText)``;
