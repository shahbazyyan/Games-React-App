import React, { useEffect, useState } from "react";
import GlobalAPI from "../apis/GlobalAPI";

function GenrealList() {
  function getGeneralList() {
    GlobalAPI.getListGenres.then((res) => {
      setList(res.data.results);
    });
  }

  const [list, setList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGeneralList();
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {list.map((item, index) => (
        <div
          onClick={() => setActiveIndex(index)}
          className={`flex p-1 mb-2 items-center gap-2 cursor-pointer rounded-lg
          hover:bg-slate-400 group ${
            activeIndex === index ? "bg-gray-400  dark:bg-gray-600" : null
          }`}
          key={item.id}
        >
          <img
            src={item.image_background}
            alt={item.slug}
            className={`w-[40px] h-[40px] object-cover rounded-full group-hover:scale-110 transition-all ease-out last:duration-300  ${
              activeIndex === index ? "scale-110  dark:bg-gray-600" : null
            } `}
          />
          <p
            className={`dark:text-white text-[18px]
          group-hover:font-bold transition-all ease-out duration-300
          ${activeIndex === index ? "font-bold" : null} `}
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default GenrealList;
