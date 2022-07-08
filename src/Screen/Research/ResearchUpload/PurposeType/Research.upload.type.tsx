import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { ResearchUpload__SectionHeader__Container } from "../Research.upload.component";
import { SimpleDropDown, SimpleDropDownDataType } from "src/Component/DropDown";
import { SectionHeaderText } from "src/Component/Text";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";
import { ResearchPurpose } from "src/Object/Enum";
import { themeSizesNum } from "src/Theme";
import { globalStyles } from "src/Style";
import { ResearchTypeDropDownData } from "src/Constant";

/**
 * 리서치 작성 페이지 두번째 단계의 리서치 유형 입력란입니다.
 * @author 현웅
 */
export function ResearchUploadType() {
  return (
    <Container>
      <SectionHeader />
      <TypeInput />
    </Container>
  );
}

function SectionHeader() {
  return (
    <ResearchUpload__SectionHeader__Container>
      <SectionHeaderText title="리서치 " bold={false} />
      <SectionHeaderText title="유형" />
      <SectionHeaderText title="을 선택해주세요" bold={false} />
    </ResearchUpload__SectionHeader__Container>
  );
}

function TypeInput() {
  const { typeInput, setTypeInput } = useResearchUploadScreenStore(
    state => ({
      typeInput: state.typeInput,
      setTypeInput: state.setTypeInput,
    }),
    shallow,
  );

  return (
    <TypeInput__Container style={globalStyles.screen__horizontalPadding}>
      <SimpleDropDown
        data={ResearchTypeDropDownData}
        onSelect={(selectedItem: SimpleDropDownDataType<ResearchPurpose>) => {
          setTypeInput(selectedItem.value);
        }}
        props={{
          defaultButtonText: typeInput ? typeInput : "유형을 선택해주세요",
          defaultValue: typeInput,
          buttonStyle: styles.dropdownButtonStyle,
          buttonTextStyle: styles.dropdownButtonTextStyle,
          dropdownStyle: styles.dropdownStyle,
          rowStyle: styles.dropdownRowStyle,
          rowTextStyle: styles.dropdownRowTextStyle,
        }}
      />
    </TypeInput__Container>
  );
}

const Container = styled.View`
  margin-bottom: 30px;
`;

const TypeInput__Container = styled.View``;

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
