import React from "react";
import styled from "styled-components/native";
import { CheckIcon } from "src/Component/Svg";
import { BodyText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useAuthSignupStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

export function SignupAgreement() {
  const { agreeTerms, toggleAgreeTerms, agreeMarketing, toggleAgreeMarketing } =
    useAuthSignupStore(
      state => ({
        agreeTerms: state.agreeTerms,
        toggleAgreeTerms: state.toggleAgreeTerms,
        agreeMarketing: state.agreeMarketing,
        toggleAgreeMarketing: state.toggleAgreeMarketing,
      }),
      shallow,
    );

  return (
    <Container style={globalStyles.authScreen__horizontalPadding}>
      <Row>
        <Checkbox checked={agreeTerms} onPress={toggleAgreeTerms}>
          <CheckIcon color={agreeTerms ? "white" : "#bbbbbb"} />
        </Checkbox>
        <AgreementOption__Text>{`[필수]`}</AgreementOption__Text>

        <Agreement__Text>{`픽플리의 이용약관과 개인정보 처리방침에 동의합니다. `}</Agreement__Text>
        <ShowAgreement__Text>내용 보기</ShowAgreement__Text>
      </Row>

      <Row>
        <Checkbox checked={agreeMarketing} onPress={toggleAgreeMarketing}>
          <CheckIcon color={agreeMarketing ? "white" : "#bbbbbb"} />
        </Checkbox>
        <AgreementOption__Text>{`[선택]`}</AgreementOption__Text>
        <Agreement__Text>{`서비스 정보 수신에 동의합니다. `}</Agreement__Text>
        <ShowAgreement__Text>내용 보기</ShowAgreement__Text>
      </Row>
    </Container>
  );
}

const Container = styled.View``;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Checkbox = styled.TouchableOpacity<{ checked: boolean }>`
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.color.purple.text : theme.color.grey.white};
  border: ${({ checked }) => (checked ? `none` : `1.2px solid #bbbbbb`)};
  border-radius: 3px;
`;

const AgreementOption__Text = styled(BodyText)`
  color: ${({ theme }) => theme.color.grey.main};
  font-weight: bold;
  padding-left: 8px;
  padding-right: 4px;
`;

const Agreement__Text = styled(BodyText)`
  flex: 1;
  color: ${({ theme }) => theme.color.grey.main};
  font-weight: bold;
  padding-right: 8px;
`;

const ShowAgreement__Text = styled(BodyText)`
  //TODO: #DESIGN-SYSTEM
  color: #807f7f;
  text-decoration: underline;
`;
