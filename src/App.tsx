import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FindMatch from './pages/FindMatch'
import About from './pages/About'
import Contact from './pages/Contact'

const stats = [
  { label: 'Active DSPs', value: '50+', icon: FaUsers },
  { label: 'UNC Students', value: '200+', icon: FaGraduationCap },
  { label: 'Successful Matches', value: '100+', icon: FaHandHoldingHeart },
  { label: 'Support Hours', value: '5000+', icon: FaChartLine }
];

const icons = {
  profile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="7" r="4"/>
    <path d="M5 19v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/>
    <path d="M8 14h8"/>
    <path d="M12 14v5"/>
  </svg>`,
  match: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M12 2L9.5 8 3 9l4.5 4.5L6 21l6-3 6 3-1.5-7.5L21 9l-6.5-1L12 2z"/>
  </svg>`,
  connect: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M16 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
    <path d="M8 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
    <path d="M12 6.5l-4 5.5"/>
    <path d="M12 17.5l4-5.5"/>
  </svg>`
};

const features = [
  {
    title: 'AI-Powered Matching',
    description: 'Our advanced algorithm considers multiple factors to create optimal matches between DSPs and individuals.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Verified Profiles',
    description: 'All DSPs undergo thorough verification and training to ensure quality support.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Flexible Support',
    description: 'Choose from various support types and schedules that fit your needs.',
    gradient: 'from-green-500 to-teal-500'
  }
];

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <a href="/" className="flex items-center text-unc-blue font-bold text-2xl">
                  Project H.E.R.O.
                </a>
                <div className="ml-10 flex items-center space-x-8">
                  <a href="/" className="text-gray-900 border-b-2 border-unc-blue px-1">
                    Home
                  </a>
                  <a href="/find-match" className="text-gray-500 hover:text-gray-900 px-1">
                    Find Match
                  </a>
                  <a href="/about" className="text-gray-500 hover:text-gray-900 px-1">
                    About Us
                  </a>
                  <a href="/contact" className="text-gray-500 hover:text-gray-900 px-1">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-unc-navy to-unc-blue">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-unc-navy/50 to-unc-blue/50 backdrop-blur-[1px]" />
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/20 rounded-full animate-float"
                style={{
                  width: Math.random() * 100 + 50 + 'px',
                  height: Math.random() * 100 + 50 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 10}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center px-4">
            <div className="flex justify-center mb-8 animate-fade-in-up">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-unc-navy/20 via-unc-light-blue/30 to-unc-navy/20 blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative">
                  <img
                    src="/images/projpic.png"
                    alt="Project H.E.R.O. Logo"
                    className="w-[400px] h-[400px] transform hover:scale-105 transition-transform duration-500 animate-pulse-subtle mix-blend-screen"
                    style={{ 
                      filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              Project H.E.R.O.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Connecting UNC students with individuals who need Direct Support Professionals,
              creating meaningful relationships while addressing critical support needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <a
                href="/find-match"
                className="btn bg-white text-unc-navy hover:bg-white/90 transition-all px-8 py-3 rounded-full font-semibold text-lg"
              >
                Find Your Match
              </a>
              <a
                href="/about"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all px-8 py-3 rounded-full font-semibold text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-unc-light-blue/5 via-transparent to-unc-light-blue/5"></div>
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-unc-light-blue/10 rounded-full blur-3xl animate-pulse-slow"
                style={{
                  width: Math.random() * 400 + 200 + 'px',
                  height: Math.random() * 400 + 200 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animationDelay: `${i * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 relative">
            <h2 className="text-4xl font-bold text-center text-unc-navy mb-16">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-unc-light-blue/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500">
                    <div className="flex flex-col items-center">
                      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                        <div className="relative">
                          <div className="absolute inset-0 bg-unc-light-blue/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                          <div className="relative bg-gradient-to-br from-unc-blue to-unc-navy p-5 rounded-full">
                            <stat.icon className="w-10 h-10 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="text-5xl font-bold text-unc-navy mb-3 group-hover:text-unc-blue transition-colors duration-300">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 font-medium text-center">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-unc-navy/10 via-gray-100 to-unc-navy/10 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-gray-900/[0.07] bg-[size:32px_32px]" />
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-gradient-to-r from-unc-blue/20 to-unc-light-blue/20 rounded-full blur-3xl animate-float"
                style={{
                  width: Math.random() * 300 + 200 + 'px',
                  height: Math.random() * 300 + 200 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${20 + i * 5}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-unc-navy mb-4 animate-fade-in-up drop-shadow-lg">
                Why Choose Project H.E.R.O.?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                Experience the future of support matching with our innovative platform
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative group animate-fade-in-up"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"
                    style={{ backgroundImage: `linear-gradient(to right, ${feature.gradient})` }}
                  />

                  <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-[0_8px_32px_rgb(0,0,0,0.15)] group-hover:shadow-2xl transition-all duration-500 border-2 border-gray-100">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700"
                        style={{ backgroundImage: `linear-gradient(to right, ${feature.gradient})` }}
                      />
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-white rounded-full transform scale-150 blur-xl opacity-50"></div>
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br flex items-center justify-center p-4 relative group-hover:scale-110 transition-transform duration-500 shadow-xl"
                          style={{ backgroundImage: `linear-gradient(to right, ${feature.gradient})` }}>
                          <div className="text-white w-full h-full filter drop-shadow-lg" dangerouslySetInnerHTML={{ 
                            __html: index === 0 ? icons.match : index === 1 ? icons.profile : icons.connect 
                          }} />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500 drop-shadow"
                      style={{ backgroundImage: `linear-gradient(to right, ${feature.gradient})` }}>
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-800 text-lg leading-relaxed group-hover:text-black transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-match" element={<FindMatch />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
} 