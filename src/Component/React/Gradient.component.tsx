import React from "react";
import { StyleProp } from "react-native";
import LinearGradient from "react-native-linear-gradient";

type LinearGradientContainerProps = {
  children: JSX.Element;
  colors?: string[];
  start?: number[];
  end?: number[];
  style?: StyleProp<any>;
};

/**
 * 색상 list를 인자로 받아 해당 색상의 그라데이션이 적용된 LinearGradient View를 반환합니다.
 * @author 원제
 */
export function LinearGradeintContainer({
  children,
  colors = ["#FFFFFF", "#000000"],
  start = [1, 0],
  end = [0, 1],
  style,
}: LinearGradientContainerProps) {
  return (
    <LinearGradient
      start={{ x: start[0], y: start[1] }}
      end={{ x: end[0], y: end[1] }}
      colors={colors}
      style={style}>
      {children}
    </LinearGradient>
  );
}