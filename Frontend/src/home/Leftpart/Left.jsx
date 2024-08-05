import React from 'react'
import Search from './Search';
import Users from './Users';
import Logout from './Logout';

function Left() {
  return <div className="w-[30%] bg-slate-900 text-gray-500">
    <Search/>
    <Users/>
    <Logout/>
  </div>;

}

export default Left
