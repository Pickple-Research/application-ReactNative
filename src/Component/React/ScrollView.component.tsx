import React from "react";
import {
  ScrollView,
  StyleProp,
  ViewStyle,
  ScrollViewProps,
} from "react-native";

/**
 * 페이지 전체 컴포넌트를 담는 데 사용되는 종스크롤 ScrollView입니다.
 * 흰색 배경과 BottomTabBar의 디자인을 고려한 padding이 설정되어 있습니다.
 * @author 현웅
 */
export function WhiteBackgroundScrollView({
  children,
  style,
  props,
}: {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>; // 추가적으로 스타일을 지정해줘야 하는 경우
  props?: ScrollViewProps; // 추가적으로 ScrollView에 넘겨줘야 하는 속성이 있는 경우
}) {
  return (
    <ScrollView
      style={[{ backgroundColor: "white" }, style]}
      contentContainerStyle={{ paddingBottom: 70 }}
      nestedScrollEnabled
      {...props}>
      {children}
    </ScrollView>
  );
}
