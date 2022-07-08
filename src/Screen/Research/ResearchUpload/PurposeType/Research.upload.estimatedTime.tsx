import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { SimpleDropDown, SimpleDropDownDataType } from "src/Component/DropDown";
import { SectionHeaderText } from "src/Component/Text";
import { BodyText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style";
import { themeSizesNum } from "src/Theme";
import {
  ResearchEstimatedTimeDropDownData,
  CREDIT_PER_MINUTE,
} from "src/Constant";
import InfoIcon from "src/Resource/svg/Info-icon.svg";

/**
 * 리서치 작성 페이지 두번째 단계의 리서치 예상 소요 시간 입력란입니다.
 * @author 현웅
 */
export function ResearchUploadEstimatedTime() {
  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <SectionTitle />
      <EstimatedTimeInput />
    </Container>
  );
}

function SectionTitle() {
  return (
    <SectionTitle__Container>
      <SectionHeaderText title="예상 소요 시간" />
      <SectionHeaderText
        title="을 입력해주세요"
        bold={false}
        style={{ marginRight: 5 }}
      />
      <InfoIcon />
    </SectionTitle__Container>
  );
}

function EstimatedTimeInput() {
  const { estimatedTimeInput, setEstimatedTimeInput } =
    useResearchUploadScreenStore(
      state => ({
        estimatedTimeInput: state.estimatedTimeInput,
        setEstimatedTimeInput: state.setEstimatedTimeInput,
      }),
      shallow,
    );

  return (
    <EstimatedTimeInput__Container>
      <SimpleDropDown
        data={ResearchEstimatedTimeDropDownData}
        onSelect={(selectedItem: SimpleDropDownDataType<number>) => {
          setEstimatedTimeInput(selectedItem.value);
        }}
        props={{
          defaultButtonText: estimatedTimeInput
            ? estimatedTimeInput.toString()
            : "0",
          defaultValue: estimatedTimeInput,
          buttonStyle: styles.dropdownButtonStyle,
          buttonTextStyle: styles.dropdownButtonTextStyle,
          dropdownStyle: styles.dropdownStyle,
          rowStyle: styles.dropdownRowStyle,
          rowTextStyle: styles.dropdownRowTextStyle,
        }}
      />
      <SectionHeaderText title="분" bold={false} style={{ marginLeft: 12 }} />
      <EstimiatedTime__CreditText>
        {`${estimatedTimeInput * CREDIT_PER_MINUTE}크레딧이 차감됩니다.`}
      </EstimiatedTime__CreditText>
    </EstimatedTimeInput__Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;

const SectionTitle__Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const EstimatedTimeInput__Container = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
`;

const EstimiatedTime__CreditText = styled(BodyText)`
  position: absolute;
  right: 0px;
  bottom: -18px;
  color: ${({ theme }) => theme.color.blue.text};
  font-weight: bold;
`;

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    justifyContent: "center",
    width: 100,
    paddingVertical: 3,
    paddingHorizontal: 10,
    //TODO: DESIGN-SYSTEM
    borderRadius: 10,
  },

  dropdownButtonTextStyle: {
    fontSize: themeSizesNum.header2,
    marginLeft: 16,
    textAlign: "left",
  },

  dropdownStyle: {
    height: 210,
    paddingHorizontal: 10,
    marginTop: 3,
    borderRadius: 10,
  },

  dropdownRowStyle: {
    height: 48,
  },

  dropdownRowTextStyle: {
    fontSize: themeSizesNum.header2,
  },
});
