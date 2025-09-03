"use client"
// import DefaultLayout from "./defaultlayout"
import Link from "next/link"
import GkPreview from "./components/gkPreview"
import TrendingGk from "./components/trendingGk"
import Footer from "./components/footer"


export default function HomePage() {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[440px] md:h-[520px] bg-[#0a1a3c]">
          {/* Image layer with responsive sources */}
          <picture>
            {/* Mobile image */}
            <source
              media="(max-width: 767px)"
              srcSet="https://res.cloudinary.com/daetdadtt/image/upload/v1756460414/Untitled_design_2_rnzefc.png"
            />
            {/* Tablet + Desktop image */}
            <img
              src="https://res.cloudinary.com/daetdadtt/image/upload/v1756454451/Untitled_design_1_mqwtzz.png"
              alt="CLAT TRIBE banner"
              className="absolute inset-0 h-full w-full object-cover object-bottom md:object-center"
            />
          </picture>

          <div
            className="absolute inset-0 bg-gradient-to-b from-[#0a1a3c]/70 via-transparent to-transparent md:from-transparent"
            aria-hidden
          />

          {/* Overlay content container */}
          <div className="relative z-10 mx-auto h-full w-full max-w-6xl px-4 md:px-8">
            {/* Mobile layout */}
            <div className="flex h-full flex-col items-center justify-end gap-3 text-white md:hidden">
              {/* Title */}
              <div className="text-center">
                <h1 className="text-4xl font-bold leading-tight mt-10">CLAT TRIBE</h1>
                <img
                  src="/under.svg"
                  alt="Underline"
                  className="w-full max-w-[200px]" // adjust size here
                />
              </div>

              {/* CTA pill (glow preserved) */}
              <Link href="/gk">
                <div className="relative mx-auto flex w-full items-center justify-center rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 px-5 py-2 text-[#0a1a3c] shadow-lg transition-transform active:scale-[0.98]">
                  <span className="mr-2 text-xl font-bold">Daily Free GK Here</span>
                </div>
              </Link>

              {/* Tagline */}
              <p className="text-center text-2xl font-bold tracking-wide drop-shadow-[2px_2px_3px_rgba(0,0,0,0.7)]">
                dream <span className="mx-2">.</span> aim <span className="mx-2">.</span> goal
              </p>
            </div>

            {/* Desktop / tablet layout */}
            <div className="hidden h-full w-full text-white md:block">
              {/* Title top-left */}
              <div className="absolute left-6 top-6 md:left-8">
                <h1 className="text-4xl font-bold drop-shadow-[2px_2px_3px_rgba(0,0,0,0.7)] md:text-5xl">CLAT TRIBE</h1>
                <img
                  src="/under.svg"
                  alt="Underline"
                  className="ml-10 w-full max-w-[200px]" // adjust size here
                />
              </div>

              {/* CTA top-right */}
              <Link href="/gk">
                <div className="absolute right-6 top-6 md:right-8">
                  <div className="relative flex items-center rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 px-4 py-1 text-[#0a1a3c] shadow-lg">
                    <span className="mr-1 text-xl font-bold">Daily free GK here</span>
                    <div className="absolute inset-0 -z-10 rounded-l-full bg-yellow-300/40 blur-md" aria-hidden />
                  </div>
                </div>
              </Link>

              {/* Tagline center */}
              <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-4xl font-bold tracking-wide drop-shadow-[2px_2px_3px_rgba(0,0,0,0.7)] md:text-5xl">
                  dream <span className="mx-2">.</span> aim <span className="mx-2">.</span> goal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Section */}
        <div
          className="px-4 py-10 sm:px-6 md:px-8 md:py-12"
          style={{
            background: "linear-gradient(to bottom, #01407E, #ffffff)",
          }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-5 md:gap-8 lg:grid-cols-3 lg:gap-6 mb-12">
              {/* Left side stacked */}
              <div className="space-y-5 md:space-y-6 lg:col-span-2">
                {/* Trending #1 */}
                {/* <section className="py-12 bg-gray-50"> */}
                  <div>
                    <TrendingGk />
                  </div>
                {/* </section> */}

                {/* To-do */}
                <div className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h2 className="mb-4 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-gray-800">To-do</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>⁠Study CLA topics from August 
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
                      ⁠⁠Revise CA 3 topics from June
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
                      Legal revision - contract 
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
                      ⁠⁠Solve 5 Legal Reasoning Questions (Contracts)
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
                      ⁠ ⁠⁠Solve 10 Quants questions 
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
                      Solve 10 CR questions  
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
                      Read Newspaper Editorials 
                    </li>
                  </ul>
                </div>

                {/* Stats combined box */}
                <div className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300">
  <div className="grid grid-cols-2 gap-8 text-center">
    <div className="h-[120px] flex flex-col justify-center">
      <div className="mb-1 text-2xl font-bold text-gray-800 md:text-3xl">660+</div>
      <p className="text-sm text-gray-600 md:text-base">Students enrolled in CLAT 2025</p>
    </div>
    <div className="h-[120px] flex flex-col justify-center">
      <div className="mb-1 text-2xl font-bold text-gray-800 md:text-3xl">6000+</div>
      <p className="text-sm text-gray-600 md:text-base">Students downloaded GK Tracker</p>
    </div>
    <div className="h-[120px] flex flex-col justify-center">
      <div className="mb-1 text-2xl font-bold text-gray-800 md:text-3xl">300+</div>
      <p className="text-sm text-gray-600 md:text-base">1:1 mentorship sessions per month</p>
    </div>
    <div className="h-[120px] flex flex-col justify-center">
      <div className="mb-1 text-2xl font-bold text-gray-800 md:text-3xl">140+</div>
      <p className="text-sm text-gray-600 md:text-base">
        Selection in <span className="font-semibold text-red-500">NLU</span>
      </p>
    </div>
  </div>
</div>

              </div>

              {/* Right GK Therapy Center */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">GK Therapy Center</h2>
                <h3 className="text-2xl font-semibold text-gray-700 mb-6">Gains</h3>
                <ul className="text-lg space-y-6 text-gray-600 mb-8 flex-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Live + Recorded
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Notes + MindMaps
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    FAQs + Tests
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Strategy sessions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    All Topics Covered
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    4.9/5 students rating
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    CLAT Toppers Sessions
                  </li>
                </ul>

                {/* Pricing */}
                <div className="bg-yellow-200 rounded-lg p-4 mb-6 text-center">
                  <span className="text-gray-500 line-through text-lg">3999/-</span>
                  <div className="text-3xl font-bold text-gray-800">1999/-</div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                <a 
                  href="https://courses.clattribe.com/learn/GK-Therapy-Centre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 cursor-pointer text-center"
                >
                  CLAT 2026? Enroll now →
                </a>

               <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                  CLAT 2027? Check the OG batch
                </button>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <GkPreview />
      </section>
       <section>
        <Footer />
      </section>
    </>
  )
}
