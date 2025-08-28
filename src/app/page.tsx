"use client"
import DefaultLayout from "./defaultlayout"
import BlogsPreview from "./components/blogsPreview";

export default function HomePage() {
  return (
    <DefaultLayout>
      <div className="min-h-screen">
        {/* Hero Section with Background Image */}
        <div
          className="relative h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/daetdadtt/image/upload/v1756378398/CLAT_TRIBE_pages-to-jpg-0001_oplyqi.jpg')",
          }}
        >
          <a
            href="#"
            className="bg-white/95 backdrop-blur-md rounded-3xl px-6 py-3 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 hover:bg-white border-2 border-blue-200 -mt-40 cursor-pointer block"
          >
            <h1 className="text-lg md:text-xl font-extrabold text-gray-900 text-center tracking-tight">
              Daily Free GK Thoughts
            </h1>
          </a>
        </div>

        {/* Main Section */}
        <div
          className="py-12 px-4 min-h-screen"
          style={{
            background: "linear-gradient(to bottom, #024687, #ffffff)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Left stacked + Right GK Therapy */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {/* Left side stacked */}
              <div className="lg:col-span-2 space-y-6">
                {/* Trending #1 */}
                <a
                  href="#"
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    Trending #1
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    (Will have the most important and trending GK Blog. Must be clickable)
                  </p>
                </a>

                {/* To-do */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    To-do
                  </h2>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      3 GK Topics
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Criminal Law basics
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Solve Quants 12 questions
                    </li>
                  </ul>
                </div>

                {/* Stats combined box */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-2 gap-16 text-center">
                    <div>
                      <div className="text-3xl font-bold text-gray-800 mb-2">660+</div>
                      <p className="text-gray-600">Students enrolled in CLAT 2025</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-800 mb-2">6000+</div>
                      <p className="text-gray-600">Students downloaded GK Tracker</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-800 mb-2">300+</div>
                      <p className="text-gray-600">1:1 mentorship sessions per month</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-800 mb-2">140+</div>
                      <p className="text-gray-600">
                        Selection in <span className="text-red-500 font-semibold">NLU</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right GK Therapy Center */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  GK Therapy Center
                </h2>
                <h3 className="text-xl font-semibold text-gray-700 mb-6">
                  Gains
                </h3>
                <ul className="space-y-3 text-gray-600 mb-8 flex-1">
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
                </ul>

                {/* Pricing */}
                <div className="bg-yellow-200 rounded-lg p-4 mb-6 text-center">
                  <span className="text-gray-500 line-through text-lg">7999/-</span>
                  <div className="text-3xl font-bold text-gray-800">2999/-</div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                    CLAT 2026? Enroll now →
                  </button>
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
        <BlogsPreview />
      </section>
    </DefaultLayout>
  )
}
