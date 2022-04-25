import React from "react";
import { StyleProp, TextStyle, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { DetailText } from "../../StyledComponents/Text";

/**
 * 리서치 listItem에서 남은 기간을 보여줍니다.
 * @author 현웅
 */
export function ResearchDday({
  content,
  style,
}: {
  content: string;
  style?: StyleProp<TextStyle>;
}) {
  return <Dday__Text style={[styles.border, style]}>{content}</Dday__Text>;
}

const styles = StyleSheet.create({
  border: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});

const Dday__Text = styled(DetailText)`
  padding-bottom: 1px;
  font-weight: bold;
  border: 1px solid gray;
`;
