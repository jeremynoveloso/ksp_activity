import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 text-white pt-8 flex bg-[url('/src/assets/candorbanner.jpg')] bg-cover bg-center bg-blend-multiply min-h-[100vh]  bg-gray-600">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Transform your ideas into <span className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">Reality</span> 
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa architecto veniam quod nemo ex non eaque, suscipit, explicabo labore, a consequuntur beatae! Quo voluptatibus vel, natus quos ipsa enim sit.</p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-linear-65 from-gray-800 to-gray-900 p-3 rounded-md">
              
            </a>
            <a href="#" className="p-3 mx-3 rounded-md border">Sign-up</a>
        </div>
    </div>
  )
}

export default HeroSection