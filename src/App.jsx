//import { useState } from 'react'

import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-center mt-5 text-3xl">Hacker News Job</h1>
        <div className="">
          <div className="flex justify-center space-x-4 mt-10 w-96 h-40">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-center space-x-4 mt-10 w-96 h-40">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-center space-x-4 mt-10 w-96 h-40">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8">
          Load More
        </button>
      </div>
    </>
  );
}

export default App;
