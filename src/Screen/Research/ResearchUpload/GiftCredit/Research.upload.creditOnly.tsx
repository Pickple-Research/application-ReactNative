import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { SimpleDropDown, SimpleDropDownDataType } from "src/Component/DropDown";
import { H1, H2, H3, BodyText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style";
import { themeSizesNum } from "src/Theme";
import {
  ResearchExtraCreditReceiverDropDownData,
  ResearchExtraCreditDropDownData,
} from "src/Constant";
import { CheckIcon } from "src/Component/Svg";

/**
 * 리서치 업로드 페이지 크레딧 입력 섹션입니다.
 * 기프티콘 업로드 기능이 추가되면 이 모듈 대신 ResearchUploadCredit() 을 사용하면 됩니다.
 * @author 현웅
 */
export function ResearchUploadCreditOnly() {
  return (
    <Container>
      <StepHeader />
      <CreditDescription />
      <CreditInput />
      <TotalCredit />
      <SelectExtraCredit />
    </Container>
  );
}

function StepHeader() {
  return (
    <StepHeader__Container style={globalStyles.screen__horizontalPadding}>
      <StepHeader__Text bold={true}>경품용 추가 크레딧</StepHeader__Text>
      <StepHeader__Text bold={false}>을 입력해주세요</StepHeader__Text>
    </StepHeader__Container>
  );
}

function CreditDescription() {
  return (
    <CreditDescription__Container
      style={globalStyles.screen__horizontalPadding}>
      {/* <CreditDescription__Text bold={false}>
        기프티콘 대신 크레딧으로 참여자분들께 감사의미를 전달할 수 있습니다.
      </CreditDescription__Text> */}
      <CreditDescription__Text bold={false}>
        {` 기프티콘 대신 `}
      </CreditDescription__Text>
      <CreditDescription__Text bold={true}>크레딧</CreditDescription__Text>
      <CreditDescription__Text bold={false}>
        {`으로 참여자분들께 `}
      </CreditDescription__Text>
      <CreditDescription__Text bold={false}>
        {`감사의미를 `}
      </CreditDescription__Text>
      <CreditDescription__Text bold={false}>
        {`전달할 수 `}
      </CreditDescription__Text>
      <CreditDescription__Text bold={false}>
        {`있습니다.`}
      </CreditDescription__Text>
    </CreditDescription__Container>
  );
}

function CreditInput() {
  const { setCreditReceiverNum, setExtraCredit, giveExtraCredit } =
    useResearchUploadScreenStore(
      state => ({
        setExtraCredit: state.setExtraCredit,
        setCreditReceiverNum: state.setCreditReceiverNum,
        giveExtraCredit: state.giveExtraCredit,
      }),
      shallow,
    );

  return (
    <CreditInput__Container style={globalStyles.screen__horizontalPadding}>
      {/* ? 명에게 ? C 씩 추천 지급 */}
      <SimpleDropDown
        data={ResearchExtraCreditReceiverDropDownData}
        onSelect={(selectedItem: SimpleDropDownDataType<number>) => {
          setCreditReceiverNum(selectedItem.value);
        }}
        props={{
          disabled: !giveExtraCredit,
          defaultValueByIndex: 1,
          buttonStyle: styles.dropdownButtonStyle,
          buttonTextStyle: giveExtraCredit
            ? styles.dropdownButtonTextStyle
            : styles.dropdownDisabledButtonTextStyle,
          dropdownStyle: styles.dropdownStyle,
          rowStyle: styles.dropdownRowStyle,
          rowTextStyle: styles.dropdownRowTextStyle,
        }}
      />
      <CreditInput__SettingText bold={true}>{`  명 `}</CreditInput__SettingText>
      <CreditInput__SettingText
        bold={false}>{`에게  `}</CreditInput__SettingText>

      <SimpleDropDown
        data={ResearchExtraCreditDropDownData}
        onSelect={(selectedItem: SimpleDropDownDataType<number>) => {
          setExtraCredit(selectedItem.value);
        }}
        props={{
          disabled: !giveExtraCredit,
          defaultValueByIndex: 0,
          buttonStyle: styles.dropdownButtonStyle,
          buttonTextStyle: giveExtraCredit
            ? styles.dropdownButtonTextStyle
            : styles.dropdownDisabledButtonTextStyle,
          dropdownStyle: styles.dropdownStyle,
          rowStyle: styles.dropdownRowStyle,
          rowTextStyle: styles.dropdownRowTextStyle,
        }}
      />
      <CreditInput__SettingText bold={true}>{`  C `}</CreditInput__SettingText>
      <CreditInput__SettingText bold={false}>
        씩 추첨 지급
      </CreditInput__SettingText>
    </CreditInput__Container>
  );
}

function TotalCredit() {
  const { creditReceiverNum, extraCredit, giveExtraCredit } =
    useResearchUploadScreenStore(
      state => ({
        extraCredit: state.extraCredit,
        creditReceiverNum: state.creditReceiverNum,
        giveExtraCredit: state.giveExtraCredit,
      }),
      shallow,
    );

  return (
    <TotalCredit__Container style={globalStyles.screen__horizontalPadding}>
      <TotalCredit__TextContainer giveExtraCredit={giveExtraCredit}>
        <TotalCredit__Text>{` = 총 ${
          creditReceiverNum * extraCredit
        } C`}</TotalCredit__Text>

        <TotalCredit__SubText>
          {`${creditReceiverNum * extraCredit}크레딧이 차감됩니다.`}
        </TotalCredit__SubText>
      </TotalCredit__TextContainer>
    </TotalCredit__Container>
  );
}

function SelectExtraCredit() {
  const { giveExtraCredit, toggleGiveExtraCredit } =
    useResearchUploadScreenStore(
      state => ({
        giveExtraCredit: state.giveExtraCredit,
        toggleGiveExtraCredit: state.toggleGiveExtraCredit,
      }),
      shallow,
    );

  return (
    <SelectExtraCredit__Container
      onPress={toggleGiveExtraCredit}
      style={globalStyles.screen__horizontalPadding}>
      <SelectExtraCredit__IconContainer giveExtraCredit={giveExtraCredit}>
        <CheckIcon width="12" height="8" />
      </SelectExtraCredit__IconContainer>
      <SelectExtraCredit__Text giveExtraCredit={giveExtraCredit}>
        선택 안 함
      </SelectExtraCredit__Text>
    </SelectExtraCredit__Container>
  );
}

const Container = styled.View``;

// StepHeader()
const StepHeader__Container = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

const StepHeader__Text = styled(H2)<{ bold: boolean }>`
  color: ${({ theme }) => theme.color.grey.deep};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

// CreditDescription()
const CreditDescription__Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const CreditDescription__Text = styled(H3)<{ bold: boolean }>`
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  flex-wrap: wrap;
`;

// CreditInput()
const CreditInput__Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  //TODO: #DESIGN-SYSTEM
  background-color: #fafafa;
  padding-top: 21px;
  padding-bottom: 16px;
`;

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    justifyContent: "flex-start",
    width: 80,
    //TODO: #DESIGN-SYSTEM
    backgroundColor: "#eeeeee",
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 10,
  },

  dropdownButtonTextStyle: {
    fontSize: themeSizesNum.header2,
    marginLeft: 16,
    textAlign: "left",
  },

  dropdownDisabledButtonTextStyle: {
    fontSize: themeSizesNum.header2,
    marginLeft: 16,
    textAlign: "left",
    //TODO: DESIGN-SYSTEM
    color: "#cccccc",
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
    height: 48,
  },

  dropdownRowTextStyle: {
    fontSize: themeSizesNum.header2,
  },
});

