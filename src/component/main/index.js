import Layout from "../../layout/Layout";
import book1 from "assets/images/book1.jpg";
import book2 from "assets/images/book2.jpg";
import book3 from "assets/images/book3.jpg";
import book4 from "assets/images/book4.jpg";
import book5 from "assets/images/book5.jpg";
import "assets/css/component/main/main.css";
import { useState, useEffect, useRef } from "react";

const images = [
  {
    title: "페스트",
    url: book1,
  },
  {
    title: "오만과 편견",
    url: book2,
  },
  {
    title: "달러구트 꿈 백화점",
    url: book3,
  },
  {
    title: "파친코",
    url: book4,
  },
  {
    title: "당신 인생의 이야기",
    url: book5,
  },
];

function Main() {
  const [currentImage, setCurrentImage] = useState({});
  const [nextImage, setNextImage] = useState({});
  const imageRef = useRef(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);

    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setNextImage(images[randomIndex]);
      imageRef.current.classList.add("next");
      setTimeout(() => {
        setCurrentImage(images[randomIndex]);
        imageRef.current.classList.remove("next");
      }, 600);
    }, 2300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Layout>
      <div className="image-wrapper">
        <div className="image-info">
          <h2>{currentImage.title}</h2>
        </div>
        <img src={currentImage.url} alt={currentImage.title} ref={imageRef} />
        <img src={nextImage.url} alt={nextImage.title} className="next" />
      </div>
    </Layout>
  );
}

export default Main;
