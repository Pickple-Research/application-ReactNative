import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { RadioButton } from "./Radio.button.component";

/**
 * 라디오 버튼들의 그룹입니다.
 * @param optionContents 선택지 내용들
 * @param selectedOptionIndexes 선택된 선택지 인덱스들
 * @param onPress 선택지 선택시 함수 (number 형태의 인자를 받아야 합니다)
 * @param style 추가 스타일
 * @param selectedStyle 선택됐을 때 추가 스타일
 * @param buttonStyle 선택지 추가 스타일
 * @param frontButtonStyle 마지막 선택지를 제외한 선택지 추가 스타일
 * @param withIcon 체크 표시 아이콘을 포함할 것인지 선택
 * @author 현웅
 */
export function RadioButtonGroup({
  options,
  selectedOptionIndexes,
  onPress,
  style,
  selectedStyle,
  buttonStyle,
  frontButtonStyle,
  textStyle,
  withIcon,
}: {
  options: string[];
  selectedOptionIndexes: number[];
  onPress: (optionIndex: number) => void;
  style?: StyleProp<ViewStyle>;
  selectedStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  frontButtonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  withIcon?: boolean;
}) {
  return (
    <Container<React.ElementType> style={style}>
      {options.map((option, index) => {
        const isLast = index === options.length - 1;

        return (
          <RadioButton
            key={option}
            selected={selectedOptionIndexes.includes(index)}
            text={option}
            onPress={() => {
              onPress(index);
            }}
            isLast={isLast}
            style={[buttonStyle, isLast ? null : frontButtonStyle]}
            selectedStyle={selectedStyle}
            textStyle={[textStyle]}
            withIcon={withIcon}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.View``;
