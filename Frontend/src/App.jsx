import React from 'react'
import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'
import Signup from './components/Signup';
import Login from './components/Login';

export default function App() {
  return (
    // <div className='flex h-screen'>
    //   <Left/>
    //   <Right/>
    // </div>
     <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{"backgroundImage": "url('../src/assets/background.jpg')"}}>
          {/* <Login/> */}
          <Signup/>
     </div>

  );
}
