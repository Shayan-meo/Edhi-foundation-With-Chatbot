import Image from "next/image";
import img1 from "../images/hero1.png"
import img2 from "../images/hero2.jpg"
import img3 from "../images/hero3.jpg"
import img4 from "../images/hero4.jpg"

export default function Carousel() {
    return (
  <>
  <div className="carousel w-full h-[450px]">
    <div id="slide1" className="carousel-item relative w-full">
      <Image
        src={img1}
        alt="image1"
        className="w-full" height={600} width={600}/>
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <Image
        alt="image2"
        src={img2}
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <Image
        alt="image3"
        src={img3}
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide2" className="btn btn-circle">❮</a>
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
      <Image
        alt="image4"
        src={img4}
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  </>
    );
  }
  