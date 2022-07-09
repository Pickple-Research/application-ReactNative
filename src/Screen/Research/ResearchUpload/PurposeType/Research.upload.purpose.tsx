import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { ResearchUpload__SectionHeader__Container } from "../Research.upload.component";
import { SimpleDropDown, SimpleDropDownDataType } from "src/Component/DropDown";
import { SectionHeaderText } from "src/Component/Text";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";
import { ResearchPurpose } from "src/Object/Enum";
import { globalStyles } from "src/Style";
import { themeSizesNum } from "src/Theme";
import { ResearchPurposeDropDownData } from "src/Constant";

/**
 * 리서치 작성 페이지 두번째 단계의 리서치 진행 목적 입력란입니다.
 * @author 현웅
 */
export function ResearchUploadPurpose() {
  return (
    <Container>
      <SectionHeader />
      <PurposeInput />
    </Container>
  );
}

function SectionHeader() {
  return (
    <ResearchUpload__SectionHeader__Container>
      <SectionHeaderText title="리서치를 진행하시는 " bold={false} />
      <SectionHeaderText title="목적" />
      <SectionHeaderText title="을 알려주세요" bold={false} />
    </ResearchUpload__SectionHeader__Container>
  );
}

function PurposeInput() {
  const { purposeInput, setPurposeInput } = useResearchUploadScreenStore(
    state => ({
      purposeInput: state.purposeInput,
      setPurposeInput: state.setPurposeInput,
    }),
    shallow,
  );

  return (
    <PurposeInput__Container style={globalStyles.screen__horizontalPadding}>
      <SimpleDropDown
        data={ResearchPurposeDropDownData}
        onSelect={(selectedItem: SimpleDropDownDataType<ResearchPurpose>) => {
          setPurposeInput(selectedItem.value);
        }}
        props={{
          defaultButtonText: purposeInput
            ? purposeInput
            : "목적을 선택해주세요",
          buttonStyle: styles.dropdownButtonStyle,
          buttonTextStyle: styles.dropdownButtonTextStyle,
          dropdownStyle: styles.dropdownStyle,
          rowStyle: styles.dropdownRowStyle,
          rowTextStyle: styles.dropdownRowTextStyle,
        }}
      />
    </PurposeInput__Container>
  );
}

const Container = styled.View`
  margin-bottom: 30px;
`;

const PurposeInput__Container = styled.View``;

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    justifyContent: "flex-start",
    width: 180,
    backgroundColor: "white",
    paddingVertical: 3,
    paddingHorizontal: 5,
    //TODO: DESIGN-SYSTEM
    borderColor: "#cccccc",
    borderWidth: 1.5,
    borderRadius: 10,
  },

  dropdownButtonTextStyle: {
    fontSize: themeSizesNum.header2,
    marginLeft: 16,
    textAlign: "left",
  },

  dropdownStyle: {
    paddingHorizontal: 10,
    marginTop: 3,
    //TODO: DESIGN-SYSTEM
    borderColor: "#cccccc",
    borderWidth: 1.5,
    borderRadius: 10,
  },

  dropdownRowStyle: {
    justifyContent: "flex-start",
    height: 48,
  },

  dropdownRowTextStyle: {
    fontSize: themeSizesNum.header2,
    textAlign: "left",
  },
});
