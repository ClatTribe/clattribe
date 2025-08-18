// src/app/page.tsx
import DefaultLayout from "./defaultlayout";
import { Scale, Users, BookOpen, GraduationCap, FileText } from "lucide-react"; // Added icons

export default function HomePage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 text-center relative overflow-hidden">
        <h1 className="text-2xl font-bold text-red-700 underline mb-10">
          (Every Element in this landing page is just a Sample and Protoype yet)
        </h1>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#024687] mb-4">
          Empowering Aspirants for CLAT & Law Careers
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Clat Tribe is your trusted partner in cracking CLAT and achieving your
          dream law career with expert mentorship, structured resources, and
          community support.
        </p>
        <button className="px-8 py-3 bg-[#024687] text-white font-semibold rounded-lg shadow hover:bg-[#02356a] transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#024687] mb-12">
          Why Choose <span className="text-black">Clat Tribe?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <Scale className="mx-auto text-[#024687] mb-4 w-12 h-12" />
            <h3 className="text-xl font-semibold mb-3">Expert Legal Mentors</h3>
            <p className="text-gray-600">
              Learn from top educators, advocates, and mentors with proven track
              records in guiding aspirants to NLU success.
            </p>
          </div>
          <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <BookOpen className="mx-auto text-[#024687] mb-4 w-12 h-12" />
            <h3 className="text-xl font-semibold mb-3">Structured Resources</h3>
            <p className="text-gray-600">
              Access exclusive study material, case-based learning, and smart
              strategies designed specifically for CLAT preparation.
            </p>
          </div>
          <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <Users className="mx-auto text-[#024687] mb-4 w-12 h-12" />
            <h3 className="text-xl font-semibold mb-3">Peer Community</h3>
            <p className="text-gray-600">
              Be a part of India’s growing CLAT community—discuss, collaborate,
              and achieve success together.
            </p>
          </div>
        </div>
      </section>

      {/* Law Entrance Insights Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#024687] mb-12">
            Stay Ahead in CLAT & Law Entrance Exams
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
              <FileText className="mx-auto text-[#024687] mb-4 w-12 h-12" />
              <h3 className="text-xl font-semibold mb-3">Mock Tests & Analysis</h3>
              <p className="text-gray-600">
                Regular test series with in-depth performance analysis to track
                your progress and strengthen weak areas.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
              <GraduationCap className="mx-auto text-[#024687] mb-4 w-12 h-12" />
              <h3 className="text-xl font-semibold mb-3">Exam Strategy Sessions</h3>
              <p className="text-gray-600">
                Learn time management, question prioritization, and smart
                approaches directly from experts to maximize your scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#024687] mb-12">
          Inspiring Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <p className="italic text-gray-600 mb-4">
              “Clat Tribe’s mentorship and resources helped me crack CLAT with
              confidence”
            </p>
            <h4 className="font-semibold text-[#024687]">— Saurabh Sharma</h4>
          </div>
          <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <p className="italic text-gray-600 mb-4">
              “Clat Tribe’s mentorship and resources helped me crack CLAT with
              confidence”
            </p>
            <h4 className="font-semibold text-[#024687]">— Saurabh Sharma</h4>
          </div>
          <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <p className="italic text-gray-600 mb-4">
              “Clat Tribe’s mentorship and resources helped me crack CLAT with
              confidence”
            </p>
            <h4 className="font-semibold text-[#024687]">— Saurabh Sharma</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#024687] text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Begin Your Law Journey Today</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Join thousands of aspirants preparing with Clat Tribe. Take the first
          step toward your dream law school and secure your career.
        </p>
        <button className="px-8 py-3 bg-white text-[#024687] font-semibold rounded-lg shadow hover:bg-gray-200 transition">
          Enroll Now
        </button>
      </section>
    </DefaultLayout>
  );
}
