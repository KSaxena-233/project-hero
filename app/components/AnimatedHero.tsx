'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function AnimatedHero() {
  const [typedText, setTypedText] = useState("");
  const [motivationalPhrase, setMotivationalPhrase] = useState("");
  const fullText = "Project H.E.R.O.";
  
  const motivationalPhrases = [
    "Connect. Inspire. Grow.",
    "Building Bridges Together",
    "Empowering Research",
    "Innovate Together",
    "Collaborate & Thrive",
    "Research Without Borders",
    "Unite & Discover"
  ];

  useEffect(() => {
    let currentIndex = 0;
    let isTypingMain = true;
    let currentPhraseIndex = 0;
    let pauseCounter = 0;
    
    const typingInterval = setInterval(() => {
      if (isTypingMain) {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          isTypingMain = false;
          currentIndex = 0;
          pauseCounter = 0;
        }
      } else {
        if (pauseCounter < 10) { // Pause before starting motivational phrase
          pauseCounter++;
        } else {
          const currentPhrase = motivationalPhrases[currentPhraseIndex];
          if (currentIndex <= currentPhrase.length) {
            setMotivationalPhrase(currentPhrase.slice(0, currentIndex));
            currentIndex++;
          } else {
            // Reset for next phrase after a delay
            setTimeout(() => {
              setMotivationalPhrase("");
              currentIndex = 0;
              currentPhraseIndex = (currentPhraseIndex + 1) % motivationalPhrases.length;
            }, 2000);
          }
        }
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  const partners = [
    { name: 'UNC', image: '/images/UNC.png', animation: 'animate-float-1' },
    { name: 'Duke', image: '/images/Duke.png', animation: 'animate-float-2' },
    { name: 'NC State', image: '/images/NCState.png', animation: 'animate-float-3' },
  ];

  return (
    <section className="text-center py-24 bg-gradient-to-b from-unc-light-blue via-unc-light-blue/90 to-white rounded-lg relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-float"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-unc-navy/20 via-unc-light-blue/30 to-unc-navy/20 blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative animate-float">
              <Image
                src="/images/projpic.png"
                alt="Project H.E.R.O. Logo"
                width={400}
                height={400}
                className="transform hover:scale-105 transition-transform duration-500 animate-pulse-subtle"
                priority
                style={{ filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))' }}
              />
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-display font-bold text-unc-navy mb-4 tracking-tight relative">
            <span className="inline-block overflow-hidden">
              {typedText}
              <span className="animate-blink">|</span>
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-unc-navy/80 font-light mb-8 h-8 relative">
            <span className="inline-block overflow-hidden">
              {motivationalPhrase}
              {motivationalPhrase && <span className="animate-blink">|</span>}
            </span>
          </div>
          
          <div className="flex justify-center items-center gap-16 mb-16">
            <div className="flex items-center gap-16">
              {partners.map((partner, index) => (
                <div 
                  key={partner.name}
                  className={`relative group ${partner.animation}`}
                >
                  <div className="absolute inset-0 bg-gradient-radial from-unc-light-blue/30 to-transparent rounded-full transform scale-110 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative transform hover:scale-110 transition-all duration-300 hover:drop-shadow-2xl">
                    <Image
                      src={partner.image}
                      alt={`${partner.name} Logo`}
                      width={200}
                      height={80}
                      className="relative z-10"
                      style={{ 
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link 
            href="/find-match" 
            className="inline-block relative overflow-hidden group px-8 py-4 bg-unc-navy text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-unc-navy/90 hover:scale-105"
          >
            <span className="relative z-10">Find Your Match</span>
            <div className="absolute inset-0 bg-gradient-to-r from-unc-light-blue/0 via-white/20 to-unc-light-blue/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </Link>
        </div>
      </div>
    </section>
  )
} 