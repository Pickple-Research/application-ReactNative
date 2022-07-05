import React from "react";
import styled from "styled-components/native";
import { AuthFunnelOption } from "src/Component/Auth";
import { H2 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useAuthFunnelScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style";
import { Influxes } from "src/Constant";

export function AuthFunnelInflux() {
  const { influxInput, setInfluxInput } = useAuthFunnelScreenStore(
    state => ({
      influxInput: state.influxInput,
      setInfluxInput: state.setInfluxInput,
    }),
    shallow,
  );

  return (
    <Container style={globalStyles.funnelScreen__horizontalPadding}>
      <TitleText>픽플리를 어떻게 알고 오셨나요?</TitleText>
      <OptionListContainer>
        {Influxes.map((influx, index) => {
          return (
            <AuthFunnelOption
              key={`${index}: ${influx}`}
              text={influx}
              selected={influxInput === influx}
              onPress={() => {
                setInfluxInput(influx);
              }}
            />
          );
        })}
      </OptionListContainer>
    </Container>
  );
}

const Container = styled.View`
  padding-top: 25px;
`;

const TitleText = styled(H2)`
  color: ${({ theme }) => theme.color.purple.deep};
  margin-bottom: 13px;
`;

const OptionListContainer = styled.View`
  padding: 0px 12px;
`;
