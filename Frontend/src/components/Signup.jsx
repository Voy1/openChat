import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // watch the password and confirm password fields
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    // console.log(userInfo);
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Signup successful");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  };

  return (
    <>
        <div>
         <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className='text-3xl text-sky-500 font-bold text-center mb-6'>open<span className='text-4xl text-emerald-600 font-bold text-center mb-6'>Chat </span> </h1>
                <h2 className='text-2xl text-white font-bold text-center mb-6'>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Fullname */}
                    <div className='relative my-4'>
                        <input type="text" className='block w-72 py-3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' {...register("fullname", { required: true })}/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Fullname</label>{errors.fullname && <span className='text-red-600 text-xl'>*</span>}
                    </div>

                    {/* Email */}
                    <div className='relative my-4'>
                        <input type="email" className='block w-72 py-3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' {...register("email", { required: true })}/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Email</label>{errors.email && <span className='text-red-600 text-xl'>*</span>}
                    </div>

                    {/* Password */}
                    <div className='relative my-4'>
                        <input type="password" className='block w-72 py-3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' {...register("password", { required: true })}/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>{errors.password && <span className='text-red-600 text-xl'>*</span>}
                    </div>

                    {/*Confirm Password */}
                    <div className='relative my-4'>
                        <input type="password" className='block w-72 py-3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' {...register("confirmPassword", {required: true, validate: validatePasswordMatch,})}/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Confirm Password</label>{errors.confirmPassword && (<span className="text-red-500 text-sm font-semibold">{errors.confirmPassword.message}</span>)}
                    </div>

                    {/* Text & Button */}
                    <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300' type='submit'>Signup</button>
                    <div>
                        <span className='mt-4'>Already Create an Account ? <a className='text-blue-500' href='/Login'>Login</a></span>
                    </div>
                </form>
         </div>
      </div>
    </>
  )
}

export default Signup
