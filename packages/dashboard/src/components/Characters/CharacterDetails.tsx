import * as React from 'react';
import { useParams } from 'react-router-dom';
function CharacterDetails() {
  let { characterId } = useParams();
  return <div className='h-full w-full flex items-center justify-center text-2xl'>
    Burası <span className='text-3xl font-semibold bg-white p-2 mx-5 rounded-lg'> {characterId} </span> Numaralı Id ye Sahip Karakterin Detay Sayfası...
  </div>;
}

export default CharacterDetails;
