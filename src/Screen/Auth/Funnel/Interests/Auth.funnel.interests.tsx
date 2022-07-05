import React from "react";
import styled from "styled-components/native";
import { H1, H2, BodyText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useUserStore, useAuthFunnelScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style";
import {
  EntertainmentArtInterests,
  FitnessActivityInterests,
  CareerInterests,
} from "src/Constant";

export function AuthFunnelInterests() {
  const user = useUserStore(state => state.user);

  return (
    <Container style={globalStyles.funnelScreen__horizontalPadding}>
      <TitleText>{`${user.nickname}님은 어느 분야에 관심이 있으신가요?`}</TitleText>
      <InterestsOptionGroup
        title="엔터테인먼트 · 예술"
        interests={EntertainmentArtInterests}
      />
      <InterestsOptionGroup
        title="운동 · 액티비티"
        interests={FitnessActivityInterests}
      />
      <InterestsOptionGroup title="커리어" interests={CareerInterests} />
    </Container>
  );
}

function InterestsOptionGroup({
  title,
  interests,
}: {
  title: string;
  interests: string[];
}) {
  const { interestsInput, toggleInterestsInput } = useAuthFunnelScreenStore(
    state => ({
      interestsInput: state.interestsInput,
      toggleInterestsInput: state.toggleInterestsInput,
    }),
    shallow,
  );

  return (
    <InterestsOptionGroup__Container>
      <InterestOptionGroup__TitleText>{title}</InterestOptionGroup__TitleText>
      <InterestButtonsContainer>
        {interests.map((interest, index) => {
          return (
            <InterestButton
              key={`${index}:${interest}`}
              interest={interest}
              selected={interestsInput.includes(interest)}
              toggleInterestsInput={toggleInterestsInput}
            />
          );
        })}
      </InterestButtonsContainer>
    </InterestsOptionGroup__Container>
  );
}

function InterestButton({
  interest,
  selected,
  toggleInterestsInput,
}: {
  interest: string;
  selected: boolean;
  toggleInterestsInput: (input: string) => void;
}) {
  return (
    <InterestButton__Container
      selected={selected}
      onPress={() => {
        toggleInterestsInput(interest);
      }}>
      <InterestButton__Text>{interest}</InterestButton__Text>
    </InterestButton__Container>
  );
}

const Container = styled.View`
  padding-top: 25px;
`;

const TitleText = styled(H2)`
  color: ${({ theme }) => theme.color.purple.deep};
  margin-bottom: 30px;
`;

const InterestsOptionGroup__Container = styled.View`
  padding: 0px 12px;
  margin-bottom: 18px;
`;

const InterestOptionGroup__TitleText = styled(H1)`
  //TODO: #DESIGN-STYLE
  color: #594e96;
  font-weight: bold;
  margin-bottom: 9px;
`;

const InterestButtonsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const InterestButton__Container = styled.TouchableOpacity<{
  selected: boolean;
}>`
  justify-content: center;
  align-items: center;
  min-width: 50px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.color.purple.pastel : theme.color.grey.white};
  padding: 8px 10px;
  margin: 3px;
  border: 1px solid ${({ theme }) => theme.color.purple.inactive};
  border-radius: 10px;
`;

const InterestButton__Text = styled(BodyText)`
  //TODO: #DESIGN-STYLE
  color: #594e96;
`;
