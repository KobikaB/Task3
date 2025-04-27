import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';

const Mainpage = () => {

    const [mems,setMems] = useState([]);
    


   useEffect(() => {
    fetch(' https://api.imgflip.com/get_memes')
   
  .then((response) => response.json())
  .then((data) => {setMems(data.data.memes)})
  .catch((error) => {console.error('error',error) });
},[])





  return (
   <div className='w-screen bg-blue-200'>
    <h2 className='bg-blue-400  flex justify-center p-6 text-3xl font-bold sticky top-0 md:bg-cyan-600 lg:bg-blue-400'>Memes</h2>
    <div className=' flex flex-wrap justify-around mt-[5%]'>
    


    {mems.map((meme) => (
      
        <MemeCard key={meme.id} meme={meme} />
     
    ))}
  </div>
  </div>
  )
}

export default Mainpage