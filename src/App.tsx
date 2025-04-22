import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <nav className="border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <a href="/" className="flex items-center text-[#6366F1] font-bold text-2xl">
                  Project H.E.R.O.
                </a>
                <div className="ml-10 flex items-center space-x-8">
                  <a href="/" className="text-gray-900 border-b-2 border-[#6366F1] px-1">
                    Home
                  </a>
                  <a href="/find-dsps" className="text-gray-500 hover:text-gray-900 px-1">
                    Find DSPs
                  </a>
                  <a href="/become-dsp" className="text-gray-500 hover:text-gray-900 px-1">
                    Become a DSP
                  </a>
                  <a href="/about" className="text-gray-500 hover:text-gray-900 px-1">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-32">
              <h1 className="text-[3.5rem] font-bold text-[#111827] leading-tight mb-8">
                Connecting Hearts,<br />Empowering Lives
              </h1>
              <p className="text-[#4B5563] text-xl max-w-3xl mx-auto mb-12">
                Project H.E.R.O. connects UNC students with individuals who need Direct Support Professionals (DSPs),
                addressing the critical shortage of support services in North Carolina while promoting sustainable
                support systems and community integration.
              </p>
              <div className="flex justify-center items-center gap-6">
                <a
                  href="/find-dsps"
                  className="bg-[#6366F1] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#4F46E5]"
                >
                  Find a DSP
                </a>
                <a href="/become-dsp" className="text-[#111827] font-semibold flex items-center">
                  Become a DSP <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Routes>
        <Route path="/" element={null} />
        <Route path="/find-dsps" element={<div>Find DSPs Page (Coming Soon)</div>} />
        <Route path="/become-dsp" element={<div>Become a DSP Page (Coming Soon)</div>} />
        <Route path="/about" element={<div>About Us Page (Coming Soon)</div>} />
      </Routes>
    </Router>
  )
}

export default App 