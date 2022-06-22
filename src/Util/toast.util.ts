import Toast, { ToastShowParams } from "react-native-toast-message";

/**
 * 화면 하단에 검은색 바탕, 흰 글씨의 토스트 메세지를 띄웁니다
 * @author 현웅
 */
export function showBlackToast(param: ToastShowParams) {
  Toast.show({
    type: "blackToast",
    position: "bottom",
    visibilityTime: 2500,
    ...param,
  });
}
