import React from "react";
import styled from "styled-components/native";
import {
  BottomButton__ButtonContainer,
  BottomButton__Container,
} from "src/StyledComponents/View";
import { H2 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useAuthFunnelScreenStore } from "src/Zustand";

export function AuthFunnelBottomButton() {
  const step = useAuthFunnelScreenStore(state => state.step);
  switch (step) {
    case 0:
      return <JobStepButton />;
    case 1:
      return <OccupationStepButton />;
    case 2:
      return <EducationStepButton />;
    case 3:
      return <ResidenceStepButton />;
    case 4:
      return <InterestsStepButton />;
    case 5:
      return <InfluxStepButton />;
  }
  return null;
}

function JobStepButton() {
  const { goNextStep, jobInput } = useAuthFunnelScreenStore(
    state => ({
      goNextStep: state.goNextStep,
      jobInput: state.jobInput,
    }),
    shallow,
  );

  const available = Boolean(jobInput);
  return (
    <Container>
      <Button__Container
        onPress={available ? goNextStep : undefined}
        available={available}>
        <Button__Text available={available}>다음</Button__Text>
      </Button__Container>
    </Container>
  );
}

function OccupationStepButton() {
  const { goNextStep, occupationInput } = useAuthFunnelScreenStore(
    state => ({
      goNextStep: state.goNextStep,
      occupationInput: state.occupationInput,
    }),
    shallow,
  );

  const available = Boolean(occupationInput);

  return (
    <Container>
      <Button__Container
        onPress={available ? goNextStep : undefined}
        available={available}>
        <Button__Text available={available}>다음</Button__Text>
      </Button__Container>
    </Container>
  );
}

function EducationStepButton() {
  const {
    goNextStep,
    schoolInput,
    degreeInput,
    majorInput,
    admissionYearInput,
    graduationYearInput,
  } = useAuthFunnelScreenStore(
    state => ({
      goNextStep: state.goNextStep,
      schoolInput: state.schoolInput,
      degreeInput: state.degreeInput,
      majorInput: state.majorInput,
      admissionYearInput: state.admissionYearInput,
      graduationYearInput: state.graduationYearInput,
    }),
    shallow,
  );

  const available =
    Boolean(schoolInput) &&
    Boolean(degreeInput) &&
    Boolean(majorInput) &&
    admissionYearInput.length === 4 &&
    graduationYearInput.length === 4;

  return (
    <Container>
      <Button__Container
        onPress={available ? goNextStep : undefined}
        available={available}>
        <Button__Text available={available}>다음</Button__Text>
      </Button__Container>
    </Container>
  );
}

function ResidenceStepButton() {
  const { goNextStep, residenceInput } = useAuthFunnelScreenStore(
    state => ({
      goNextStep: state.goNextStep,
      residenceInput: state.residenceInput,
    }),
    shallow,
  );

  const available = Boolean(residenceInput);

  return (
    <Container>
      <Button__Container
        onPress={available ? goNextStep : undefined}
        available={available}>
        <Button__Text available={available}>다음</Button__Text>
      </Button__Container>
    </Container>
  );
}

function InterestsStepButton() {
  const { goNextStep, interestsInput } = useAuthFunnelScreenStore(
    state => ({
      goNextStep: state.goNextStep,
      interestsInput: state.interestsInput,
    }),
    shallow,
  );

  const available = Boolean(interestsInput) && interestsInput.length > 0;

  return (
    <Container>
      <Button__Container
        onPress={available ? goNextStep : undefined}
        available={available}>
        <Button__Text available={available}>다음</Button__Text>
      </Button__Container>
    </Container>
  );
}

function InfluxStepButton() {
  const { goNextStep, influxInput, sendFunnelData } = useAuthFunnelScreenStore(
    state => ({
      goNextStep: state.goNextStep,
      influxInput: state.influxInput,
      sendFunnelData: state.sendFunnelData,
    }),
    shallow,
  );

  const available = Boolean(influxInput);

  return (
    <Container>
      <Button__Container
        onPress={available ? sendFunnelData : undefined}
        available={available}>
        <Button__Text available={available}>완료</Button__Text>
      </Button__Container>
    </Container>
  );
}

const Container = styled(BottomButton__Container)``;

const Button__Container = styled(BottomButton__ButtonContainer)<{
  available: boolean;
}>`
  background-color: ${({ available, theme }) =>
    available ? theme.color.purple.main : "#eeeeee"};
`;

const Button__Text = styled(H2)<{ available: boolean }>`
  color: ${({ available, theme }) =>
    available ? theme.color.grey.white : "#cccccc"};
`;
