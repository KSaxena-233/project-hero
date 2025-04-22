import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
      <div className="min-h-screen bg-gray-50">
        <Disclosure as="nav" className="bg-white shadow">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <span className="text-2xl font-bold text-indigo-600">Project H.E.R.O.</span>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'border-indigo-500 text-gray-900'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                          : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main>
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Connecting Hearts, Empowering Lives
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Project H.E.R.O. connects UNC students with individuals who need Direct Support Professionals (DSPs),
                  addressing the critical shortage of support services in North Carolina while promoting sustainable
                  support systems and community integration.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/find-dsps"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Find a DSP
                  </a>
                  <a href="/become-dsp" className="text-sm font-semibold leading-6 text-gray-900">
                    Become a DSP <span aria-hidden="true">→</span>
                  </a>
                </div>
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