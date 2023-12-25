import React from 'react';
import { AiFillStar, AiOutlineComment, AiFillFire, AiOutlineFieldTime } from 'react-icons/ai';

function GamesList({ gameListByGenre, genreName }) {
  return (
    <section className='mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
      <div className='col-span-3'>
        <h1 className="font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] dark:text-white">{genreName} games</h1>
      </div>
      
      {gameListByGenre.map((item) => (
        <div
          key={item.id} 
          className='dark:bg-slate-700 bg-slate-200 p-4 rounded-md shadow-md transition-transform transform cursor-pointer hover:scale-105 hover:shadow-lg'
        >
          <img
            src={item.background_image}
            alt={item.name}
            className='w-full h-48 object-cover mb-4 rounded-md'
          />
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold mb-2'>{item.name}</h2>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <AiFillStar className='text-yellow-500 mr-1' />
              <span>{item.rating}</span>
            </div>
            <div className='flex items-center'>
              <AiOutlineComment className='text-blue-500 mr-1' />
              <span>{item.reviews_count}</span>
            </div>
            <div className='flex items-center'>
              <AiFillFire className='text-red-500 mr-1' />
              <span>{item.suggestions_count}</span>
            </div>
            <div className='flex items-center'>
              <AiOutlineFieldTime className='text-red-500 mr-1' />
              <span>{item.playtime}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default GamesList;
