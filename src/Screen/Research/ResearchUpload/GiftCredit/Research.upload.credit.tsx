import React, { useState } from "react";
import styled from "styled-components/native";
import { ResearchUploadSubStepHeader } from "../Research.upload.subStepHeader";
import { SimpleDropDown, SimpleDropDownDataType } from "src/Component/DropDown";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";
import { H1, H2, H3 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 업로드 페이지 크레딧 입력 섹션입니다.
 * @author 현웅
 */
export function ResearchUploadCredit() {
  const [showCreditInput, setShowCreditInput] = useState<boolean>(true);

  function toggleShowCreditInput() {
    setShowCreditInput(!showCreditInput);
  }

  return (
    <Container>
      <StepHeader toggleShowCreditInput={toggleShowCreditInput} />
      {showCreditInput && <CreditInput />}
    </Container>
  );
}

function StepHeader({
  toggleShowCreditInput,
}: {
  toggleShowCreditInput: () => void;
}) {
  return (
    <ResearchUploadSubStepHeader onPress={toggleShowCreditInput}>
      <StepHeader__Text bold={true}>경품용 추가 크레딧</StepHeader__Text>
      <StepHeader__Text bold={false}>을 입력해주세요</StepHeader__Text>
    </ResearchUploadSubStepHeader>
  );
}

function CreditInput() {
  const {
    extraCreditInput,
    setExtraCreditInput,
    extraCreditReceiverNumInput,
    setExtraCreditReceiverNumInput,
  } = useResearchUploadScreenStore(
    state => ({
      extraCreditInput: state.extraCreditInput,
      setExtraCreditInput: state.setExtraCreditInput,
      extraCreditReceiverNumInput: state.extraCreditReceiverNumInput,
      setExtraCreditReceiverNumInput: state.setExtraCreditReceiverNumInput,
    }),
    shallow,
  );

  const creditRecieverDropDownData: SimpleDropDownDataType[] = [
    { value: 1, displayName: "1" },
    { value: 2, displayName: "2" },
    { value: 3, displayName: "3" },
    { value: 4, displayName: "4" },
    { value: 5, displayName: "5" },
  ];

  const extraCreditDropDownData: SimpleDropDownDataType[] = [
    { value: 1, displayName: "1" },
    { value: 2, displayName: "2" },
    { value: 3, displayName: "3" },
    { value: 4, displayName: "4" },
    { value: 5, displayName: "5" },
  ];

  return (
    <CreditInput__Container style={globalStyles.screen__horizontalPadding}>
      {/* 기프티콘 대신 크레딧으로 ~ 전할 수 있습니다. */}
      <CreditInput__DescriptionContainer>
        <CreditInput__Description bold={false}>
          기프티콘 대신 크레딧으로 참여자분들께 감사의미를 전달할 수 있습니다.
        </CreditInput__Description>
        {/* <CreditInput__Description bold={false}>
          {`기프티콘 대신 `}
        </CreditInput__Description>
        <CreditInput__Description bold={true}>크레딧</CreditInput__Description>
        <CreditInput__Description bold={false}>
          으로 참여자분들께 감사의미를 전달할 수 있습니다.
        </CreditInput__Description> */}
      </CreditInput__DescriptionContainer>

      {/* ? 명에게 ? C 씩 추천 지급 */}
      <CreditInput__SettingContainer>
        <SimpleDropDown
          data={extraCreditDropDownData}
          onSelect={(selectedItem: SimpleDropDownDataType<number>) => {
            setExtraCreditReceiverNumInput(selectedItem.value);
          }}
          props={{ defaultButtonText: "0" }}
        />
        <CreditInput__SettingText
          bold={true}>{` 명 `}</CreditInput__SettingText>
        <CreditInput__SettingText
          bold={false}>{`에게 `}</CreditInput__SettingText>
        <SimpleDropDown
          data={creditRecieverDropDownData}
          onSelect={(selectedItem: SimpleDropDownDataType<number>) => {
            setExtraCreditInput(selectedItem.value);
          }}
          props={{ defaultButtonText: "0" }}
        />
        <CreditInput__SettingText bold={true}>{` C `}</CreditInput__SettingText>
        <CreditInput__SettingText bold={false}>
          씩 추첨 지급
        </CreditInput__SettingText>
      </CreditInput__SettingContainer>

      {/* = 총 ?C */}
      <CreditInput__TotalCredit>{` = 총 ${
        extraCreditReceiverNumInput * extraCreditInput
      } C`}</CreditInput__TotalCredit>
    </CreditInput__Container>
  );
}

const Container = styled.View``;

const StepHeader__Text = styled(H2)<{ bold: boolean }>`
  color: ${({ theme }) => theme.color.grey.deep};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

const CreditInput__Container = styled.View`
  padding-top: 10px;
`;

const CreditInput__DescriptionContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

const CreditInput__Description = styled(H3)<{ bold: boolean }>`
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  flex-wrap: wrap;
`;

const CreditInput__SettingContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15px;
`;

const CreditInput__SettingText = styled(H1)<{ bold: boolean }>`
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

const CreditInput__TotalCredit = styled(H1)`
  font-weight: bold;
`;
