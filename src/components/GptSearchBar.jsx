import React from 'react'
import languages from '../utils/LanguageConstants';
import { SUPPORTED_LANG } from '../utils/constants';

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='p-2 rounded-lg w-1/2 bg-black text-white grid grid-cols-12'>
        <input className=' p-2 col-span-9 text-lg text-black ' type='text' placeholder={languages.hindi.gptPlaceHolder}></input>
        <button className='p-4 col-span-3 bg-red-500 text-xl font-semibold rounded-lg'>{languages.hindi.search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;