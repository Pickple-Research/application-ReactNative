import React from "react";
import {
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewProps,
  ViewStyle,
} from "react-native";
import styled from "styled-components/native";
import { H3 } from "src/StyledComponents/Text";

export type RadiusButtonType =
  | "BLUE" // (리서치, 파트너 관련) 파란색 버튼
  | "BLUE_CONFIRM" // (리서치, 파트너 관련) 확인/취소 중 확인 버튼
  | "BLUE_CANCEL" // (리서치, 파트너 관련) 확인/취소 중 취소 버튼
  | "BLUE_SMALL_FILL" // (리서치, 파트너 관련) 리스트 필터 선택 버튼 (선택됨)
  | "BLUE_SMALL_HOLLOW" // (리서치, 파트너 관련) 리스트 필터 선택 버튼 (선택되지 않음)
  | "PURPLE" // (투표 관련) 보라색 버튼
  | "PURPLE_CONFIRM" // (투표 관련) 확인/취소 중 확인 버튼
  | "PURPLE_CANCEL" // (투표 관련) 확인/취소 중 취소 버튼
  | "PURPLE_INACTIVE" // (투표 관련) 투표 참여 불가 상태 버튼
  | "PURPLE_SMALL_FILL" // (투표 관련) 리스트 필터 선택 버튼 (선택됨)
  | "PURPLE_SMALL_HOLLOW" // (투표 관련) 리스트 필터 선택 버튼 (선택되지 않음)
  | "GREY" // 회색 바탕에 흰 글씨 버튼 (ex. 종료/마감됨 버튼)
  | "BLACK"; // 검은색 바탕에 흰 글씨 버튼 (ex. 리서치 업로드 페이지 '경품 추가' 버튼)

export type RadiusButtonStyleType = "WIDE" | "NARROW";

/**
 * 모서리가 뭉특한 버튼입니다.
 * @param text 버튼 내용
 * @param type 버튼 타입 (색상 및 기능)
 * @param onPress 클릭 시 기능
 * @author 현웅
 */
export function RadiusButton({
  text,
  type,
  styleType = "WIDE",
  onPress,
  style,
  textStyle,
  activeOpacity = 0.8,
  viewProps,
}: {
  text: string;
  type: RadiusButtonType;
  styleType?: RadiusButtonStyleType;
  onPress?: () => any;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
  viewProps?: ViewProps;
}) {
  const ButtonContainer = ContainerComponent(type);
  const ButtonText = TextComponent(type);

  return (
    <ButtonContainer<React.ElementType>
      style={[ContainerStyle(styleType), style]}
      activeOpacity={onPress ? activeOpacity : 1}
      onPress={onPress}
      {...viewProps}>
      <ButtonText style={textStyle}>{text}</ButtonText>
    </ButtonContainer>
  );
}

function ContainerComponent(type: RadiusButtonType) {
  switch (type) {
    case "BLUE":
      return BlueButton__Container;
    case "BLUE_CONFIRM":
      return BlueConfirmButton__Container;
    case "BLUE_CANCEL":
      return BlueCancelButton__Container;
    case "BLUE_SMALL_FILL":
      return BlueSmallFillButton__Container;
    case "BLUE_SMALL_HOLLOW":
      return BlueSmallHollowButton__Container;
    case "PURPLE":
      return PurpleButton__Container;
    case "PURPLE_CONFIRM":
      return PurpleConfirmButton__Container;
    case "PURPLE_CANCEL":
      return PurpleCancelButton__Container;
    case "PURPLE_INACTIVE":
      return PurpleInactiveButton__Container;
    case "PURPLE_SMALL_FILL":
      return PurpleSmallFillButton__Container;
    case "PURPLE_SMALL_HOLLOW":
      return PurpleSmallHollowButton__Container;
    case "BLACK":
      return BlackButton__Container;
    case "GREY":
      return GreyButton__Container;

    default:
      return BlueButton__Container;
  }
}

function TextComponent(type: RadiusButtonType) {
  switch (type) {
    case "BLUE":
      return BlueButton__Text;
    case "BLUE_CONFIRM":
      return BlueConfirmButton__Text;
    case "BLUE_CANCEL":
      return BlueCancelButton__Text;
    case "BLUE_SMALL_FILL":
      return BlueSmallFillButton__Text;
    case "BLUE_SMALL_HOLLOW":
      return BlueSmallHollowButton__Text;
    case "PURPLE":
      return PurpleButton__Text;
    case "PURPLE_CONFIRM":
      return PurpleConfirmButton__Text;
    case "PURPLE_CANCEL":
      return PurpleCancelButton__Text;
    case "PURPLE_INACTIVE":
      return PurpleInactiveButton__Text;
    case "PURPLE_SMALL_FILL":
      return PurpleSmallFillButton__Text;
    case "PURPLE_SMALL_HOLLOW":
      return PurpleSmallHollowButton__Text;
    case "BLACK":
      return BlackButton__Text;
    case "GREY":
      return GreyButton__Text;

    default:
      return BlueButton__Text;
  }
}

