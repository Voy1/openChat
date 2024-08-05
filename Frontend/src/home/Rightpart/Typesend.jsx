import React from 'react'
import { IoMdSend } from "react-icons/io";

function Typesend() {
  return (
    <div className='flex space-x-1 h-[8vh] bg-gray-700'>
        <div className='w-[80%] mx-4 my-1'>
             <input type="text" placeholder="Type here" className="input input-bordered rounded-xl outline-none px-4 py-3 input-info w-full" />
        </div>
        <button>
            <IoMdSend className='text-3xl'/>
        </button>
    </div>
    
  )
}

export default Typesend
