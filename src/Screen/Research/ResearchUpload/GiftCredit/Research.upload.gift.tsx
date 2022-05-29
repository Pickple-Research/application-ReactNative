import React, { useState } from "react";
import styled from "styled-components/native";
import {
  ResearchUpload__CollapsibleSection__Container,
  ResearchUpload__CollapsibleSection__Content,
} from "../Research.upload.component";
import { ResearchGiftListItem } from "src/Component/Research";
import { RadiusButton } from "src/Component/Button";
import shallow from "zustand/shallow";
import { useResearchUploadStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 업로드 페이지 기프티콘 추가 섹션입니다.
 * @author 현웅
 */
export function ResearchUploadGift() {
  const [showGiftList, setShowGiftList] = useState<boolean>(false);

  function toggleShowGiftList() {
    setShowGiftList(!showGiftList);
  }

  return (
    <Container>
      <SectionToggleButton toggleShowGiftList={toggleShowGiftList} />
      {showGiftList && <GiftList />}
    </Container>
  );
}

function SectionToggleButton({
  toggleShowGiftList,
}: {
  toggleShowGiftList: () => void;
}) {
  return (
    <ResearchUpload__CollapsibleSection__Container
      onPress={toggleShowGiftList}
      style={globalStyles.screen__horizontalPadding}>
      <ResearchUpload__CollapsibleSection__Content bold={true}>
        기프티콘을 추가해주세요
      </ResearchUpload__CollapsibleSection__Content>
    </ResearchUpload__CollapsibleSection__Container>
  );
}

function GiftList() {
  const { gifts, addNewGift } = useResearchUploadStore(
    state => ({ gifts: state.gifts, addNewGift: state.addNewGift }),
    shallow,
  );

  return (
    <GiftList__Container style={globalStyles.screen__horizontalPadding}>
      {gifts.map((gift, index) => {
        return <ResearchGiftListItem key={index} gift={gift} />;
      })}
      <RadiusButton content="+ 경품추가" type="ADD_GIFT" onPress={addNewGift} />
    </GiftList__Container>
  );
}

const Container = styled.View`
  margin-bottom: 10px;
`;

const GiftList__Container = styled.View`
  margin-bottom: 10px;
`;
