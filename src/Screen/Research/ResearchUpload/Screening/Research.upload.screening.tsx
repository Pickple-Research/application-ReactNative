import React from "react";
import styled from "styled-components/native";
import { ResearchUploadSubStepHeader } from "../Research.upload.subStepHeader";
import { H2, H3, H4 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";
import { Gender, AgeGroup } from "src/Object/Enum";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 업로드 페이지 스크리닝 설정 섹션입니다.
 * @author 현웅
 */
export function ResearchUploadScreening() {
  return (
    <Container>
      <Description />
      <ChooseGender />
      <ChooseAgeGroup />
    </Container>
  );
}

/**
 * 스크리닝 기능 설명
 * @author 현웅
 */
function Description() {
  return (
    <Description__Container style={globalStyles.screen__horizontalPadding}>
      <Description__Text bold={true}>최소 참여 조건</Description__Text>
      <Description__Text bold={false}>{`을 설정하여 `}</Description__Text>
      <Description__Text bold={true}>해당되는 사람만 참여</Description__Text>
      <Description__Text bold={false}>할 수</Description__Text>
      <Description__Text bold={false}>{` 있도록 `}</Description__Text>
      <Description__Text bold={false}>
        스크리닝하는 부가 기능입니다.
      </Description__Text>
    </Description__Container>
  );
}

/**
 * 스크리닝 성별 선택
 * @author 현웅
 */
function ChooseGender() {
  const { targetGendersInput, setTargetGenderInput } =
    useResearchUploadScreenStore(
      state => ({
        targetGendersInput: state.targetGendersInput,
        setTargetGenderInput: state.setTargetGendersInput,
      }),
      shallow,
    );

  const genders = [
    { value: undefined, displayName: "상관없음" },
    { value: Gender.MALE, displayName: "남성" },
    { value: Gender.FEMALE, displayName: "여성" },
  ];

  return (
    <ChooseSex__Container>
      <ResearchUploadSubStepHeader>
        <SubStep__Text>성별</SubStep__Text>
        <SubStep__SubText>{`(기본제공)`}</SubStep__SubText>
      </ResearchUploadSubStepHeader>
      <SelectButtonList__Container
        style={globalStyles.screen__horizontalPadding}>
        {genders.map((gender, index) => {
          return (
            <SelectButton
              key={`${index}:${gender.displayName}`}
              displayName={gender.displayName}
              selected={
                gender.value === undefined
                  ? targetGendersInput.length === 0
                  : targetGendersInput.includes(gender.value)
              }
              onPress={() => {
                setTargetGenderInput(gender.value);
              }}
            />
          );
        })}
      </SelectButtonList__Container>
    </ChooseSex__Container>
  );
}

/**
 * 스크리닝 연령 선택
 * @author 현웅
 */
function ChooseAgeGroup() {
  const { targetAgeGroupsInput, toggleTargetAgeGroupInput } =
    useResearchUploadScreenStore(
      state => ({
        targetAgeGroupsInput: state.targetAgeGroupsInput,
        toggleTargetAgeGroupInput: state.toggleTargetAgeGroupsInput,
      }),
      shallow,
    );

  const ageGroups = [
    { value: undefined, displayName: "상관없음" },
    { value: AgeGroup.TEEN, displayName: "10대" },
    { value: AgeGroup.TWENTY, displayName: "20대" },
    { value: AgeGroup.THIRTY, displayName: "30대" },
    { value: AgeGroup.FOURTY, displayName: "40대" },
    { value: AgeGroup.FIFTY, displayName: "50대" },
    { value: AgeGroup.SIXTY, displayName: "60대" },
    { value: AgeGroup.SEVENTY, displayName: "70대 이상" },
  ];

  return (
    <ChooseAge__Container>
      <ResearchUploadSubStepHeader>
        <SubStep__Text>연령</SubStep__Text>
        <SubStep__SubText>{`(선택 시 5크레딧)`}</SubStep__SubText>
      </ResearchUploadSubStepHeader>
      <SelectButtonList__Container
        style={globalStyles.screen__horizontalPadding}>
        {ageGroups.map((ageGroup, index) => {
          return (
            <SelectButton
              key={`${index}:${ageGroup.displayName}`}
              displayName={ageGroup.displayName}
              selected={
                ageGroup.value === undefined
                  ? targetAgeGroupsInput.length === 0
                  : targetAgeGroupsInput.includes(ageGroup.value)
              }
              onPress={() => {
                toggleTargetAgeGroupInput(ageGroup.value);
              }}
            />
          );
        })}
      </SelectButtonList__Container>
    </ChooseAge__Container>
  );
}

/**
 * 스크리닝 대상 선택 버튼
 * @author 현웅
 */
function SelectButton({
  displayName,
  selected,
  onPress,
}: {
  displayName: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <SelectButton__Container selected={selected} onPress={onPress}>
      <SelectButton__Content selected={selected}>
        {displayName}
      </SelectButton__Content>
    </SelectButton__Container>
  );
}

const Container = styled.View`
  margin-bottom: 20px;
`;

// Description()
const Description__Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Description__Text = styled(H3)<{ bold: boolean }>`
  font-weight: ${props => (props.bold ? "bold" : "normal")};
`;

// ChooseSex()
const ChooseSex__Container = styled.View`
  margin-bottom: 20px;
`;

// ChooseAge()
const ChooseAge__Container = styled.View`
  margin-bottom: 20px;
`;

// SelectButton()
//TODO: #PILL-BUTTON
const SelectButton__Container = styled.TouchableOpacity<{ selected: boolean }>`
  padding: 9px 18px;
  margin: 5px 3px;
  border: 1px solid
    ${({ selected, theme }) => (selected ? theme.color.blue.main : "#dddddd")};
  border-radius: 100px;
`;

const SelectButton__Content = styled(H2)<{ selected: boolean }>`
  color: ${({ selected, theme }) =>
    selected ? theme.color.blue.main : "#dddddd"};
`;

// 공통 컴포넌트
const SubStep__Text = styled(H2)`
  font-weight: bold;
  color: ${({ theme }) => theme.color.grey.deep};
  margin-right: 8px;
`;

const SubStep__SubText = styled(H4)`
  color: ${({ theme }) => theme.color.grey.deep};
`;

const SelectButtonList__Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 8px;
`;
