import React from "react";

export default function HomeHeroSection() {
  return (
    <section className="relative bg-gray-100">
      {/* Background Decoration */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-25"
        aria-hidden="true"
      ></div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Discover Your Style with <br />
            <span className="text-indigo-600">Trendy Fashion</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore our latest collection of apparel and accessories designed to
            make you stand out. Unleash the trendsetter in you!
          </p>

          {/* Call-To-Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#shop-now"
              className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400"
            >
              Shop Now
            </a>
            <a
              href="#explore"
              className="inline-block rounded-lg border border-indigo-600 px-6 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring focus:ring-indigo-400"
            >
              Explore More
            </a>
          </div>
        </div>

        {/* Image Showcase */}
        <div className="mt-12 md:mt-0 md:ml-12">
          <div className="relative w-full max-w-sm">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://rukminim1.flixcart.com/imageUrl/612/612/xif0q/lehenga-choli/u/g/a/free-half-sleeve-vbnd-fddj-astonblue-original-imagp286bmcaabbj.jpeg?q=70"
                alt="Fashion Showcase"
                className="object-cover w-full h-[400px]"
              />
            </div>
            {/* Fancy Badge */}
            <div className="absolute top-0 left-0 mt-4 ml-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
              New Arrivals ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
