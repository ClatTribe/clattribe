import React from 'react';

const achievements = [
  {
    rank: "AIR 1",
    exam: "IPMAT 2025",
    name: "Nikhilesh Sanka",
    quote: "The framework is rigorous. It's not just about solving questions; it's about mastering the mindset of a topper.",
    imageUrl: "https://res.cloudinary.com/dcr8ec2rt/image/upload/v1771154582/air1_zhepy9_ydf9l2.png"
  },
  {
    rank: "AIR 7",
    exam: "IPMAT 2025",
    name: "Akshat Attri",
    quote: "Strategy is what separates the winners from the participants. IPM Careers founders taught me exactly that.",
    imageUrl: "https://res.cloudinary.com/dcr8ec2rt/image/upload/v1771154616/Gemini_Generated_Image_vjwn7evjwn7evjwn_sefsrp.png"
  }
];

const HeroWithPedigree: React.FC = () => {
  const scrollToLeadForm = () => {
    const element = document.getElementById('leadform');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden bg-[#0F172B]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.05] pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#f9a01b] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f9a01b] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-6 bg-[#f9a01b]/10 rounded-full border border-[#f9a01b]/20">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f9a01b]">Master the Law of Success</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
              The Science of <span className="bg-gradient-to-r from-[#f59e0b] to-[#fde68a] bg-clip-text text-transparent italic">Rank One.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
              Don't just prepare for CLAT. Engineer your victory with the same framework that dominated IPMAT 2025.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={scrollToLeadForm}
                className="w-full sm:w-auto bg-transparent text-white border-2 border-slate-600 px-10 py-4 rounded-2xl text-base font-black hover:border-[#f9a01b] transition-all coursor-pointer"
              >
                Watch Demo Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pedigree Section */}
      <section className="py-16 sm:py-20 bg-[#0F172B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xs font-black text-[#f9a01b] uppercase tracking-[0.3em] mb-3 flex items-center gap-3">
                <span className="h-0.5 w-10 bg-[#f9a01b]"></span>
                Proven Excellence
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Winning is a Habit. <br />
                <span className="text-slate-500">Success is a Tradition.</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-medium">
                After dominating IPMAT 2025 with AIR 1 & AIR 7, the founders of IPM Careers bring their 'Rank-One' Framework to CLAT. We didn't just start yesterday; we've already conquered one of India's toughest exams.
              </p>
            </div>
            <div className="flex items-center gap-4 border-l-6 border-[#f9a01b] pl-6 py-3">
              <span className="text-5xl font-black text-[#f9a01b]">2025</span>
              <span className="text-xs font-black text-slate-400 uppercase leading-none tracking-tighter">The Year of<br/>Absolute Dominance</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {achievements.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:shadow-2xl hover:shadow-[#f9a01b]/10 transition-all duration-500">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="w-full lg:w-2/5 relative min-h-[280px] lg:h-auto overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172B]/90 via-[#0F172B]/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-[#f9a01b] text-[#0F172B] px-3 py-1 rounded-lg text-sm font-black inline-block mb-2 shadow-xl">
                        {item.rank}
                      </div>
                      <p className="text-white text-xs font-black uppercase tracking-widest opacity-80">{item.exam}</p>
                    </div>
                  </div>
                  <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-slate-900/50">
                    <div>
                      <svg className="h-8 w-8 text-[#f9a01b] mb-4 opacity-40" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-lg text-slate-300 italic leading-relaxed mb-6 font-medium">
                        "{item.quote}"
                      </p>
                      <div className="h-1 w-10 bg-[#f9a01b] mb-4"></div>
                      <h4 className="text-xl font-black text-white">{item.name}</h4>
                      <p className="text-xs font-bold text-[#f9a01b] uppercase tracking-widest mt-1">IPMAT Achiever</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroWithPedigree;