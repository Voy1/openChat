import React from 'react'

function Login() {
  return (
    <>
      <div>
         <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className='text-3xl text-sky-500 font-bold text-center mb-6'>open<span className='text-4xl text-emerald-600 font-bold text-center mb-6'>Chat </span> </h1>
                <h2 className='text-2xl text-white font-bold text-center mb-6'>Login</h2>
                <form action="">
                    <div className='relative my-4'>
                        <input type="email" className='block w-72 py-3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Email</label>
                    </div>
                    <div className='relative my-4'>
                        <input type="password" className='block w-72 py-3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" name="" id='' />
                        <label htmlFor="Remember me">Remember Me</label>
                    </div>
                    <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300' type='submit'>Login</button>
                    <div>
                        <span className='mt-4'>New Here? <a className='text-blue-500' href='/Signup'>Create an Account</a></span>
                    </div>
                </form>
         </div>
      </div>
    </>
  )
}

export default Login
