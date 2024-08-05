import React from 'react'
import { LuSearch } from "react-icons/lu";

function Search() {
  return (
    <div className=" h-[10vh]">
      <div className='px-6 py-4'>
        <form action=''>
        <div className='flex space x-3 '>
        <label className="input flex items-center gap-2 w-[80%] ">
        <input type="text" className="grow input-bordered input-accent w-full max-w-xs" placeholder="Search" />
        
        </label>
        <button>
          <LuSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300' />
        </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Search