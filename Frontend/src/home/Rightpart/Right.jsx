import React from 'react'
import Chatuser from './Chatuser';
import Messages from './Messages';
import Typesend from './Typesend';

function Right() {
  return <div className="w-[70%] bg-slate-800 text-gray-500">
      <Chatuser/>
      <div className='flex-1 overflow-y-auto' style={{ maxHeight: "calc(92vh - 8vh)" }}><Messages/></div>
      <div><Typesend/></div>
      </div>;
}

export default Right
