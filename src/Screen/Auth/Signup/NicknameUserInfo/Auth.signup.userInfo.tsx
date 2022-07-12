import React from "react";
import styled from "styled-components/native";
import { AuthTextInputName } from "src/Component/Auth";
import { RadioButton } from "src/Component/Radio";
import shallow from "zustand/shallow";
import { useSignupScreenStore } from "src/Zustand";
import { H4 } from "src/StyledComponents/Text";
import { Gender } from "src/Object/Enum";
import { globalStyles } from "src/Style/globalStyles";

export function SignupUserInfo() {
  const { birthdayInput, genderInput, setGenderInput } = useSignupScreenStore(
    state => ({
      birthdayInput: state.birthdayInput,
      genderInput: state.genderInput,
      setGenderInput: state.setGenderInput,
    }),
    shallow,
  );

  return (
    <Container style={globalStyles.authScreen__horizontalPadding}>
      <AuthTextInputName name="회원정보" />
      <Inputs__Container>
        <BirthdayInput />
        <Input__Splitter />
        <GenderInput />
      </Inputs__Container>
    </Container>
  );
}

function BirthdayInput() {
  return (
    <Birthday__Container>
      <InputName>생일</InputName>
    </Birthday__Container>
  );
}

function GenderInput() {
  const { genderInput, setGenderInput } = useSignupScreenStore(
    state => ({
      genderInput: state.genderInput,
      setGenderInput: state.setGenderInput,
    }),
    shallow,
  );

  return (
    <Gender__Container>
      <InputName>성별</InputName>
      <Radio__Container />
      <Radio__Container>
        <RadioButton
          selected={genderInput === Gender.MALE}
          text="남"
          onPress={() => {
            setGenderInput(Gender.MALE);
          }}
          isLast={true}
        />
      </Radio__Container>
      <Radio__Container />
      <Radio__Container>
        <RadioButton
          selected={genderInput === Gender.FEMALE}
          text="여"
          onPress={() => {
            setGenderInput(Gender.FEMALE);
          }}
          isLast={true}
        />
      </Radio__Container>
      <Radio__Container />
    </Gender__Container>
  );
}

const Container = styled.View``;

const Inputs__Container = styled.View`
  border: 1px solid ${({ theme }) => theme.color.purple.text};
  border-radius: 10px;
`;

const Input__Splitter = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.color.purple.text};
`;

// Birthday()
const Birthday__Container = styled.View`
  padding: 16px 10px;
`;

// Gender()
const Gender__Container = styled(Birthday__Container)`
  flex-direction: row;
  align-items: center;
`;

const Radio__Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

const InputName = styled(H4)`
  font-weight: bold;
`;
