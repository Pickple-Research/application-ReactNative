import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { H4 } from "src/StyledComponents/Text";

/**
 * 라디오 버튼 한 줄 컴포넌트입니다.
 * @author 현웅
 */
export function RadioButton({
  selected,
  text,
  onPress,
  isLast,
  style,
  selectedStyle,
  textStyle,
  withIcon = true,
}: {
  selected: boolean;
  text: string;
  onPress: () => void;
  isLast: boolean;
  style?: StyleProp<ViewStyle>[];
  selectedStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>[];
  withIcon?: boolean;
}) {
  return (
    <Container<React.ElementType>
      style={[style, selected && selectedStyle]}
      activeOpacity={0.8}
      onPress={onPress}
      isLast={isLast}>
      {withIcon ? (
        <Icon__Container>{selected && <Filler />}</Icon__Container>
      ) : (
        <></>
      )}
      <Content__Container>
        <Content__Text style={textStyle}>{option}</Content__Text>
      </Content__Container>
    </Container>
  );
}

const Container = styled.TouchableOpacity<{ isLast: boolean }>`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${({ isLast }) => (isLast ? "0px" : "16px")};
`;

const Icon__Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  margin-top: 3px;
  margin-right: 8px;
  border: 1px solid ${({ theme }) => theme.color.grey.mild};
  border-radius: 100px;
  overflow: hidden;
`;

const Filler = styled.View`
  width: 11px;
  height: 11px;
  background-color: ${({ theme }) => theme.color.blue.main};
  border-radius: 100px;
`;

const Content__Container = styled.View`
  flex: 1;
`;

const Content__Text = styled(H4)`
  color: ${({ theme }) => theme.color.grey.icon};
  line-height: 20px;
`;
