import React, { useState } from "react";
import styled from "styled-components/native";
import { ResearchUploadSubStepHeader } from "../Research.upload.subStepHeader";
import { ResearchGiftListItem } from "src/Component/Research";
import { RadiusButton } from "src/Component/Button";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";
import { H2 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 업로드 페이지 기프티콘 추가 단계입니다.
 * @author 현웅
 */
export function ResearchUploadGift() {
  const [showGiftList, setShowGiftList] = useState<boolean>(true);

  function toggleShowGiftList() {
    setShowGiftList(!showGiftList);
  }

  return (
    <Container>
      <StepHeader toggleShowGiftList={toggleShowGiftList} />
      {showGiftList && <GiftList />}
    </Container>
  );
}

function StepHeader({
  toggleShowGiftList,
}: {
  toggleShowGiftList: () => void;
}) {
  return (
    <ResearchUploadSubStepHeader onPress={toggleShowGiftList}>
      <StepHeader__Text>기프티콘을 추가해주세요</StepHeader__Text>
    </ResearchUploadSubStepHeader>
  );
}

function GiftList() {
  const { gifts, addNewGift } = useResearchUploadScreenStore(
    state => ({ gifts: state.gifts, addNewGift: state.addNewGift }),
    shallow,
  );

  return (
    <GiftList__Container style={globalStyles.screen__horizontalPadding}>
      {gifts.map((gift, index) => {
        if (gift.deleted) return null;
        return <ResearchGiftListItem key={index} gift={gift} />;
      })}
      <RadiusButton text="+ 경품추가" type="BLACK" onPress={addNewGift} />
    </GiftList__Container>
  );
}

const Container = styled.View`
  margin-bottom: 10px;
`;

const StepHeader__Text = styled(H2)`
  color: ${({ theme }) => theme.color.grey.deep};
  font-weight: bold;
`;

const GiftList__Container = styled.View`
  padding-top: 10px;
  margin-bottom: 24px;
`;
