import React from 'react'
import Navbar from '../components/Navbar'
import { Construction } from 'lucide-react'  // nice icon

const Explore = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[70vh] text-center px-6">
        <Construction className="w-16 h-16 text-yellow-500 mb-4 animate-bounce" />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          🚧 Feature Under Construction
        </h2>
        <p className="text-gray-600 max-w-md">
          Oops, sorry! The <span className="font-semibold">Explore</span> feature is not ready yet.  
          Stay tuned — exciting things are on the way! 🚀
        </p>
      </div>
    </div>
  )
}

export default Explore
