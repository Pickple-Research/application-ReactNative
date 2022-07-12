import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { H1 } from "src/StyledComponents/Text";

export function BottomButton({
  text,
  color,
  available,
  loading = false,
  onPress,
}: {
  text: string;
  color: "BLUE" | "PURPLE";
  available: boolean;
  loading?: boolean;
  onPress: () => void;
}) {
  if (!available) {
    return (
      <UnavailableContainer activeOpacity={1}>
        <UnavailableText>{text}</UnavailableText>
      </UnavailableContainer>
    );
  }

  switch (color) {
    case "BLUE":
      return (
        <BlueContainer activeOpacity={loading ? 1 : 0.8} onPress={onPress}>
          <Text>{text}</Text>
          {loading && (
            <ActivityIndicator
              size="small"
              color="#fff"
              style={{ marginLeft: 8 }}
            />
          )}
        </BlueContainer>
      );
    case "PURPLE":
      return (
        <PurpleContainer activeOpacity={loading ? 1 : 0.8} onPress={onPress}>
          <Text>{text}</Text>
          {loading && (
            <ActivityIndicator
              size="small"
              color="#fff"
              style={{ marginLeft: 8 }}
            />
          )}
        </PurpleContainer>
      );
  }
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.size.bottomButtonHeight};
`;

const Text = styled(H1)`
  color: ${({ theme }) => theme.color.grey.white};
`;

const BlueContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.blue.main};
`;

const PurpleContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.purple.main};
`;

const UnavailableContainer = styled(Container)`
  //TODO: #DESIGN-SYSTEM
  background-color: "#eeeeee";
`;

const UnavailableText = styled(Text)`
  //TODO: #DESIGN-SYSTEM
  color: "#cccccc";
`;
