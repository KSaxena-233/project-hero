import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Find DSPs', href: '/find-dsps', current: false },
  { name: 'Become a DSP', href: '/become-dsp', current: false },
  { name: 'About Us', href: '/about', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link to="/" className="text-[#6366F1] text-2xl font-bold">
                Project H.E.R.O.
              </Link>
              <div className="flex space-x-8">
                <Link to="/" className="text-gray-900 border-b-2 border-[#6366F1] px-1">
                  Home
                </Link>
                <Link to="/find-dsps" className="text-gray-500 hover:text-gray-700 px-1">
                  Find DSPs
                </Link>
                <Link to="/become-dsp" className="text-gray-500 hover:text-gray-700 px-1">
                  Become a DSP
                </Link>
                <Link to="/about" className="text-gray-500 hover:text-gray-700 px-1">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mt-32">
              <h1 className="text-[3.5rem] font-bold text-[#1e293b] leading-tight mb-8">
                Connecting Hearts,<br />
                Empowering Lives
              </h1>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
                Project H.E.R.O. connects UNC students with individuals who need Direct Support
                Professionals (DSPs), addressing the critical shortage of support services in North
                Carolina while promoting sustainable support systems and community integration.
              </p>
              <div className="flex justify-center items-center gap-6">
                <Link
                  to="/find-dsps"
                  className="bg-[#6366F1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4F46E5]"
                >
                  Find a DSP
                </Link>
                <Link
                  to="/become-dsp"
                  className="text-gray-900 font-semibold flex items-center"
                >
                  Become a DSP →
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Routes>
          <Route path="/" element={null} />
          <Route path="/find-dsps" element={<div>Find DSPs Page (Coming Soon)</div>} />
          <Route path="/become-dsp" element={<div>Become a DSP Page (Coming Soon)</div>} />
          <Route path="/about" element={<div>About Us Page (Coming Soon)</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 