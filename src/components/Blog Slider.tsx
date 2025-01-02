import React from "react";


const HeroSection: React.FC = () => {
  return (
    <div className="h-[600px] w-full bg-hero bg-cover bg-center relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/wp8825444-group-of-cars-wallpapers.jpg')",
        }}
      ></div>

      {/* Overlay and Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
        DRIVE YOUR PASSION.
        </h1>
        <p className="text-sm md:text-lg max-w-2xl mb-6">
        Discover the latest in the world of cars, from high-performance supercars to everyday rides. Explore reviews, news, and tips to fuel your automotive enthusiasm.
        </p>
        <a
          href="../../articles"
          className="w-full sm:w-auto px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-zinc-300 hover:text-black transition mt-6 text-center sm:px-8 sm:py-4"
        >
         Explore Our Latest Car Blogs
        </a>
      </div>

      
    </div>
  );
};

export default HeroSection;
