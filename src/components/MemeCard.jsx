

import React from 'react';


const MemeCard = ({ meme }) => {
  return (
    <div >
    <div className="m-4 p-4 bg-white rounded-2xl shadow-md hover:bg-blue-100 ">
      <img className=" rounded w-100 h-50" src={meme.url} alt={meme.name} />
      <div className="">
        <h2 className="text-lg font-bold flex items-end bg-blue-300 m-1 p-2 rounded-md  text-center hover:bg-amber-400">{meme.name}</h2>
        
      </div>
    </div>
    </div>
  );
};

export default MemeCard;
