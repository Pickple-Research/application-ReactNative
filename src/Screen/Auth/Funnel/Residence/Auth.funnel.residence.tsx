import { RadioButtonGroup } from "@Component/Radio";
import { theme } from "@Theme/theme";
import { useAuthFunnelScreenStore } from "@Zustand/Auth/auth.funnel.zustand";
import React, { useState } from "react";
import styled from "styled-components/native";

export function AuthFunnelResidence() {
  const { residence, setResidence } = useAuthFunnelScreenStore(state => ({
    residence: state.residenceInput,
    setResidence: state.setResidenceInput,
  }));

  const residences = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
  ];

  const [residenceSelected, setResidenceSelected] = useState<number>(-1);

  return (
    <Container>
      <TitleText>밍망님의 거주지역은 어디인가요?</TitleText>
      <RadioButtonGroup
        options={residences}
        selectedOptionIndexes={[residenceSelected]}
        onPress={optionIndex => {
          setResidenceSelected(optionIndex);
          setResidence(residences[optionIndex]);
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
  margin-top: 25px;
  margin-bottom: 13px;
  font-size: 14px;
  font-weight: 500;
`;
