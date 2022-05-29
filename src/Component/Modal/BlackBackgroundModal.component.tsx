import React from "react";
import styled from "styled-components/native";
import { ModalBaseProps } from "react-native";

type BlackBackgroundModalProps = {
  /** 모달 내용 */
  children: any;
  modalVisible: boolean;
  setModalVisible: (status: boolean) => void;
  props?: Partial<ModalBaseProps>;
};

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
 * @author 현웅
 */
export function BlackBackgroundModal({
  modalVisible,
  setModalVisible,
  children,
  props,
}: BlackBackgroundModalProps) {
  return (
    <Container<React.ElementType>
      visible={modalVisible}
      //? 하드웨어 뒤로 가기 버튼이 눌렸을 때 방식 지정
      onRequestClose={() => {
        setModalVisible(false);
      }}
      transparent
      animationType="slide"
      {...props}>
      <Background
        activeOpacity={1}
        onPress={() => {
          setModalVisible(false);
        }}>
        {children}
      </Background>
    </Container>
  );
}

const Container = styled.Modal``;

const Background = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
