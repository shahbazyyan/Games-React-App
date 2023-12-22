import React from "react";

function Home() {
  return (
    <>
      <section className="grid grid-cols-4">
        <div className="bg-red-500 h-full hidden md:block">Gnere</div>
        <div className="col-span-4 md:col-span-3 bg-blue-400">Games List</div>
      </section>
    </>
  );
}

export default Home;
