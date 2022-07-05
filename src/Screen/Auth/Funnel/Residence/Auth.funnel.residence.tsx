import React from "react";
import styled from "styled-components/native";
import { AuthFunnelOption } from "src/Component/Auth";
import { H2 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useUserStore, useAuthFunnelScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style";
import { Residences } from "src/Constant";

export function AuthFunnelResidence() {
  const user = useUserStore(state => state.user);
  const { residenceInput, setResidenceInput } = useAuthFunnelScreenStore(
    state => ({
      residenceInput: state.residenceInput,
      setResidenceInput: state.setResidenceInput,
    }),
    shallow,
  );

  return (
    <Container style={globalStyles.funnelScreen__horizontalPadding}>
      <TitleText>{`${user.nickname}님의 거주지역은 어디인가요?`}</TitleText>
      <OptionListContainer>
        {Residences.map((residence, index) => {
          return (
            <AuthFunnelOption
              key={`${index}: ${residence}`}
              text={residence}
              selected={residenceInput === residence}
              onPress={() => {
                setResidenceInput(residence);
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
