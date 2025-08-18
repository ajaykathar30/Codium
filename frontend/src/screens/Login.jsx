import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import axios from 'axios';
import { AUTH_API_END_POINT } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { set } from 'mongoose';
import { setUser } from '../../redux/authSlice';
import toast from 'react-hot-toast';
import Footer from '../components/Footer';
const Login = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [user, setuser] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(user)
            const res=await axios.post(`${AUTH_API_END_POINT}/login`, user,{withCredentials: true});


            if(res.data.success){
                dispatch(setUser(res.data.user));
                toast.success("Login successful");
                navigate('/')
            } else {
                toast.error(res.data.message)
            }
       } catch (error) {
    console.error(error.response?.data || error.message);
    toast.error("Login failed: " + (error.response?.data?.message || "Please try again."));
}


    }
  return (
    <div>
      <Navbar />
      <div className='flex m-auto max-w-sm justify-center items-center h-screen'>
        <div className='card w-full bg-base-200 shadow-xl p-2'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 justify-center items-center'>
            <h1 className='text-3xl font-bold'>Login</h1>

            <input type="text" name='email' value={user.email}  placeholder="Enter your email" onChange={handleChange} className="input input-bordered" />
            <input type="password" name='password' value={user.password} placeholder="Enter your password" onChange={handleChange} className="input input-bordered " />
            <button type='submit' className="btn btn-primary mt-4">Login</button>

        <p  className='mb-3'>Dont have an account? <span className='hover:underline cursor-pointer' onClick={() => navigate('/signup')}>Signup</span></p>
            </form>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login
