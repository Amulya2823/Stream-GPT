import React from 'react'
import { IMG_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-64 h-auto pr-4'>
        <img
            alt='Movie Name'
            src={IMG_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard;