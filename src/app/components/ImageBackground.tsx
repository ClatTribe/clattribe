import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
interface HeroProps {
    onNavigate: (section: 'leadform' | 'capsules') => void;
  }
const ImageBackground: React.FC<HeroProps>=({onNavigate})=> {
  return (
    <div className='md:hidden relative'>
        <img className='h-screen w-full object-cover' src="https://res.cloudinary.com/daetdadtt/image/upload/v1765958092/hiii_cpo4hu.png" alt="" />
        <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-left absolute top-[68%]">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left mb-3 md:mb-0"
        >
          <div
            className="inline-block w-[215px] px-3 mt-0 py-1 mb-2 border rounded-full text-sm font-semibold tracking-wide"
            style={{
              borderColor: "#f59e0b4D",
              backgroundColor: "#f59e0b1A",
              color: "#f59e0b",
            }}
          >
            #1 GK PLATFORM FOR CLAT
          </div>

          <h1 className="text-3xl md:text-6xl w-full font-serif font-bold leading-tight mb-2">
            Master the Facts.
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r"
              style={{
                backgroundImage: "linear-gradient(to right, #f59e0b, #fde68a)",
              }}
            >
              Rule the Law.
            </span>
          </h1>
          </motion.div>

          {/* <p className="text-slate-400 text-[14px] md:text-xl mb-6 max-w-lg leading-relaxed">
            Stop drowning in newspapers. ClatTribe delivers high-impact GK
            capsules, smart flashcards, and strategies curated by us.
          </p> */}

          {/* <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate('leadform')}
              className="px-8 py-4 font-bold rounded-lg transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105"
              style={{
                backgroundColor: "#f59e0b",
                color: "#0f172a",
              }}
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('capsules')}
              className="px-8 py-4 border text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:bg-white/10 hover:scale-105"
              style={{
                borderColor: "#1e293b",
                backgroundColor: "#1e293b80",
              }}
            >
              <BookOpen className="w-5 h-5" />
              View Capsules
            </button>
          </div> */}
        {/* </motion.div> */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left mb-3 md:mb-0"
        >
        <div className=" flex  sm:flex-row sm:gap-4 gap-2">
            <button
              onClick={() => onNavigate('leadform')}
              className="sm:px-8 h-[45px] whitespace-nowrap sm:py-4 p-4 font-bold rounded-lg transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105"
              style={{
                backgroundColor: "#f59e0b",
                color: "#0f172a",
              }}
            >
              Get Started <span className='hidden sm:block'>Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('capsules')}
              className="sm:px-8 sm:py-4 p-4 h-[45px] whitespace-nowrap border text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:bg-white/10 hover:scale-105"
              style={{
                borderColor: "#1e293b",
                backgroundColor: "#1e293b80",
              }}
            >
              <BookOpen className="w-5 h-5" />
              View Capsules
            </button>
          </div>
          </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <div className="relative w-80 h-80 mb-7 md:w-[500px] md:h-[600px]">
            {/* Decorative Frame */}
            {/* <div
              className="absolute inset-0 border-2 rounded-2xl transform rotate-3 scale-105"
              style={{ borderColor: "#f59e0b33" }}
            ></div> */}

            <div
              // className="absolute inset-0 bg-gradient-to-b z-10"
              // style={{ backgroundImage: "linear-gradient(to bottom, transparent, #0f172a)" }}
            ></div>

            {/* <img
              src="https://res.cloudinary.com/daetdadtt/image/upload/v1765009390/IMG_5613_1_knzs0v.jpg"
              alt=" Star Teacher"
              className="w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-700"
            /> */}

            
          </div>
        </motion.div>
        

      </div>
      

    </div>
  )
}

export default ImageBackground