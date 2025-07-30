// Basic PhilASIN Homepage Layout (like screenshot)

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      {/* Top Navigation */}
      <header className="flex justify-between items-center px-4 py-3 shadow-md bg-white">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="PhilASIN Logo" className="h-10 w-auto" />
          <h1 className="text-lg font-bold">PhilASIN</h1>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full px-3 py-1 text-sm"
          />
        </div>
        <nav className="space-x-6 text-sm font-semibold">
          <a href="#" className="hover:text-blue-600">HOME</a>
          <a href="#" className="hover:text-blue-600">ABOUT</a>
          <a href="#" className="hover:text-blue-600">SALTact</a>
          <a href="#" className="hover:text-blue-600">ARTICLES</a>
          <a href="#" className="hover:text-blue-600">TIMELINE VIEW</a>
          <a href="#" className="hover:text-blue-600">CONTACT</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="grid md:grid-cols-3 gap-4 px-4 py-6 bg-gray-100">
        <div className="md:col-span-2 relative">
          <img
            src="/congress-photo.jpg"
            alt="Salt Congress"
            className="w-full h-full object-cover rounded-md"
          />
          <p className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-sm p-2">
            First Philippine Salt Congress in Lingayen Pangasinan - November 2022
          </p>
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <ArrowLeft className="text-white bg-black bg-opacity-40 rounded-full p-1 w-6 h-6" />
          </div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <ArrowRight className="text-white bg-black bg-opacity-40 rounded-full p-1 w-6 h-6" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-4">
          <img
            src="/president-photo.png"
            alt="President"
            className="rounded-md shadow-md w-48 h-auto mb-4"
          />
          <img
            src="/logo-badge.png"
            alt="PhilASIN badge"
            className="w-40 h-auto"
          />
          <p className="text-center text-sm mt-2">Mr. Gerard C. Khonghun<br/>President</p>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  return (
    <section className="bg-white text-center py-10" style={{ backgroundImage: 'url("/salt-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white bg-opacity-70 py-6">
        <h2 className="text-2xl font-bold mb-4">PhilASIN Photos</h2>
        {/* Add gallery items here if needed */}
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <GallerySection />
    </div>
  );
};

export default HomePage;
