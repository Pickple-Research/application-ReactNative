import axios, { AxiosError } from "axios";
import { ToastShowParams } from "react-native-toast-message";
import { showBlackToast } from "./toast.util";

/**
 * Axios 요청 중 에러가 났을 때 토스트 메세지를 보여주는 방식을 지정합니다.
 * 서버에서 전달해준 에러 메세지가 있는 경우 그대로 사용하고,
 * 없는 경우 인자로 전달된 메세지를 띄워줍니다.
 * @author 현웅
 */
export async function handleAxiosError(param: {
  error: AxiosError<{ customMessage: string }> | any;
  errorMessage?: string;
  toastShowParams?: ToastShowParams;
}) {
  //* 발생한 에러가 AxiosError인지 검증하고 response 데이터를 가져올 수 있는지 확인합니다.
  if (axios.isAxiosError(param.error)) {
    //* response가 있다면, 서버에서 customMessage 인자를 data에 담아 보내주었는지 확인합니다.
    if (param.error.response !== undefined) {
      if (param.error.response.status === 500) {
        //! 서버측에서 잡아내지 못한 에러인 경우 (최악의 상황)
        showBlackToast({
          ...param.toastShowParams,
          text1: `서버 에러입니다. 문제가 지속되는 경우, 고객센터에 문의해주세요`,
        });
        return;
      }
      const response = param.error.response as {
        data: { customMessage?: string };
      };
      if (response.data.customMessage) {
        //* customMessage가 있는 경우, 해당 메세지를 toast로 띄웁니다.
        showBlackToast({
          ...param.toastShowParams,
          text1: response.data.customMessage,
        });
        return;
      }
    }
  }
  //* customMessage가 없거나 axiosError가 아닌 경우, 미리 지정한 메세지를 toast로 띄웁니다.
  showBlackToast({ ...param.toastShowParams, text1: param.errorMessage });
}
