import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

function TreadingGames({ gameList }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 1, // Show one slide at a time
        spaceBetween: 20,
        breakpoints: {
          768: {
            slidesPerView: 2, // Show two slides at a time on larger screens
          },
          1024: {
            slidesPerView: 4, // Show four slides at a time on wider screens
          },
        },
        loop: true,
        // Add any other Swiper configurations here
      });
    }
  }, [gameList]);

  return (
    <section className="mt-5 relative items-center overflow-hidden">
      <h1 className="font-bold text-[25px] dark:text-white">Trending Games</h1>
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper relative">
          {gameList.map((item) => (
            <div key={item.id} className="swiper-slide select-none">
              <img
                src={item.background_image}
                alt={item.slug}
                className="h-[270px] max-w-[200px] rounded-lg object-cover cursor-pointer"
              />     
              <h2 className="items-center dark:text-white mt-1">{item.name}</h2>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TreadingGames;
