import React from "react";
import styled from "styled-components/native";
import { AuthTextInputName, AuthTextInput } from "src/Component/Auth";
import { H2 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useUserStore, useAuthFunnelScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style";

export function AuthFunnelEducation() {
  const user = useUserStore(state => state.user);

  return (
    <Container style={globalStyles.funnelScreen__horizontalPadding}>
      <TitleText>{`${user.nickname}님의 학력을 입력해주세요.`}</TitleText>
      <InputsContainer>
        <SchoolInput />
        <DegreeInput />
        <MajorInput />
        <AdmissionGraduationYearInput />
      </InputsContainer>
    </Container>
  );
}

function SchoolInput() {
  const { schoolInput, setSchoolInput } = useAuthFunnelScreenStore(
    state => ({
      schoolInput: state.schoolInput,
      setSchoolInput: state.setSchoolInput,
    }),
    shallow,
  );
  return (
    <Input__Container>
      <AuthTextInputName name="학교" />
      <AuthTextInput
        props={{
          value: schoolInput,
          placeholder: "예) 서울대학교",
          onChangeText: setSchoolInput,
          maxLength: 32,
        }}
      />
    </Input__Container>
  );
}

function DegreeInput() {
  const { degreeInput, setDegreeInput } = useAuthFunnelScreenStore(
    state => ({
      degreeInput: state.degreeInput,
      setDegreeInput: state.setDegreeInput,
    }),
    shallow,
  );
  return (
    <Input__Container>
      <AuthTextInputName name="학위" />
      <AuthTextInput
        props={{
          value: degreeInput,
          placeholder: "예) 학사",
          onChangeText: setDegreeInput,
          maxLength: 32,
        }}
      />
    </Input__Container>
  );
}

function MajorInput() {
  const { majorInput, setMajorInput } = useAuthFunnelScreenStore(
    state => ({
      majorInput: state.majorInput,
      setMajorInput: state.setMajorInput,
    }),
    shallow,
  );
  return (
    <Input__Container>
      <AuthTextInputName name="전공" />
      <AuthTextInput
        props={{
          value: majorInput,
          placeholder: "예) 경영학",
          onChangeText: setMajorInput,
          maxLength: 32,
        }}
      />
    </Input__Container>
  );
}

function AdmissionGraduationYearInput() {
  const {
    admissionYearInput,
    graduationYearInput,
    handleAdmissionYearInput,
    handleGraduationYearInput,
  } = useAuthFunnelScreenStore(
    state => ({
      admissionYearInput: state.admissionYearInput,
      graduationYearInput: state.graduationYearInput,
      handleAdmissionYearInput: state.handleAdmissionYearInput,
      handleGraduationYearInput: state.handleGraduationYearInput,
    }),
    shallow,
  );
  return (
    <AdmissionGraduationYear__Container>
      <AdmissionYear__Container>
        <AuthTextInputName name="입학" />
        <AuthTextInput
          props={{
            value: admissionYearInput,
            placeholder: "입학년도",
            keyboardType: "numeric",
            onChangeText: handleAdmissionYearInput,
            maxLength: 4,
          }}
        />
      </AdmissionYear__Container>
      <Input__Splitter />
      <GraduationYear__Container>
        <AuthTextInputName name="졸업" />
        <AuthTextInput
          props={{
            value: graduationYearInput,
            placeholder: "졸업년도",
            keyboardType: "numeric",
            onChangeText: handleGraduationYearInput,
            maxLength: 4,
          }}
        />
      </GraduationYear__Container>
    </AdmissionGraduationYear__Container>
  );
}

const Container = styled.View`
  padding-top: 25px;
`;

const TitleText = styled(H2)`
  color: ${({ theme }) => theme.color.purple.deep};
  margin-bottom: 21px;
`;

const InputsContainer = styled.View`
  padding: 0px 12px;
`;

const Input__Container = styled.View`
  margin-bottom: 21px;
`;

const AdmissionGraduationYear__Container = styled(Input__Container)`
  flex-direction: row;
`;

const AdmissionYear__Container = styled.View`
  flex: 1;
`;

const GraduationYear__Container = styled.View`
  flex: 1;
`;

const Input__Splitter = styled.View`
  width: 12px;
`;
