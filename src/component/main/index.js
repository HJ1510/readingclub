import Layout from "../../layout/Layout";
import axios from "axios";
import book1 from "assets/images/book1.jpg";
import book2 from "assets/images/book2.jpg";
import book3 from "assets/images/meetingsample.jpg";
import "assets/css/component/main/main.css";
import React, { useState, useEffect } from "react";

const images = [
  {
    title: "사진 제목 1",
    url: book1,
  },
  {
    title: "사진 제목 2",
    url: book2,
  },
  {
    title: "사진 제목 3",
    url: book3,
  },
  // 이하 생략
];

function Main() {
  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);

    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }, 2300);

    return () => clearInterval(intervalId);
  }, []);

  function user() {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        console.log(Response.data[2].name);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }

  return (
    <Layout>
      <div className="image-wrapper">
        <img src={currentImage.url} alt={currentImage.title} />
        <h2>{currentImage.title}</h2>
      </div>
    </Layout>
  );
}

export default Main;
