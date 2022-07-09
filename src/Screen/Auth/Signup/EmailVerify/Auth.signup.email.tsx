import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import {
  AuthTextInputName,
  AuthTextInput,
  AuthCautionText,
} from "src/Component/Auth";
import { RadiusButton } from "src/Component/Button";
import { SimpleDropDown, SimpleDropDownDataType } from "src/Component/DropDown";
import { H4 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useSignupScreenStore } from "src/Zustand";
import { themeColors, themeSizesNum } from "src/Theme";
import { globalStyles } from "src/Style";
import { SignupEmailDropDownData } from "src/Constant";

/**
 * 회원가입 0단계 - 이메일 입력 및 인증번호 전송 버튼 섹션입니다.
 * @author 현웅
 */
export function SignupEmail() {
  const {
    emailInput,
    setEmailInput,
    emailDomainInput,
    setEmailDomainInput,
    emailDomainDropdownInput,
    setEmailDomainDropdownInput,
    emailDuplicated,
    authCodeTransmitting,
    authCodeTransmitted,
    transmitAuthCode,
  } = useSignupScreenStore(
    state => ({
      emailInput: state.emailInput,
      setEmailInput: state.setEmailInput,
      emailDomainInput: state.emailDomainInput,
      setEmailDomainInput: state.setEmailDomainInput,
      emailDomainDropdownInput: state.emailDomainDropdownInput,
      setEmailDomainDropdownInput: state.setEmailDomainDropdownInput,
      emailDuplicated: state.emailDuplicated,
      authCodeTransmitting: state.authCodeTransmitting,
      authCodeTransmitted: state.authCodeTransmitted,
      transmitAuthCode: state.transmitAuthCode,
    }),
    shallow,
  );

  return (
    <Container style={globalStyles.authScreen__horizontalPadding}>
      <EmailInput />
      <Button />
      {authCodeTransmitted && <AuthCodeGuideText />}
    </Container>
  );
}

function EmailInput() {
  const {
    emailInput,
    setEmailInput,
    emailDomainInput,
    setEmailDomainInput,
    emailDomainDropdownInput,
    setEmailDomainDropdownInput,
    emailDuplicated,
    authCodeTransmitting,
    authCodeTransmitted,
    emailVerifyTried,
    emailVerified,
  } = useSignupScreenStore(
    state => ({
      emailInput: state.emailInput,
      setEmailInput: state.setEmailInput,
      emailDomainInput: state.emailDomainInput,
      setEmailDomainInput: state.setEmailDomainInput,
      emailDomainDropdownInput: state.emailDomainDropdownInput,
      setEmailDomainDropdownInput: state.setEmailDomainDropdownInput,
      emailDuplicated: state.emailDuplicated,
      authCodeTransmitting: state.authCodeTransmitting,
      authCodeTransmitted: state.authCodeTransmitted,
      emailVerifyTried: state.emailVerifyTried,
      emailVerified: state.emailVerified,
    }),
    shallow,
  );

  /** 이메일 입력값 수정 불가능 상태 */
  const emailUneditable =
    authCodeTransmitting || // 인증코드 전송 중이거나
    (authCodeTransmitted && !emailVerifyTried) || // 인증코드가 전송된 후 한번도 인증을 시도한 적이 없거나
    emailVerified; // 이메일이 인증된 경우

  return (
    <>
      <AuthTextInputName name="이메일" />
      <EmailInputContainer>
        <AuthTextInput
          style={{ flex: 4 }}
          props={{
            editable: !emailUneditable,
            textContentType: "emailAddress",
            value: emailInput,
            onChangeText: setEmailInput,
            maxLength: 50,
          }}
        />
        <At>{`  @  `}</At>

        <EmailDomainDropdownContainer>
          <SimpleDropDown
            data={SignupEmailDropDownData}
            onSelect={(selectedItem: SimpleDropDownDataType<string>) => {
              setEmailDomainDropdownInput(selectedItem.value);
            }}
            props={{
              disabled: !emailUneditable,
              defaultButtonText: " ",
              buttonStyle: styles.dropdownButtonStyle,
              buttonTextStyle: styles.dropdownButtonTextStyle,
              dropdownStyle: styles.dropdownStyle,
              rowStyle: styles.dropdownRowStyle,
              rowTextStyle: styles.dropdownRowTextStyle,
              //* 직접입력을 선택한 경우 드롭다운 메뉴 텍스트가 보이지 않게 설정합니다.
              buttonTextAfterSelection: (
                selectedItem: SimpleDropDownDataType<string>,
              ) => {
                if (selectedItem.displayName === "직접입력") return "";
                return selectedItem.displayName;
              },
            }}
          />
          {emailDomainDropdownInput === "" && (
            <AuthTextInput
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "80%",
                borderWidth: 0,
              }}
              props={{
                editable: !emailUneditable,
                placeholder: "직접입력",
                keyboardType: "email-address",
                value: emailDomainInput,
                onChangeText: setEmailDomainInput,
                maxLength: 50,
              }}
            />
          )}
        </EmailDomainDropdownContainer>
      </EmailInputContainer>
      <AuthCautionText
        text={`* 동일한 이메일이 존재합니다.`}
        style={{ marginBottom: 15 }}
        visible={emailDuplicated}
      />
    </>
  );
}

