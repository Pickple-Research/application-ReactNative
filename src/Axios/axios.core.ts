import axios from "axios";
import { getStorage } from "src/Util";
import { API_ENDPOINT } from "../Constant";

/**
 * #AXIOS
 * Local에서 백엔드 요청을 하는 경우,
 * adb -s <device 혹은 emulator 이름> reverse tcp:<backend port> tcp:<backend port> 설정을 해야합니다.
 * @author 현웅
 */

/**
 * axios 요청에 공통적으로 사용되는 설정들을 지정해둔 axios 요청 인스턴스입니다.
 * @author 현웅
 */
const customAxios = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 5000,
});

/**
 * 요청을 보내기 전에 AsyncStorage에 JWT가 있는지 확인하고, 있으면 요청에 헤더에 JWT를 추가합니다.
 * @author 현웅
 */
customAxios.interceptors.request.use(async config => {
  const jwt = await getStorage("JWT");
  if (jwt) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${jwt}`,
      },
    };
  }
  return config;
});

/**
 * // 응답 인터셉터를 추가합니다.
 * response.data 를 가로채서 return하면 TypeScript가 응답을 인식하지 못합니다.
 */
// customAxios.interceptors.response.use(
//   //* 요청이 성공적인 경우, 곧바로 data를 반환합니다.
//   //* 따라서 .then(response => { return response.data }) 를 생략해도 됩니다.
//   response => {
//     return response.data;
//   },

//   //TODO: 에러 인터셉터별 토스트 메세지 지정
//   //* 에러가 발생한 경우 처리합니다.
//   //* 단, 요청별로 return 타입에 따른 반환값은 개별로 지정해주어야 합니다.
//   error => {
//     if (error.response.data.customMessage) {
//       console.log(`커스텀 에러: ${error.response.data.customMessage}`);
//     }
//   },
// );

export default customAxios;
