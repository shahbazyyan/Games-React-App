import React, { useEffect } from "react";

function Banner({ bannerGame }) {
  useEffect(() => {
    console.log(bannerGame);
  }, []);

  return (
    <>
      <section className="relative px-2">
        <div className="absolute p-5 bottom-0 ">
          <h2 className="text-[24px] font-bold text-white">
            {bannerGame.name}
          </h2>
          <h3 className="text-[18px] font-bold text-white">
            Released date : {bannerGame.released}
          </h3>
          <h4 className="text-[16px] font-bold text-white">
            Rating : {bannerGame.rating}
          </h4> <br />
          <button className="bg-blue-600 text-white px-2 p-1 rounded-xl">Get Now</button>
        </div>
        <img
          src={bannerGame.background_image}
          alt={bannerGame.slug}
          className="md:h-[320px] w-full object-centre rounded-xl"
        />
      </section>
    </>
  );
}

export default Banner;
