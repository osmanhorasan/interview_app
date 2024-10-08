import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function Slider() {
  const [images, setImages] = useState([
    "https://www.arcanemgz.com/wp-content/uploads/2016/09/marvel-logo-wallpaper.jpg",
    "https://mrwallpaper.com/images/hd/get-ready-for-an-exciting-new-adventure-with-marvel-tra5eupbzbkcvoya.jpg",
    "https://www.komar.de/media/cms/fileadmin/user_upload/Category/Fototapeten/Marvel/komar-fototapeten-marvel.jpg",
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if (activeIndex >= images.length - 1) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
  };
  const prev = () => {
    if (activeIndex <= 0) setActiveIndex(images.length - 1);
    else setActiveIndex(activeIndex - 1);
  };

  return (
    <div className="flex relative">
      <img
        src={images[activeIndex]}
        alt="..."
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between h-0 left-0 right-0 px-4">
        <Button className="!h-16 !w-14 !rounded-full !bg-white" onClick={prev}>
          <FaArrowLeft size={32} />
        </Button>       
        <Button className="!h-16 !w-14 !rounded-full !bg-white" onClick={next}>
          <FaArrowRight size={32} />
        </Button>
      </div>
    </div>
  );
}

export default Slider;
