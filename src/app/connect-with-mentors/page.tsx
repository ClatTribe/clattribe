"use client";

import React from 'react';
import { MapPin, Award, GraduationCap, Building2, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';

const MentorsPage: React.FC = () => {
  const mentors = [
    {
      name: "Aryan Sharma",
      score: 96.5,
      grade: 94,
      hometown: "New Delhi",
      college: "NLSIU Bangalore"
    },
    {
      name: "Priya Mehta",
      score: 94.2,
      grade: 96,
      hometown: "Mumbai",
      college: "NALSAR Hyderabad"
    },
    {
      name: "Rohan Iyer",
      score: 92.8,
      grade: 92,
      hometown: "Chennai",
      college: "WBNUJS Kolkata"
    },
    {
      name: "Sneha Patel",
      score: 89.5,
      grade: 89,
      hometown: "Ahmedabad",
      college: "GNLU Gandhinagar"
    },
    {
      name: "Vikram Singh",
      score: 86,
      grade: 87,
      hometown: "Lucknow",
      college: "NLIU Bhopal"
    },
    {
      name: "Anjali Reddy",
      score: 83,
      grade: 91,
      hometown: "Hyderabad",
      college: "HNLU Raipur"
    },
    {
      name: "Karan Malhotra",
      score: 80.5,
      grade: 85,
      hometown: "Chandigarh",
      college: "RMLNLU Lucknow"
    },
    {
      name: "Pooja Desai",
      score: 78,
      grade: 84,
      hometown: "Pune",
      college: "NLU Odisha, Cuttack"
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        {/* Background decoration */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl sm:w-[600px] sm:h-[600px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl sm:w-[800px] sm:h-[800px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Header */}
          <div className="text-center space-y-3 mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Connect With <span className="text-[#F59E0B]">Mentors</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
              Learn from successful CLAT 2025 qualifiers who are now studying at top NLUs
            </p>
          </div>

          {/* Mentors Grid */}
          <div className="mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="relative rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-4 hover:border-[#F59E0B]/50 transition-all duration-300 h-full"
                >
                  <h3 className="text-lg font-bold text-white mb-3 min-h-[28px]">{mentor.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Award className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                      <div>
                        <div className="text-slate-400 text-xs">CLAT</div>
                        <div className="font-semibold text-[#F59E0B]">{mentor.score}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-300">
                      <GraduationCap className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                      <div>
                        <div className="text-slate-400 text-xs">12th</div>
                        <div className="font-semibold">{mentor.grade}%</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                      <div>
                        <div className="text-slate-400 text-xs">From</div>
                        <div className="font-medium text-xs min-h-[16px]">{mentor.hometown}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-300">
                      <Building2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                      <div>
                        <div className="text-slate-400 text-xs">College</div>
                        <div className="font-medium text-xs leading-tight min-h-[28px]">{mentor.college}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* <div className="flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-4 min-h-[168px]">
                <span className="text-slate-400 text-sm">and many more...</span>
              </div> */}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="max-w-2xl mx-auto">
            <div className="rounded-xl border-2 border-[#F59E0B]/30 bg-slate-900/70 backdrop-blur-sm p-6 sm:p-8 text-center">
              <div className="mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Join Our Mentorship Community
                </h2>
                <p className="text-sm sm:text-base text-slate-400">
                  Connect with mentors, ask questions, and get guidance for your CLAT journey
                </p>
              </div>
              
              <a
                href="https://chat.whatsapp.com/ERcCj20bxKZ1ukVHeWG5vU?mode=hqrc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Join WhatsApp Group</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentorsPage;