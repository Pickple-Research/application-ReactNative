import React from "react";
import { StyleProp, ViewStyle, ScrollViewProps } from "react-native";
import styled from "styled-components/native";
import { ThemeColors } from "@Object/Type";

type BackgroundColor = "WHITE" | "PURPLE";

/**
 * 페이지 전체 컴포넌트를 담거나 페이지 끝부분을 포함하는 스크롤 리스트를 담는 데 사용되는 종스크롤 ScrollView입니다.
 * 흰색 배경과 BottomTabBar의 디자인을 고려한 padding이 설정되어 있습니다.
 * @author 현웅
 */
export function WhiteBackgroundScrollView({
  children,
  backgroundColor = "WHITE",
  style,
  contentContainerStyle,
  props,
}: {
  children: JSX.Element | JSX.Element[];
  backgroundColor?: BackgroundColor; // 배경색을 지정합니다. 기본적으로 흰색입니다.
  style?: StyleProp<ViewStyle>; // 추가적으로 스타일을 지정해줘야 하는 경우
  contentContainerStyle?: StyleProp<ViewStyle>; // 추가적으로 스타일을 지정해줘야 하는 경우
  props?: ScrollViewProps; // 추가적으로 ScrollView에 넘겨줘야 하는 속성이 있는 경우
}) {
  return (
    <SafeArea>
      <Container<React.ElementType>
        style={style}
        backgroundColor={backgroundColor}
        contentContainerStyle={[{ paddingBottom: 70 }, contentContainerStyle]}
        nestedScrollEnabled
        {...props}>
        {children}
      </Container>
    </SafeArea>
  );
}

const scrollViewBackgroundColor = (
  backgroundColor: BackgroundColor,
  color: ThemeColors,
) => {
  switch (backgroundColor) {
    case "WHITE":
      return "white";
    case "PURPLE":
      return color.purple.mild;
    default:
      return "white";
  }
};

// IPhone의 경우 safearea 내부에 컴포넌트를 위치시켜야 status bar를 침범하지 않습니다.
const SafeArea = styled.SafeAreaView``;

const Container = styled.ScrollView<{ backgroundColor: BackgroundColor }>`
  position: relative;
  background-color: ${({ backgroundColor, theme }) =>
    scrollViewBackgroundColor(backgroundColor, theme.color)};
`;
