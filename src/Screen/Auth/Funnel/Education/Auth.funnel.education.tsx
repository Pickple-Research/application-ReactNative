import { SimpleDropDown, SimpleDropDownDataType } from "@Component/DropDown";
import { theme } from "@Theme/theme";
import { useAuthFunnelScreenStore } from "@Zustand/Auth/auth.funnel.zustand";
import React from "react";
import { TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import styled from "styled-components/native";

export function AuthFunnelEducation() {
  return (
    <Container>
      <TitleText>밍망님의 학력을 입력해주세요.</TitleText>
      <SchoolInput />
      <DegreeInput />
      <MajorInput />
      <AdmissionGraduationYearInput />
    </Container>
  );
}

function SchoolInput() {
  const { school, setSchool } = useAuthFunnelScreenStore(state => ({
    school: state.schoolInput,
    setSchool: state.setSchoolInput,
  }));
  return (
    <SchoolInput__Container>
      <HeadText>학교</HeadText>
      <Input
        placeholder="예) 서울대학교"
        placeholderTextColor={theme.color.purple.inactive}
        onChangeText={text => setSchool(text)}
      />
    </SchoolInput__Container>
  );
}

function DegreeInput() {
  const { degree, setDegree } = useAuthFunnelScreenStore(state => ({
    degree: state.degreeInput,
    setDegree: state.setDegreeInput,
  }));
  return (
    <DegreeInput__Container>
      <HeadText>학위</HeadText>
      <Input
        placeholder="예) 학사"
        placeholderTextColor={theme.color.purple.inactive}
        onChangeText={text => {
          setDegree(text);
        }}
      />
    </DegreeInput__Container>
  );
}

function MajorInput() {
  const { major, setMajor } = useAuthFunnelScreenStore(state => ({
    major: state.majorInput,
    setMajor: state.setMajorInput,
  }));
  return (
    <MajorInput__Container>
      <HeadText>전공</HeadText>
      <Input
        placeholder="예) 경영학"
        placeholderTextColor={theme.color.purple.inactive}
        onChangeText={text => {
          setMajor(text);
        }}
      />
    </MajorInput__Container>
  );
}

function AdmissionGraduationYearInput() {
  const { admissionYear, graduationYear, setAdmissionYear, setGraduationYear } =
    useAuthFunnelScreenStore(state => ({
      admissionYear: state.admissionYearInput,
      graduationYear: state.graduationYearInput,
      setAdmissionYear: state.setAdmissionYearInput,
      setGraduationYear: state.setGraduationYearInput,
    }));
  return (
    <AdmissionGraduationYear__Container>
      <AdmissionYear__Container>
        <HeadText>입학</HeadText>
        <Input
          placeholder="입학년도"
          placeholderTextColor={theme.color.purple.inactive}
          onChangeText={text => {
            const num = Number.parseInt(text);
            setAdmissionYear(num);
          }}
        />
      </AdmissionYear__Container>
      <GraduationYear__Container>
        <HeadText>졸업</HeadText>
        <Input
          placeholder="졸업년도"
          placeholderTextColor={theme.color.purple.inactive}
          onChangeText={text => {
            const num = Number.parseInt(text);
            setGraduationYear(num);
          }}
        />
      </GraduationYear__Container>
    </AdmissionGraduationYear__Container>
  );
}
const Container = styled.View``;
const TitleText = styled.Text`
  color: ${({ theme }) => theme.color.purple.deep};
  margin-top: 25px;
  margin-bottom: 13px;
  font-size: 14px;
  font-weight: 500;
`;

const HeadText = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: 500;
`;

const SchoolInput__Container = styled.View`
  margin: 10px 0px;
`;
const DegreeInput__Container = styled.View`
  margin: 10px 0px;
`;
const MajorInput__Container = styled.View`
  margin: 10px 0px;
`;
const AdmissionGraduationYear__Container = styled.View`
  flex-direction: row;
  margin: 10px 0px;
`;

const AdmissionYear__Container = styled.View`
  flex: 1;
`;
const GraduationYear__Container = styled.View`
  flex: 1;
`;

const Input = styled.TextInput`
  height: 40px;
  padding: 0px 10px;
  margin: 7px 10px 0px 5px;
  color: black;
  border: 1px #8f84d0 solid;
  border-radius: 10px;
`;
