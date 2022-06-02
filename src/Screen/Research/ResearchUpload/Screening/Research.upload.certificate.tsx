import React from "react";
import styled from "styled-components/native";
import { H3 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 업로드 페이지 목표 인원 보장 섹션입니다.
 * @author 현웅
 */
export function ResearchUploadCertificate() {
  return (
    <Container>
      <Description />
      <Guidance />
    </Container>
  );
}

function Description() {
  return (
    <Description__Container style={globalStyles.screen__horizontalPadding}>
      <Description__Text bold={true}>
        목표 인원만큼 리서치 응답이 모일 수 있도록 보장
      </Description__Text>
      <Description__Text bold={false}>{`해드리는 `}</Description__Text>
      <Description__Text bold={false}>{`부가 기능입니다.`}</Description__Text>
      <Description__Text bold={true}>{`앱 푸시알림, `}</Description__Text>
      <Description__Text bold={true}>{`상단 우선 노출 `}</Description__Text>
      <Description__Text bold={false}>{`등을 통해 `}</Description__Text>
      <Description__Text bold={false}>이루어집니다.</Description__Text>
    </Description__Container>
  );
}

function Guidance() {
  return (
    <Guidance__Container style={globalStyles.screen__horizontalPadding}>
      <Guidance__Text>
        이 기능을 원하실 경우, 하단 이메일로 문의 주시면 상세하게 안내
        도와드리겠습니다.
      </Guidance__Text>
      <Guidance__Text>✉️ surbayofficial@gmail.com</Guidance__Text>
    </Guidance__Container>
  );
}

const Container = styled.View``;

const Description__Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Description__Text = styled(H3)<{ bold: boolean }>`
  color: ${({ theme }) => theme.color.grey.deep};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

const Guidance__Container = styled.View`
  //TODO: DESIGN-SYSTEM
  background-color: #f2f2f2;
`;

const Guidance__Text = styled(H3)`
  color: ${({ theme }) => theme.color.grey.deep};
  line-height: 18px;
  padding-top: 12px;
  padding-bottom: 12px;
`;