const CreditInput__SettingText = styled(H1)<{ bold: boolean }>`
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

// TotalCredit()
const TotalCredit__Container = styled.View`
  //TODO: #DESIGN-SYSTEM
  background-color: #eeeeee;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const TotalCredit__TextContainer = styled.View<{ giveExtraCredit: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  opacity: ${({ giveExtraCredit }) => (giveExtraCredit ? 1 : 0)};
`;

const TotalCredit__Text = styled(H1)`
  font-weight: bold;
`;

const TotalCredit__SubText = styled(BodyText)`
  color: ${({ theme }) => theme.color.blue.text};
`;

// SelectExtraCredit()
const SelectExtraCredit__Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const SelectExtraCredit__IconContainer = styled.View<{
  giveExtraCredit: boolean;
}>`
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  background-color: ${({ giveExtraCredit, theme }) =>
    //TODO: DESIGN-SYSTEM
    giveExtraCredit ? "#D9D9D9" : theme.color.grey.icon};
  border-radius: 100px;
  margin-right: 16px;
`;

const SelectExtraCredit__Text = styled(H2)<{ giveExtraCredit: boolean }>`
  color: ${({ giveExtraCredit, theme }) =>
    //TODO: DESIGN-SYSTEM
    giveExtraCredit ? "#D9D9D9" : theme.color.grey.icon};
`;
