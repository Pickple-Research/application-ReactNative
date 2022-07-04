import { RadioButtonGroup } from "@Component/Radio";
import { theme } from "@Theme/theme";
import { useAuthFunnelScreenStore } from "@Zustand/Auth/auth.funnel.zustand";
import React, { useState } from "react";
import styled from "styled-components/native";

export function AuthFunnelInflux() {
  const { influx, setInflux } = useAuthFunnelScreenStore(state => ({
    influx: state.influxInput,
    setInflux: state.setInfluxInput,
  }));

  const influxes = [
    "인스타그램 광고",
    "평소 스타트업에 관심이 있어서",
    "평소 리서치에 관심이 있어서",
    "지인 추천",
    "리서치를 올리기 위해서",
    "기타",
  ];

  const [influxSelected, setInfluxSelected] = useState<number>(-1);

  return (
    <Container>
      <TitleText>픽플리를 어떻게 알고 오셨나요?</TitleText>
      <RadioButtonGroup
        options={influxes}
        selectedOptionIndexes={[influxSelected]}
        onPress={optionIndex => {
          setInfluxSelected(optionIndex);
          setInflux(influxes[optionIndex]);
        }}
        buttonStyle={{
          borderWidth: 1,
          borderRadius: 2,
          borderColor: theme.color.purple.main,
          padding: 9,
          marginVertical: 0,
        }}
        selectedStyle={{
          backgroundColor: theme.color.purple.pastel,
          elevation: 4,
        }}
        style={{ marginHorizontal: 5 }}
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
