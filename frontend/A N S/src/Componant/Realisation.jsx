import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Propimg2 from "../Assets/pro2.jpg";
import Video1 from "../Assets/1.mp4";
import Video2 from "../Assets/2.mp4";
import Video3 from "../Assets/3.mp4";
import Video4 from "../Assets/4.mp4";
import Video5 from "../Assets/5.mp4";
import Video6 from "../Assets/6.mp4";
const Realisation = () => {
  const videos = [
    { id: 1, src: Video1, title: "Realisation 1" },
    { id: 2, src: Video2, title: "Realisation 2" },
    { id: 3, src: Video3, title: "Realisation 3" },
    { id: 4, src: Video4, title: "Realisation 4" },
    { id: 5, src: Video5, title: "Realisation 5" },
    { id: 6, src: Video6, title: "Realisation 6" },
  ];

  return (
    <div className="bg-[#00c9d6]">
      <Nav />
      <div className="overflow-hidden w-full h-full">
        <img
          src={Propimg2}
          alt="Propimg2"
          className="w-full h-full object-cover object-center transform md:scale-100 scale-125"
        />
      </div>
      <div className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="video-container">
              <video className="w-full h-[400px] rounded-lg" controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2 className="text-center text-xl mt-4">{video.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Realisation;
