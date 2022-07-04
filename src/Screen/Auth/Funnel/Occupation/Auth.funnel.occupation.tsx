import { RadioButtonGroup } from "@Component/Radio";
import { theme } from "@Theme/theme";
import { useAuthFunnelScreenStore } from "@Zustand/Auth/auth.funnel.zustand";
import React, { useState } from "react";
import styled from "styled-components/native";

export function AuthFunnelOccupation() {
  const { occupation, setOccupation } = useAuthFunnelScreenStore(state => ({
    occupation: state.occupationInput,
    setOccupation: state.setOccupationInput,
  }));

  const occupations = [
    "직장인이 아님",
    "기획/전략",
    "마케팅, PR",
    "재무, 회계",
    "IT 개발",
    "데이터",
    "경영일반, 사무",
    "인사, 노무",
    "영업",
    "고객상담",
    "디자인",
    "금융, 투자",
    "상품기획/MD",
    "법률, 법무",
    "연구개발",
    "자영업",
  ];

  const [occupationSelected, setOccupationSelected] = useState<number>(-1);

  return (
    <Container>
      <TitleText>현재 밍망님의 직종은 무엇인가요?</TitleText>
      <RadioButtonGroup
        options={occupations}
        selectedOptionIndexes={[occupationSelected]}
        onPress={optionIndex => {
          setOccupationSelected(optionIndex);
          setOccupation(occupations[optionIndex]);
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
