import React, { useEffect, useState } from "react";
import GenrealList from "../components/GenrealList";
import GlobalAPI from "../apis/GlobalAPI";
import Banner from "../components/Banner";
import TreadingGames from "../components/TreadingGames";
import GamesList from "../components/GamesList";


function Home() {
  const [games, setGames] = useState([]);
  const [gamesByGenre, setGamesByGenre] = useState([]);
  const [genreNames, setGenreNames] = useState("Action")

  function getGamesList() {
    GlobalAPI.getGames.then((res) => {
      console.log(res.data.results);
      setGames(res.data.results);
    });
  }

  function getGamesByID(id) {
    GlobalAPI.getGamesByID(id).then((res) => {
      console.log(res.data.results);
      setGamesByGenre(res.data.results)
    })
  }

  useEffect(() => {
    getGamesList();
    getGamesByID(4);
  }, []);

  return (
    <>
      <section className="grid grid-cols-4 p-3">
        <div className="hidden md:block">
          <GenrealList setGenresID={(setGenresID) => getGamesByID(setGenresID)}
          genreName={(name) => setGenreNames(name)}
          />
        </div>
        <div className="col-span-4 md:col-span-3">
          {games?.length > 0 ? (
            <div>
              <Banner bannerGame={games[8]} />
              <TreadingGames gameList={games} />
              <GamesList gameListByGenre={gamesByGenre}
              genreName={genreNames}
              />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

export default Home;
