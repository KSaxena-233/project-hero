'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.classList.add('animate-fade-in', 'opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach(ref => {
      if (ref instanceof HTMLElement) {
        ref.classList.add('opacity-0', 'translate-y-10');
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el) {
      sectionRefs.current[index] = el;
    }
  };

  const teamMembers = [
    { 
      name: "Keshav Saxena",
      role: "Clinical Systems Innovation & AI Strategy Lead",
      description: "Driving innovation at the intersection of clinical care, digital health, and artificial intelligence. Leads the design and implementation of scalable clinical systems, AI-powered matching, and strategic technology initiatives to improve patient outcomes and operational efficiency.",
      image: "/images/k.png",
      linkedin: "https://www.linkedin.com/in/keshav-saxena-9494b6206/"
    },
    { 
      name: "Shruti Madhav",
      role: "CIDD/HDFS Intern + Project Lead",
      description: "Passionate advocate for disability inclusion and community empowerment. At CIDD, Shruti leads research initiatives, supports families, and advances best practices in developmental disabilities. She brings experience in program development, outreach, and advocacy, ensuring Project H.E.R.O. remains grounded in the needs and voices of the disability community.",
      image: "/images/sh.png",
      linkedin: "https://www.linkedin.com/in/shruti-madhav-546386298/"
    },
    { 
      name: "Dr. Robert Christian",
      role: "Site Supervisor",
      description: "Board-certified in Pediatrics and Psychiatry, Dr. Christian leads interdisciplinary care and training at the Carolina Institute for Developmental Disabilities. He advances holistic, team-based approaches and researches effective, sustainable models for individuals with neurodevelopmental and behavioral health needs.",
      image: "/images/ch.png",
      linkedin: "https://www.linkedin.com/in/robert-christian-5a9b9b11/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-unc-light-blue/20 to-white">
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-24 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-unc-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-subtle"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-unc-navy/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse-subtle"></div>
        </div>

        {/* Vision Section */}
        <section 
          ref={(el) => addToRefs(el, 0)}
          className="relative transform transition-all duration-1000 ease-out"
        >
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-unc-navy mb-8 tracking-tight">
              About Project H.E.R.O.
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Project H.E.R.O. is dedicated to creating meaningful connections between UNC students 
              and individuals who need Direct Support Professionals (DSPs). Our platform addresses 
              the critical shortage of support services in North Carolina while promoting sustainable 
              support systems and community integration.
            </p>
          </div>
        </section>

        {/* Testimonial Section */}
        <section 
          ref={(el) => addToRefs(el, 1)}
          className="transform transition-all duration-1000 ease-out"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-unc-navy/5 via-unc-blue/10 to-unc-navy/5 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-lg border border-unc-light-blue/20">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-unc-blue/20 rounded-full flex items-center justify-center text-3xl rotate-12">
                "
              </div>
              <h2 className="text-3xl font-display font-bold text-unc-navy mb-6">
                A Parent's Perspective
              </h2>
              <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed pl-6 border-l-4 border-unc-blue/20">
                "Jarred is 23 and he has low support needs Autism. When we are looking for a DSP, 
                we want someone who is more of a typical peer. Someone who is a huge Tar Heel fan, 
                and wants to do 'typical' college activities together. Our best DSP's have been 
                students because Jarred connects with them very well."
              </blockquote>
              <p className="text-right text-gray-600 font-semibold">– Denise Pascarelli</p>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section 
          ref={(el) => addToRefs(el, 2)}
          className="transform transition-all duration-1000 ease-out"
        >
          <div className="relative group hover:scale-[1.01] transition-transform duration-500">
            <h2 className="text-3xl font-display font-bold text-unc-navy mb-8">
              Privacy & Security
            </h2>
            <div className="prose max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                At Project H.E.R.O., we take your privacy seriously. Our AI matching system is 
                designed with strict privacy controls:
              </p>
              <ul className="grid md:grid-cols-2 gap-6">
                {[
                  "Personal information is never exposed without consent",
                  "Contact details shared only after mutual agreement",
                  "All data is encrypted and stored securely",
                  "Users maintain full control over their information"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-unc-blue/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-unc-navy">✓</span>
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section 
          ref={(el) => addToRefs(el, 3)}
          className="transform transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl font-display font-bold text-unc-navy mb-8">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-unc-navy/5 via-unc-blue/10 to-unc-navy/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-unc-light-blue/20 transform group-hover:scale-105 transition-all duration-500 text-center">
                  {member.image ? (
                    <div className="w-48 h-48 mx-auto mb-6 bg-[#B8CCE4] flex items-center justify-center rounded-xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={240}
                        height={240}
                        className={`object-contain w-full h-full ${member.name === "Dr. Robert Christian" ? "scale-[0.85] translate-y-2" : "scale-[0.85]"}`}
                        priority
                      />
                    </div>
                  ) : (
                    <div className="w-48 h-48 mx-auto mb-6 bg-[#B8CCE4] rounded-xl flex items-center justify-center">
                      <span className="text-4xl text-unc-navy">{member.name[0]}</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-3 text-unc-navy">{member.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <p className="text-unc-blue font-medium text-base">{member.role}</p>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-unc-blue hover:text-unc-navy transition-colors duration-300"
                      aria-label={`Visit ${member.name}'s LinkedIn profile`}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mx-auto max-w-xs">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Team Section */}
        <section 
          ref={(el) => addToRefs(el, 4)}
          className="transform transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl font-display font-bold text-unc-navy mb-8">
            Faculty Supervisor & Community Advisors
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Faculty Supervisor Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-unc-navy/5 via-unc-blue/10 to-unc-navy/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-unc-light-blue/20 transform group-hover:scale-105 transition-all duration-500 text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-[#B8CCE4] flex items-center justify-center rounded-xl">
                  <Image
                    src="/images/j.png"
                    alt="Dr. Jennifer Diliberto"
                    width={240}
                    height={240}
                    className="object-contain w-full h-full scale-[0.85]"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-unc-navy">Dr. Jennifer Diliberto</h3>
                <p className="text-unc-blue font-medium mb-3 text-base">Faculty Supervisor</p>
                <p className="text-gray-600 text-sm leading-relaxed mx-auto max-w-xs">
                  Clinical Associate Professor • Council for Exceptional Children Board • Educators with Disabilities • Working with Families • Inclusive Classroom • Curriculum Development
                </p>
              </div>
            </div>

            {/* Jacklyn Boheler Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-unc-navy/5 via-unc-blue/10 to-unc-navy/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-unc-light-blue/20 transform group-hover:scale-105 transition-all duration-500 text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-[#B8CCE4] flex items-center justify-center rounded-xl">
                  <Image
                    src="/images/g.png"
                    alt="Jacklyn Boheler"
                    width={240}
                    height={240}
                    className="object-contain w-full h-full scale-[0.85]"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-unc-navy">Jacklyn Boheler</h3>
                <p className="text-unc-blue font-medium mb-3 text-base">Community Advisor</p>
                <p className="text-gray-600 text-sm leading-relaxed mx-auto max-w-xs">
                  B3 Co-Founder • SPACE Lab Research Coordinator
                </p>
              </div>
            </div>

            {/* Barbra Levin Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-unc-navy/5 via-unc-blue/10 to-unc-navy/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-unc-light-blue/20 transform group-hover:scale-105 transition-all duration-500 text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-[#B8CCE4] flex items-center justify-center rounded-xl">
                  <Image
                    src="/images/o.png"
                    alt="Barbra Levin"
                    width={240}
                    height={240}
                    className="object-contain w-full h-full scale-[0.85]"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-unc-navy">Barbra Levin</h3>
                <p className="text-unc-blue font-medium mb-3 text-base">Community Advisor</p>
                <p className="text-gray-600 text-sm leading-relaxed mx-auto max-w-xs">
                  The G Day Foundation / Employee of Record • Parent
                </p>
              </div>
            </div>

            {/* Pascarelli's Card */}
            <div className="relative group md:col-start-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-unc-navy/5 via-unc-blue/10 to-unc-navy/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-unc-light-blue/20 transform group-hover:scale-105 transition-all duration-500 text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-[#B8CCE4] rounded-xl flex items-center justify-center">
                  <span className="text-4xl text-unc-navy">P</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-unc-navy">Pascarelli's</h3>
                <p className="text-unc-blue font-medium mb-3 text-base">Community Advisor</p>
                <p className="text-gray-600 text-sm leading-relaxed mx-auto max-w-xs">
                  Community advocates • Parents
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section 
          ref={(el) => addToRefs(el, 5)}
          className="transform transition-all duration-1000 ease-out"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-unc-navy/5 via-unc-blue/10 to-unc-navy/5 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-unc-light-blue/20">
              <h2 className="text-3xl font-display font-bold text-unc-navy mb-8">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Community Integration",
                    description: "Promoting meaningful participation in community life and fostering genuine connections.",
                    icon: "🤝"
                  },
                  {
                    title: "Sustainable Support",
                    description: "Building long-term support systems that benefit both students and individuals seeking support.",
                    icon: "🌱"
                  },
                  {
                    title: "Privacy First",
                    description: "Ensuring the highest standards of privacy and data protection for all users.",
                    icon: "🔒"
                  },
                  {
                    title: "Inclusive Design",
                    description: "Creating an accessible platform that serves the diverse needs of our community.",
                    icon: "♿"
                  }
                ].map((value, index) => (
                  <div 
                    key={index}
                    className="group/card relative transform hover:scale-105 transition-all duration-500"
                  >
                    <div className="flex items-start space-x-4">
                      <span className="flex-shrink-0 w-12 h-12 bg-unc-blue/20 rounded-xl flex items-center justify-center text-2xl">
                        {value.icon}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-unc-navy group-hover/card:text-unc-blue transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 