import { FollowingPartnerCarousel } from "@Component/Partner";
import { RadioButton, RadioButtonGroup } from "@Component/Radio";
import { theme } from "@Theme/theme";
import { useAuthFunnelScreenStore } from "@Zustand/Auth/auth.funnel.zustand";
import React, { useState } from "react";
import styled from "styled-components/native";

export function AuthFunnelJob() {
  const { jobInput, setJobInput } = useAuthFunnelScreenStore(state => ({
    jobInput: state.jobInput,
    setJobInput: state.setJobInput,
  }));

  const jobs = [
    "중 고등학생",
    "대학(원)생",
    "풀타임 직장인",
    "파트타임 직장인",
    "프리랜서",
    "자영업자",
    "전업주부",
    "무직 및 기타",
  ];

  const [jobSelected, setJobSelected] = useState<number>(-1);

  return (
    <Container>
      <TitleText>현재 밍망님의 직업은 무엇인가요?</TitleText>
      <RadioButtonGroup
        options={jobs}
        selectedOptionIndexes={[jobSelected]}
        onPress={optionIndex => {
          setJobSelected(optionIndex);
          setJobInput(jobs[optionIndex]);
        }}
        buttonStyle={{
          borderWidth: 1,
          borderRadius: 2,
          borderColor: theme.color.purple.main,
          padding: 9,
          marginVertical: 0,
        }}
        style={{ marginHorizontal: 5 }}
        selectedStyle={{
          backgroundColor: theme.color.purple.pastel,
          elevation: 4,
        }}
        textStyle={{ color: "#594E96" }}
        withIcon={false}
      />
    </Container>
  );
}

const Container = styled.View``;
const TitleText = styled.Text`
  color: ${({ theme }) => theme.color.purple.deep};
  margin-top: 40px;
  margin-bottom: 13px;
  font-size: 14px;
  font-weight: 500;
`;
