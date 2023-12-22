import React from "react";
import GenrealList from "../components/GenrealList";

function Home() {
  return (
    <>
      <section className="grid grid-cols-4 p-3">
        <div className="hidden md:block">
          <GenrealList/>
        </div>
        <div className="col-span-4 md:col-span-3 bg-blue-400">Games List</div>
      </section>
    </>
  );
}

export default Home;