function ContainerStyle(type: RadiusButtonStyleType) {
  switch (type) {
    case "WIDE":
      return styles.wideContainer;
    case "NARROW":
      return styles.narrowContainer;

    default:
      return styles.wideContainer;
  }
}

const styles = StyleSheet.create({
  wideContainer: { paddingVertical: 16 },
  narrowContainer: { paddingVertical: 12 },
});

const Button__Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;
const Button__Text = styled(H3)`
  font-weight: bold;
`;

// case "BLUE"
const BlueButton__Container = styled(Button__Container)`
  background-color: ${({ theme }) => theme.color.blue.mild};
`;
const BlueButton__Text = styled(Button__Text)`
  color: ${({ theme }) => theme.color.blue.main};
`;

// case "BLUE_CONFIRM"
const BlueConfirmButton__Container = styled(Button__Container)`
  background-color: ${({ theme }) => theme.color.blue.main};
`;
const BlueConfirmButton__Text = styled(Button__Text)`
  color: ${({ theme }) => theme.color.grey.white};
`;

// case "BLUE_CANCEL"
const BlueCancelButton__Container = styled(Button__Container)`
  //TODO: #DESIGN-SYSTEM
  background-color: #eeeeee;
`;
const BlueCancelButton__Text = styled(Button__Text)`
  color: ${({ theme }) => theme.color.blue.main};
`;

// case "BLUE_SMALL_FILL"
const BlueSmallFillButton__Container = styled(Button__Container)`
  background-color: ${({ theme }) => theme.color.blue.text};
  padding: 4px 8px;
  border: 1.5px solid ${({ theme }) => theme.color.blue.text};
`;
const BlueSmallFillButton__Text = styled(Button__Text)`
  color: ${({ theme }) => theme.color.grey.white};
  font-size: ${({ theme }) => theme.size.body};
`;

// case "BLUE_SMALL_HOLLOW"
const BlueSmallHollowButton__Container = styled(Button__Container)`
  padding: 4px 8px;
  border: 1.5px solid ${({ theme }) => theme.color.blue.main};
`;
const BlueSmallHollowButton__Text = styled(Button__Text)`
  color: ${({ theme }) => theme.color.grey.mild};
  font-size: ${({ theme }) => theme.size.body};
`;

// case "PURPLE"
const PurpleButton__Container = styled(Button__Container)`
  background-color: ${({ theme }) => theme.color.purple.mild};
`;
const PurpleButton__Text = styled(Button__Text)`
  color: ${({ theme }) => theme.color.purple.main};
`;

// case "PURPLE_CONFIRM"
const PurpleConfirmButton__Container = styled(Button__Container)`
  background-color: ${({ theme }) => theme.color.purple.main};
`;
const PurpleConfirmButton__Text = styled(Button__Text)`
  color: ${({ theme }) => theme.color.grey.white};
`;

// case "PURPLE_CANCEL"
const PurpleCancelButton__Container = styled(Button__Container)`
  //TODO: #DESIGN-SYSTEM
  background-color: #eeeeee;
`;
const PurpleCancelButton__Text = styled(Button__Text)`
  color: ${({ theme }) => theme.color.purple.text};
`;

// case "PURPLE_INACTIVE"
const PurpleInactiveButton__Container = styled(Button__Container)`
  background-color: ${({ theme }) => theme.color.purple.inactive};
`;
const PurpleInactiveButton__Text = styled(Button__Text)`
  color: ${({ theme }) => theme.color.grey.white};
`;

// case "PURPLE_SMALL_FILL"
const PurpleSmallFillButton__Container = styled(Button__Container)`
  background-color: ${({ theme }) => theme.color.purple.text};
  padding: 4px 8px;
  border: 1.5px solid ${({ theme }) => theme.color.purple.text};
`;
const PurpleSmallFillButton__Text = styled(Button__Text)`
  color: ${({ theme }) => theme.color.grey.white};
  font-size: ${({ theme }) => theme.size.body};
`;

// case "PURPLE_SMALL_HOLLOW"
const PurpleSmallHollowButton__Container = styled(Button__Container)`
  padding: 4px 8px;
  border: 1.5px solid ${({ theme }) => theme.color.purple.main};
`;
const PurpleSmallHollowButton__Text = styled(Button__Text)`
  color: ${({ theme }) => theme.color.grey.mild};
  font-size: ${({ theme }) => theme.size.body};
`;

// case "GREY"
const GreyButton__Container = styled(Button__Container)`
  background-color: ${({ theme }) => theme.color.grey.mild};
`;
const GreyButton__Text = styled(Button__Text)`
  color: ${({ theme }) => theme.color.grey.white};
`;

// case "BLACK"
const BlackButton__Container = styled(Button__Container)`
  //TODO: #STYLE-SYSTEM
  background-color: #444444;
`;
const BlackButton__Text = styled(Button__Text)`
  color: ${({ theme }) => theme.color.grey.white};
`;
