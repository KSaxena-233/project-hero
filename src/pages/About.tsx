import React from 'react';
import { FaGraduationCap, FaHandHoldingHeart, FaUsers } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Program Director',
    description: 'Leading the initiative with 15+ years of experience in developmental disability support.',
    icon: FaGraduationCap
  },
  {
    name: 'Michael Chen',
    role: 'Community Coordinator',
    description: 'Building bridges between UNC students and families in need of support.',
    icon: FaUsers
  },
  {
    name: 'Emily Rodriguez',
    role: 'Support Specialist',
    description: 'Ensuring quality care and training for all DSP participants.',
    icon: FaHandHoldingHeart
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-unc-navy to-unc-blue py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Project H.E.R.O.</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Helping Everyone Reach Opportunities through meaningful connections and support
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-unc-navy mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Project H.E.R.O. was founded with a clear vision: to bridge the gap between
              UNC students passionate about making a difference and individuals who need
              dedicated support professionals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that by creating meaningful connections, we can address the
              critical shortage of Direct Support Professionals while providing valuable
              experience to students and essential support to those who need it most.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-unc-blue to-unc-navy w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaHandHoldingHeart className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-unc-navy mb-2">Compassionate Care</h3>
              <p className="text-gray-600">
                Ensuring every individual receives personalized, caring support that meets their unique needs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-unc-blue to-unc-navy w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaUsers className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-unc-navy mb-2">Community Connection</h3>
              <p className="text-gray-600">
                Building strong relationships between students and community members.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-unc-blue to-unc-navy w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaGraduationCap className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-unc-navy mb-2">Professional Growth</h3>
              <p className="text-gray-600">
                Providing students with valuable experience and professional development opportunities.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-unc-navy mb-8 text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-gradient-to-br from-unc-blue to-unc-navy w-16 h-16 rounded-full flex items-center justify-center">
                      <member.icon className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-unc-navy mb-2">{member.name}</h3>
                  <p className="text-unc-blue font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 