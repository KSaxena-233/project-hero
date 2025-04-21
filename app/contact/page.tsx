'use client'

import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-unc-navy mb-12">Contact Us</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Have questions about Project H.E.R.O.? We're here to help!
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:samdhav@unc.edu" className="text-unc-blue hover:text-unc-navy text-lg font-medium">
                samdhav@unc.edu
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700 text-lg">
                University of North Carolina at Chapel Hill
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">What is Project H.E.R.O. and who is it for?</h3>
              <p className="text-gray-700 text-lg">
                Project H.E.R.O. is a platform that connects UNC students interested in becoming Direct Support Professionals (DSPs) with individuals who need support services. It's designed for two groups:
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>UNC students looking to gain experience in disability support services</li>
                  <li>Individuals with disabilities seeking qualified and committed support professionals</li>
                </ul>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">How does the matching process work?</h3>
              <p className="text-gray-700 text-lg">
                Our intelligent matching system works in several steps:
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Create a detailed profile specifying your needs or services</li>
                  <li>Our AI-powered system analyzes compatibility based on support needs, schedules, and preferences</li>
                  <li>You'll receive matches with high compatibility scores</li>
                  <li>Connect with your matches through our secure platform</li>
                </ul>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">What qualifications do DSPs need?</h3>
              <p className="text-gray-700 text-lg">
                Student DSPs should:
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Be currently enrolled at UNC Chapel Hill</li>
                  <li>Complete required training provided through partner agencies</li>
                  <li>Pass background checks and safety screenings</li>
                  <li>Have a genuine interest in disability support services</li>
                </ul>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">How is my privacy protected?</h3>
              <p className="text-gray-700 text-lg">
                We take privacy and security seriously:
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>All personal information is encrypted and stored securely</li>
                  <li>Contact information is only shared after mutual matching</li>
                  <li>You control what information is visible on your profile</li>
                  <li>All data handling complies with HIPAA and privacy regulations</li>
                </ul>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">What support services are available?</h3>
              <p className="text-gray-700 text-lg">
                Services include:
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Personal care and daily living assistance</li>
                  <li>Social and emotional support</li>
                  <li>Educational and vocational support</li>
                  <li>Transportation and community access</li>
                  <li>Respite care and family support</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 