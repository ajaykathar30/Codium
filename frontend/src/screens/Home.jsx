import React from 'react'

import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Home = () => {
  
  return (
    <div>
      <Navbar/>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/heroPagebg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Darker overlay for better contrast */}
        <div className="hero-overlay bg-black/60"></div>

        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold drop-shadow-lg">Hello Coders</h1>
            <p className="mb-5 text-lg text-gray-200 drop-shadow-md leading-relaxed">
              Welcome to Code<span className="text-red-500 font-medium">Red</span>, your ultimate destination for mastering Data Structures and Algorithms (DSA) through hands-on practice.
              Whether you're a beginner or an experienced coder, we provide a platform to sharpen your skills with a wide range of coding challenges and problems.
            </p>
            <Link to="/practice">
              <button className="btn btn-primary  text-lg  shadow-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
