import React from "react";
import styled from "styled-components/native";
import { AuthTextInput, AuthTextInputName } from "src/Component/Auth";
import shallow from "zustand/shallow";
import { useSignupScreenStore } from "src/Zustand";
import { BodyText } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style/globalStyles";

export function SignupName() {
  const { lastNameInput, setLastNameInput, nameInput, setNameInput } =
    useSignupScreenStore(
      state => ({
        lastNameInput: state.lastNameInput,
        setLastNameInput: state.setLastNameInput,
        nameInput: state.nameInput,
        setNameInput: state.setNameInput,
      }),
      shallow,
    );

  return (
    <Container style={globalStyles.authScreen__horizontalPadding}>
      <Input__Container>
        <LastName__Container>
          <AuthTextInputName name="성" />
          <AuthTextInput
            props={{
              placeholder: "성",
              value: lastNameInput,
              onChangeText: setLastNameInput,
            }}
          />
        </LastName__Container>

        <Name__Container>
          <AuthTextInputName name="이름" />
          <AuthTextInput
            props={{
              placeholder: "이름",
              value: nameInput,
              onChangeText: setNameInput,
            }}
          />
        </Name__Container>
      </Input__Container>

      <Caution__Text
        style={{ opacity: 0 }}>{`*한글만 입력해주세요`}</Caution__Text>
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 12px;
`;

const Input__Container = styled.View`
  position: relative;
  flex-direction: row;
`;

const LastName__Container = styled.View`
  flex: 2;
  margin-right: 8px;
`;

const Name__Container = styled.View`
  flex: 5;
`;

const Caution__Text = styled(BodyText)`
  color: ${({ theme }) => theme.color.red.warning};
  margin-top: 4px;
`;
