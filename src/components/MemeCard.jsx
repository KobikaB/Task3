

import React from 'react';


const MemeCard = ({ meme }) => {
  return (
    <div >
    <div className="m-4 p-4 bg-white rounded-xl shadow-2xl hover:bg-blue-100 w-110 h-auto ">
      <img className="  w-150 h-50" src={meme.url} alt={meme.name} />
      <div className="">
        <h2 className="text-lg font-bold  bg-blue-300 w-[100%]  p-2 m-2 rounded-md  text-center hover:bg-amber-200">{meme.name}</h2>
        
      </div>
    </div>
    </div>
  );
};

export default MemeCard;