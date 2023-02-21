import axios from "axios";

const KAKAO_KEY =""
const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: "KakaoAK "// 공통으로 요청 할 헤더
  }
});

// search blog api
export const blogSearch = params => {
  return Kakao.get("/v3/search/book?target=title", { params });
};