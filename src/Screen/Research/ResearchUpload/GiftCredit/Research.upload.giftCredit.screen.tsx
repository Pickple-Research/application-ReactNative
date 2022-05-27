import React from "react";
import styled from "styled-components/native";
import { ResearchUploadStepHeader } from "../Research.upload.stepHeader";
import { ResearchUploadGift } from "./Research.upload.gift";
import { ResearchUploadCredit } from "./Research.upload.credit";

/**
 * 리서치 업로드 세번째 페이지입니다.
 * 기프티콘, 추가 크레딧을 입력 받습니다.
 * @author 원제
 * @modify 현웅
 */
export function ResearchUploadGiftCreditScreen({ navigation }: any) {
  return (
    <Container>
      {/* <ResearchUploadStepHeader /> */}
      <ResearchUploadGift />
      <ResearchUploadCredit />
    </Container>
  );
}

const Container = styled.View``;
