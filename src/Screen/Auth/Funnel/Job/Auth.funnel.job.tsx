import React from "react";
import styled from "styled-components/native";
import { AuthFunnelOption } from "src/Component/Auth";
import { H2 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useUserStore, useAuthFunnelScreenStore } from "src/Zustand";
import { Jobs } from "src/Constant";
import { globalStyles } from "src/Style";

export function AuthFunnelJob() {
  const user = useUserStore(state => state.user);
  const { jobInput, setJobInput } = useAuthFunnelScreenStore(
    state => ({
      jobInput: state.jobInput,
      setJobInput: state.setJobInput,
    }),
    shallow,
  );

  return (
    <Container style={globalStyles.funnelScreen__horizontalPadding}>
      <TitleText>{`현재 ${user.nickname}님의 직업은 무엇인가요?`}</TitleText>
      <OptionListContainer>
        {Jobs.map((job, index) => {
          return (
            <AuthFunnelOption
              key={`${index}: ${job}`}
              text={job}
              selected={jobInput === job}
              onPress={() => {
                setJobInput(job);
              }}
            />
          );
        })}
      </OptionListContainer>
    </Container>
  );
}

const Container = styled.View`
  padding-top: 40px;
`;

const TitleText = styled(H2)`
  color: ${({ theme }) => theme.color.purple.deep};
  margin-bottom: 13px;
`;

const OptionListContainer = styled.View`
  padding: 0px 12px;
`;
