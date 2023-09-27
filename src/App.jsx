//import { useState } from 'react'

import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-center mt-10 text-3xl">Hacker News Job</h1>
        <div className="">
          <div className="flex justify-center space-x-4 mt-20">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-center space-x-4 mt-10">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
          Load More
        </button>
      </div>
    </>
  );
}

export default App;