function Button() {
  const {
    emailInput,
    emailDomainInput,
    emailDomainDropdownInput,
    authCodeTransmitting,
    authCodeTransmitted,
    emailVerifyTried,
    transmitAuthCode,
  } = useSignupScreenStore(
    state => ({
      emailInput: state.emailInput,
      emailDomainInput: state.emailDomainInput,
      emailDomainDropdownInput: state.emailDomainDropdownInput,
      authCodeTransmitting: state.authCodeTransmitting,
      authCodeTransmitted: state.authCodeTransmitted,
      emailVerifyTried: state.emailVerifyTried,
      transmitAuthCode: state.transmitAuthCode,
    }),
    shallow,
  );

  /** 이메일 입력값 유효성 판별 */
  const hasValidEmailInput =
    Boolean(emailInput) &&
    (emailDomainInput !== "" || emailDomainDropdownInput !== "");

  //* 인증번호 전송 중
  if (authCodeTransmitting) {
    return (
      <RadiusButton loading text={`인증번호 전송 중`} type="PURPLE_CONFIRM" />
    );
  }

  //* 인증번호 전송 후 인증을 시도하지 않은 경우
  if (authCodeTransmitted && !emailVerifyTried) {
    return (
      <RadiusButton
        text={`인증번호가 전송되었습니다!`}
        type="PURPLE_INACTIVE"
      />
    );
  }

  //* 인증번호 전송 후 인증이 실패한 경우
  if (authCodeTransmitted && !emailVerifyTried) {
    //* 인증번호를 다시 보낼 수 있는 상황인 경우 (이메일 입력값 존재)
    if (hasValidEmailInput) {
      return (
        <RadiusButton
          text={`인증번호 재전송하기`}
          type="PURPLE_CONFIRM"
          onPress={() => {}}
        />
      );
    }
    return <RadiusButton text={`인증번호 재전송하기`} type="GREY" />;
  }

  //* 이메일 입력값이 존재하는 경우
  if (hasValidEmailInput) {
    return (
      <RadiusButton
        text={`인증번호 재전송하기`}
        type="PURPLE_CONFIRM"
        onPress={() => {}}
      />
    );
  }

  return <RadiusButton text={`이메일로 인증번호 보내기`} type="GREY" />;
}

function AuthCodeGuideText() {
  return (
    <AuthCautionText
      text={`이메일을 확인해주세요.\n만약 보이지 않는다면, 스팸 메일함을 확인해주세요`}
      style={{ marginTop: 8 }}
      color="BLUE"
      visible
    />
  );
}

const Container = styled.View`
  margin-bottom: 36px;
`;

const EmailInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const At = styled(H4)`
  font-weight: bold;
`;

const EmailDomainDropdownContainer = styled.View`
  position: relative;
  flex-direction: row;
  flex: 7;
  height: 100%;
`;

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    backgroundColor: "white",
    paddingVertical: 6,
    //TODO: #DESIGN-SYSTEM
    borderColor: themeColors().purple.text,
    borderWidth: 1,
    borderRadius: 10,
  },

  dropdownButtonTextStyle: {
    fontSize: themeSizesNum.header3,
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
    fontSize: themeSizesNum.header3,
    textAlign: "left",
  },
});
