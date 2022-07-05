import React from "react";
import styled from "styled-components/native";
import { AuthFunnelOption } from "src/Component/Auth";
import { H2 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useUserStore, useAuthFunnelScreenStore } from "src/Zustand";
import { Occupations } from "src/Constant";
import { globalStyles } from "src/Style";

export function AuthFunnelOccupation() {
  const user = useUserStore(state => state.user);
  const { occupationInput, setOccupationInput } = useAuthFunnelScreenStore(
    state => ({
      occupationInput: state.occupationInput,
      setOccupationInput: state.setOccupationInput,
    }),
    shallow,
  );

  return (
    <Container style={globalStyles.funnelScreen__horizontalPadding}>
      <TitleText>{`현재 ${user.nickname}님의 직종은 무엇인가요?`}</TitleText>
      <OptionListContainer>
        {Occupations.map((occupation, index) => {
          return (
            <AuthFunnelOption
              key={`${index}: ${occupation}`}
              text={occupation}
              selected={occupationInput === occupation}
              onPress={() => {
                setOccupationInput(occupation);
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
