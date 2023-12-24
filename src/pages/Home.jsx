import React, { useEffect, useState } from "react";
import GenrealList from "../components/GenrealList";
import GlobalAPI from "../apis/GlobalAPI";
import Banner from "../components/Banner";
import TreadingGames from "../components/TreadingGames";
import GamesList from "../components/GamesList";


function Home() {
  const [games, setGames] = useState([]);

  function getGamesList() {
    GlobalAPI.getGames.then((res) => {
      console.log(res.data.results);
      setGames(res.data.results);
    });
  }

  useEffect(() => {
    getGamesList();
  }, []);

  return (
    <>
      <section className="grid grid-cols-4 p-3">
        <div className="hidden md:block">
          <GenrealList />
        </div>
        <div className="col-span-4 md:col-span-3">
          {games?.length > 0 ? (
            <div>
              <Banner bannerGame={games[8]} />
              <TreadingGames gameList={games}/>
              <GamesList gameList={games}/>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

export default Home;
