import { useState } from "react";
import { useEffect } from "react";
import Layout from "../../layout/Layout";

function Community() {
  const [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    // 현재 위치 가져오기
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude; // 위도
      let lon = position.coords.longitude; // 경도

      console.log("현재 위치", lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  // 현재 위치 날씨 API 가져오기
  const getWeatherByCurrentLocation = async (lat, lon) => {
    // &units=metric => 섭씨 사용
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=658d847ef1d28e72e047ab0c5a476d54&units=metric`;
    // url에 데이터를 가져올 때까지 기다려 주세요
    let response = await fetch(url);
    let data = await response.json();
    // weather에 데이터 담기
    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <Layout>
      <div>
        <h1>Community</h1>
        <div>hello community</div>
        <div className="weather-box">
          <div>{weather?.name}</div>
          <h2>{weather?.main.temp}도</h2>
          <h3>{weather?.weather[0].description}</h3>
        </div>
      </div>
    </Layout>
  );
}

export default Community;
