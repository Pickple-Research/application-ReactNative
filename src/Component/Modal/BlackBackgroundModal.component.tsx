import React from "react";
import styled from "styled-components/native";
import { ModalBaseProps, StyleProp, ViewStyle } from "react-native";

/**
 * 검은색 뒷배경을 가진 모달입니다. 검은색 배경을 누르면 모달이 닫힙니다.
 *
 * @example
 * ```
 * function ExampleModal(){
 *  const [modalVisible, setModalVisible] = useState<boolean>(false)
 *
 *  return(
 *    <BlackBackgroundModal
 *      modalVisible={modalVisible}
 *      setModalVisible={setModalVisible}
 *      props={{ animationType: "slide" }}>
 *      { modal content }
 *    </BlackBackgroundModal>
 *  )
 * }
 * ```
 *
 * @param modalVisible 모달 표시 여부 변수
 * @param setModalVisible modalVisible 상태 관리 함수
 * @param allowIgnore (Optional) 뒤로 가기, 혹은 모달 배경을 눌러 닫을 수 있는지 여부. 기본값 true
 * @author 현웅
 */
export function BlackBackgroundModal({
  children,
  modalVisible,
  setModalVisible,
  allowIgnore = true,
  style,
  props,
}: {
  children: any;
  modalVisible: boolean;
  setModalVisible: (status: boolean) => void;
  allowIgnore?: boolean;
  style?: StyleProp<ViewStyle>;
  props?: Partial<ModalBaseProps>;
}) {
  return (
    <Container
      visible={modalVisible}
      //? 하드웨어 뒤로 가기 버튼이 눌렸을 때 방식 지정
      onRequestClose={
        allowIgnore
          ? () => {
              setModalVisible(false);
            }
          : () => {}
      }
      transparent
      animationType="slide"
      {...props}>
      <Background
        activeOpacity={1}
        style={style}
        onPress={
          allowIgnore
            ? () => {
                setModalVisible(false);
              }
            : undefined
        }>
        {children}
      </Background>
    </Container>
  );
}

const Container = styled.Modal``;

const Background = styled.TouchableOpacity`
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
