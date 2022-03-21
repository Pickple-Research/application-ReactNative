import axios from "axios";
import { API_ENDPOINT } from "../Constant";

/**
 * axios 요청에 공통적으로 사용되는 설정들을 지정해둔 axios 요청 인스턴스입니다.
 * @author 현웅
 */
export const customAxios = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 5000,
  headers: {},
});

/**
 * 응답 인터셉터를 추가합니다.
 */
customAxios.interceptors.response.use(
  //* 요청이 성공적인 경우, 곧바로 data를 반환합니다.
  //* 따라서 .then(response=>{return response.data}) 를 생략해도 됩니다.
  response => {
    return response.data;
  },

  //* 에러가 발생한 경우 처리합니다.
  error => {},
);
