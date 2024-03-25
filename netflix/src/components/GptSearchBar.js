import React from 'react'
import { BG_URL } from '../utils/constants'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey=useSelector(store=>store.config.lang)
  return (
    <div>
        <div className="absolute -z-10">
            <img
            src={BG_URL}
            alt="Bg-img"
            />
        </div>
        <div className='pt-[10%]'>
            <form className="bg-black h-16 p-2 mx-[28%] grid grid-cols-12 gap-2">
                <input type="text" className='col-span-9 rounded-lg pl-5' placeholder={lang[langKey].gptSearchPlaceholder}/>
                <button className=' col-span-3 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
            </form>
        </div>
    </div>
  )
}

export default GptSearchBar