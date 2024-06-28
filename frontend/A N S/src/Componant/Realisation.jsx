import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
const Realisation = () => {
  const videos = [
    { id: 1, src: "/src/Assets/1.mp4", title: "Realisation 1" },
    { id: 2, src: "/src/Assets/2.mp4", title: "Realisation 2" },
    { id: 3, src: "/src/Assets/3.mp4", title: "Realisation 3" },
    { id: 4, src: "/src/Assets/4.mp4", title: "Realisation 4" },
    { id: 5, src: "/src/Assets/5.mp4", title: "Realisation 5" },
    { id: 6, src: "/src/Assets/6.mp4", title: "Realisation 6" },
  ];

  return (
    <div className="bg-[#BAAE98]">
      <Nav />
      <img src="/src/Assets/realisation.jpg" alt="Hello Image" />
      <div className="  p-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="video-container">
              <video
                className="w-full h-[400px] rounded-lg "
                controls
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2 className="text-center text-xl mt-4">{video.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Realisation;
