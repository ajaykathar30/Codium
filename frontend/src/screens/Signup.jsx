import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import { AUTH_API_END_POINT } from '../utils/constant'
import axios from 'axios';
const Signup = () => {
  const [user, setuser] = useState({ name: "", email: "", password: "" })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post(`${AUTH_API_END_POINT}/register`, user)
      if(res.data.success){
        alert("Signup successful")
        navigate('/login')
      } else {
        alert(res.data.message)
      }
    } catch (error) {
      alert("An error occurred. Please try again.")
    }

  }

  return (
    <div>
      <Navbar />
      <div className='flex m-auto max-w-sm justify-center items-center h-screen'>
        <div className='card w-full bg-base-200 shadow-xl p-2'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 justify-center items-center'>
            <h1 className='text-3xl font-bold'>Signup</h1>

            <input type="text" name='name' value={user.name} placeholder="Username" onChange={handleChange} className="input input-bordered" />
            <input type="email" name='email' value={user.email} placeholder="Email" onChange={handleChange} className="input input-bordered" />
            <input type="password" name='password' value={user.password} placeholder="Password" onChange={handleChange} className="input input-bordered " />
            <button type='submit' className="btn btn-primary mt-4">Signup</button>

        <p className='mb-3'>Already have an account? <span className='hover:underline cursor-pointer' onClick={() => navigate('/login')}>Login</span></p>
            </form>
      </div>
    </div>
    </div>
  )
}


export default Signup
